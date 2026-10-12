import { defaultBaseline } from '../data/default-market-baseline.js';

/**
 * MarketBenchmarkManager
 * 문피아 실제 시장 표본 데이터를 바탕으로 화수(N)별 통계 모수(Log-Normal)를 관리하고,
 * 1일 1회 chrome.storage.local 캐싱을 통해 딜레이 0ms로 상대 백분위와 점수를 산출합니다.
 */
export class MarketBenchmarkManager {
  constructor() {
    this.cachedParams = null;
    this.cachedDate = null;
    this.baseline = defaultBaseline;
  }

  /**
   * 한국 표준시(KST) 기준 오늘 날짜 문자열(YYYY-MM-DD)을 반환합니다.
   * @returns {string}
   */
  getTodayKey() {
    const now = new Date();
    // UTC + 9시간 (KST)
    const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    return kst.toISOString().slice(0, 10);
  }

  /**
   * 오늘 날짜의 벤치마크 모수를 취득합니다. (1일 1회 캐시 우선)
   * @returns {Promise<Object>}
   */
  async getModelParams() {
    const today = this.getTodayKey();

    // 1. 메모리 캐시 확인
    if (this.cachedParams && this.cachedDate === today) {
      return this.cachedParams;
    }

    // 2. chrome.storage.local 확인
    const storageKey = `munpia_market_stats_${today}`;
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      try {
        const stored = await chrome.storage.local.get(storageKey);
        if (stored && stored[storageKey]) {
          this.cachedParams = stored[storageKey];
          this.cachedDate = today;
          return this.cachedParams;
        }
      } catch (err) {
        console.warn('[Munpia Utility] 스토리지 캐시 조회 실패, 기본 모수 사용:', err);
      }
    }

    // 3. 오늘 캐시가 없으면 기본 모수를 바탕으로 초기화하고 스토리지에 캐시
    const initialParams = {
      date: today,
      freeModel: this.baseline.freeModel,
      paidModel: this.baseline.paidModel,
      source: 'baseline',
    };

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      try {
        await chrome.storage.local.set({ [storageKey]: initialParams });
      } catch {
        // 캐시 쓰기 실패는 무시
      }
    }

    this.cachedParams = initialParams;
    this.cachedDate = today;
    return this.cachedParams;
  }

  /**
   * 화수(N)에 따른 Hill 성장 모델 기대치 mu(N)을 산출합니다.
   * mu(N) = mu_base + delta_mu * (N^k / (N^k + n50^k))
   * @param {Object} paramObj { mu_base, delta_mu, k, n50, sigma }
   * @param {number} chapterCount
   * @returns {number}
   */
  calculateExpectedMu(paramObj, chapterCount) {
    if (!paramObj) return 0;
    const n = Math.max(1, Number(chapterCount) || 1);
    const { mu_base, delta_mu, k, n50 } = paramObj;

    const nk = Math.pow(n, k);
    const n50k = Math.pow(n50, k);
    const growthRatio = nk / (nk + n50k);

    return mu_base + delta_mu * growthRatio;
  }

  /**
   * 측정값의 로그 정규 분포 표준화 Z-점수를 산출합니다.
   * Z = (ln(X) - mu(N)) / sigma
   * @param {number} value 측정값 (선호작, 조회수 등)
   * @param {Object} paramObj { mu_base, delta_mu, k, n50, sigma }
   * @param {number} chapterCount 현재 연재 화수 N
   * @returns {number}
   */
  calculateZScore(value, paramObj, chapterCount) {
    if (!paramObj || value <= 0) return -3.5;
    const val = Math.max(1, Number(value) || 1);
    const lnVal = Math.log(val);
    const mu = this.calculateExpectedMu(paramObj, chapterCount);
    const sigma = Math.max(0.1, paramObj.sigma || 0.8);

    return (lnVal - mu) / sigma;
  }

  /**
   * 표준 정규 분포의 누적 분포 함수 Phi(Z)를 근사 계산하여 백분위를 반환합니다.
   * @param {number} z
   * @returns {number} 0 ~ 1 사이 백분위 (0.99 -> 상위 1%)
   */
  calculateCDF(z) {
    // 오차 함수 근사 (Abramowitz and Stegun)
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989422804014337 * Math.exp(-z * z / 2);
    const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
    return z > 0 ? 1 - p : p;
  }

  /**
   * Z-점수를 100점 점근 함수(Sigmoid)를 통해 만점 기준 점수로 매핑합니다.
   * Score = maxPoints / (1 + exp(-beta * Z))
   * @param {number} z
   * @param {number} [maxPoints=45] 만점
   * @param {number} [beta=0.85] 기울기 계수
   * @returns {number}
   */
  calculateSigmoidScore(z, maxPoints = 45, beta = 0.85) {
    if (typeof z !== 'number' || isNaN(z)) return 0;
    const score = maxPoints / (1 + Math.exp(-beta * z));
    return Math.max(0, Math.min(maxPoints, score));
  }

  /**
   * 작품 데이터를 바탕으로 상업 체급(Pillar 1, 45점 만점)을 정밀 산출합니다.
   * @param {Object} params
   * @param {boolean} params.isPaid 유료 연재 여부
   * @param {number} params.favorites 선호작 수
   * @param {number} params.avgFreeHits 무료 회당 평균 조회수
   * @param {number} params.avgPurchases 유료 편당 평균 구매수
   * @param {number} params.totalRevenue 총 누적 매출
   * @param {number} params.totalChapters 전체 화수
   * @param {number} params.paidChaptersCount 유료 연재 화수
   * @returns {Object} { score, label, detail }
   */
  evaluateScalePower({
    isPaid,
    favorites = 0,
    avgFreeHits = 0,
    avgPurchases = 0,
    totalRevenue = 0,
    totalChapters = 1,
    paidChaptersCount = 0,
  }) {
    const model = this.cachedParams || this.baseline;
    const freeParams = model.freeModel || this.baseline.freeModel;
    const paidParams = model.paidModel || this.baseline.paidModel;

    const n = Math.max(1, totalChapters);

    // 1) 무료 모델 체급 점수 산출
    const favZ = this.calculateZScore(favorites, freeParams.fav, n);
    const hitZ = this.calculateZScore(avgFreeHits, freeParams.hits, n);

    const favScore = this.calculateSigmoidScore(favZ, 45, 0.85);
    const hitScore = this.calculateSigmoidScore(hitZ, 45, 0.85);
    const freeScaleScore = favorites > 0 ? (0.60 * favScore + 0.40 * hitScore) : hitScore;

    const freePercentile = this.calculateCDF(favorites > 0 ? (0.60 * favZ + 0.40 * hitZ) : hitZ);

    // 2) 유료 모델 체급 점수 산출
    const purZ = this.calculateZScore(avgPurchases, paidParams.purchases, n);
    const revZ = this.calculateZScore(totalRevenue, paidParams.revenue, n);

    const purScore = this.calculateSigmoidScore(purZ, 45, 0.85);
    const revScore = this.calculateSigmoidScore(revZ, 45, 0.85);
    const paidScaleScore = 0.70 * purScore + 0.30 * revScore;

    const paidPercentile = this.calculateCDF(0.70 * purZ + 0.30 * revZ);

    // 3) 트랙별 분기
    if (paidChaptersCount >= 10) {
      // Track B: 유료 표준작
      const topPct = ((1 - paidPercentile) * 100).toFixed(1);
      return {
        score: Math.min(45, paidScaleScore),
        label: `평균 구매 ${Math.round(avgPurchases).toLocaleString()}회 (상위 ${topPct}%)`,
        percentile: paidPercentile,
        track: 'B',
      };
    } else if (paidChaptersCount === 0) {
      // Track A: 무료 연재작
      const topPct = ((1 - freePercentile) * 100).toFixed(1);
      const label = favorites > 0
        ? `선호작 ${favorites.toLocaleString()}명 (${n}화 기준 상위 ${topPct}%)`
        : `평균 조회 ${Math.round(avgFreeHits).toLocaleString()}회 (상위 ${topPct}%)`;
      return {
        score: Math.min(45, freeScaleScore),
        label,
        percentile: freePercentile,
        track: 'A',
      };
    } else {
      // Track T: 유료 1~9화 신규 전환 과도기 (가중 합성)
      const wPaid = paidChaptersCount / 10;
      const blendedScore = (1 - wPaid) * freeScaleScore + wPaid * paidScaleScore;
      const blendedPct = (1 - wPaid) * freePercentile + wPaid * paidPercentile;
      const topPct = ((1 - blendedPct) * 100).toFixed(1);

      return {
        score: Math.min(45, blendedScore),
        label: `전환 ${paidChaptersCount}화 진행 (${Math.round(avgPurchases).toLocaleString()}회 / 상위 ${topPct}%)`,
        percentile: blendedPct,
        track: 'T',
      };
    }
  }
}

// 싱글톤 인스턴스 내보내기
export const marketBenchmark = new MarketBenchmarkManager();
