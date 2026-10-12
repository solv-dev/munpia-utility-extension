import { marketBenchmark } from './market-benchmark.js';

/**
 * DomUtils
 * DOM 탐색, 안전한 쿼리, 텍스트/숫자 파싱, 이탈률/비율 계산 및 뱃지 생성을 위한 공통 유틸리티 모음입니다.
 */
export const DomUtils = {
  /**
   * 문자열에서 숫자(콤마 포함, '만/천' 단위 포함)를 안전하게 정수로 변환합니다.
   * @param {string|number} text
   * @returns {number}
   */
  parseNumber(text) {
    if (typeof text === 'number') return Math.floor(text);
    if (!text || typeof text !== 'string') return 0;

    const trimmed = text.trim();
    const manMatch = trimmed.match(/([\d.]+)\s*만/);
    if (manMatch) {
      return Math.round(parseFloat(manMatch[1]) * 10000);
    }

    const cheonMatch = trimmed.match(/([\d.]+)\s*천/);
    if (cheonMatch) {
      return Math.round(parseFloat(cheonMatch[1]) * 1000);
    }

    const cleanNum = trimmed.replace(/[^0-9]/g, '');
    const parsed = parseInt(cleanNum, 10);
    return isNaN(parsed) ? 0 : parsed;
  },

  /**
   * 조회수 대비 좋아요 비율(%)을 계산합니다.
   * @param {number} likes - 좋아요/추천 수
   * @param {number} hits - 조회수 또는 구매수
   * @returns {number} 백분율
   */
  calculateRatio(likes, hits) {
    if (!hits || hits <= 0) return 0;
    const ratio = (likes / hits) * 100;
    return Math.round(ratio * 100) / 100;
  },

  /**
   * 직전 회차 대비 변화율/이탈률(%)을 계산합니다.
   * 음수면 이탈(감소), 양수면 증가
   * @param {number} current - 현재 회차 수치
   * @param {number} previous - 직전 회차 수치
   * @returns {number|null} 백분율
   */
  calculateDropRate(current, previous) {
    if (!previous || previous <= 0 || !current) return null;
    const change = ((current - previous) / previous) * 100;
    return Math.round(change * 100) / 100;
  },

  /**
   * 1화 대비 잔존율(%)을 계산합니다.
   * @param {number} current - 현재 회차 수치
   * @param {number} first - 1화 수치
   * @returns {number|null} 백분율
   */
  calculateRetentionRate(current, first) {
    if (!first || first <= 0 || !current) return null;
    const retention = (current / first) * 100;
    return Math.round(retention * 100) / 100;
  },

  /**
   * 값을 특정 범위 [min, max] 내로 제한하는 클램프 유틸리티
   * @param {number} val
   * @param {number} [min=0]
   * @param {number} [max=1]
   * @returns {number}
   */
  clamp(val, min = 0, max = 1) {
    if (isNaN(val)) return min;
    return Math.min(Math.max(val, min), max);
  },

  /**
   * 숫자 배열의 중위값(Median)을 계산합니다.
   * @param {number[]} arr
   * @returns {number}
   */
  calculateMedian(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    const sorted = [...arr].filter((v) => !isNaN(v)).sort((a, b) => a - b);
    if (sorted.length === 0) return 0;
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
  },

  /**
   * 회차 등록일(문자열, 타임스탬프)이 현재 시점 기준 48시간 이내인지 확인합니다.
   * (미정산 완충 버퍼)
   * @param {string|number|null} createdAt
   * @returns {boolean}
   */
  isWithin48Hours(createdAt) {
    if (!createdAt) return false;
    if (typeof createdAt === 'number') {
      const ts = createdAt < 1e12 ? createdAt * 1000 : createdAt;
      return (Date.now() - ts) < 48 * 3600 * 1000;
    }
    if (typeof createdAt === 'string') {
      const trimmed = createdAt.trim();
      if (trimmed.includes('시간 전') || trimmed.includes('분 전') || trimmed.includes('방금')) {
        return true;
      }
      const dotMatch = trimmed.match(/^(\d{2,4})[./-](\d{1,2})[./-](\d{1,2})/);
      if (dotMatch) {
        let y = parseInt(dotMatch[1], 10);
        if (y < 100) y += 2000;
        const m = parseInt(dotMatch[2], 10) - 1;
        const d = parseInt(dotMatch[3], 10);
        const parsedDate = new Date(y, m, d);
        return (Date.now() - parsedDate.getTime()) < 48 * 3600 * 1000;
      }
      const ts = Date.parse(trimmed);
      if (!isNaN(ts)) {
        return (Date.now() - ts) < 48 * 3600 * 1000;
      }
    }
    return false;
  },

  /**
   * [작품 종합 파워 지수 (Market Power Q-Score) 산출]
   * 상업적 체급(45점) + 연독 지속력/흡입력(35점) + 독자 충성도/반응(20점) = 100점 만점
   * @param {Array<Object>} chaptersList
   * @param {Object} [meta={}] - 작품 상단 메타 (선호작, 총조회수, 총좋아요, 정산합계 등)
   * @returns {Object}
   */
  calculateTotalQScore(chaptersList, meta = {}) {
    if (!Array.isArray(chaptersList) || chaptersList.length === 0) {
      return { valid: false, score: 0 };
    }

    const normalizedChapters = chaptersList.map((ch) => ({
      ...ch,
      num: ch.num ?? ch.chapterNumber ?? 0,
      commentCount: ch.commentCount ?? ch.comments ?? 0,
    }));
    const sortedChapters = [...normalizedChapters].sort((a, b) => a.num - b.num);
    const paidChapters = sortedChapters.filter((ch) => ch.isPaid && ch.hits > 0);
    const freeChapters = sortedChapters.filter((ch) => !ch.isPaid && ch.hits > 0);

    const paidCount = paidChapters.length;
    const isPaidNovel = paidCount >= 10;
    const isTransNovel = paidCount > 0 && paidCount < 10;
    const isFreeNovel = paidCount === 0;

    const favorites = meta.favorites || 0;
    const totalRevenue = (meta.paidPurchasesSum || paidChapters.reduce((acc, c) => acc + c.hits, 0)) * 100;
    const avgPurchases = paidCount > 0 ? (totalRevenue / 100) / paidCount : 0;
    const avgFreeHits = freeChapters.length > 0 ? (freeChapters.reduce((acc, c) => acc + c.hits, 0) / freeChapters.length) : (meta.freeHitsSum || 0);

    // ========================================================
    // 1. [기둥 1] 상업 체급 점수 (Scale Power - 45점 만점, 시장 분포 모수 연동)
    // ========================================================
    const totalChaptersCount = meta.totalChapters || sortedChapters.length;
    const scaleEval = marketBenchmark.evaluateScalePower({
      isPaid: isPaidNovel,
      favorites,
      avgFreeHits,
      avgPurchases,
      totalRevenue,
      totalChapters: totalChaptersCount,
      paidChaptersCount: paidCount,
    });

    const pillar1 = scaleEval.score;
    const scaleLabel = scaleEval.label;

    // ========================================================
    // 2. [기둥 2] 연독 지속력 & 흡입력 (전체 생애주기 1화 ~ 최신화 - 35점 만점)
    // ========================================================
    let pillar2 = 0;
    let r = 0.985;

    // 연재 속도(연참) 보너스 계산용
    let velocityBonus = 0;

    if (isPaidNovel) {
      // 48시간 이내 회차는 버퍼로 제외 (단, 최소 2개 이상의 표본이 남아야 함)
      const bufferFiltered = paidChapters.filter((ch) => !this.isWithin48Hours(ch.createdAt));
      const targetPaid = bufferFiltered.length >= 2 ? bufferFiltered : paidChapters;

      const firstPaid = paidChapters[0];
      const latestPaid = targetPaid[targetPaid.length - 1];
      const paidSteps = Math.max(1, latestPaid.num - firstPaid.num);

      // 1) 유료 전 구간(첫 유료화 ~ 최신 유료화)의 회당 평균 유지율
      let r_paid = 0.985;
      if (firstPaid.hits > 0 && latestPaid.hits > 0) {
        r_paid = Math.pow(latestPaid.hits / firstPaid.hits, 1 / paidSteps);
      }

      // 2) 무료 전 구간(1화 ~ 마지막 무료화)의 회당 평균 유지율
      let r_free = 0.970;
      if (freeChapters.length >= 2) {
        const firstFree = freeChapters[0];
        const lastFree = freeChapters[freeChapters.length - 1];
        const freeSteps = Math.max(1, lastFree.num - firstFree.num);
        if (firstFree.hits > 0 && lastFree.hits > 0) {
          r_free = Math.pow(lastFree.hits / firstFree.hits, 1 / freeSteps);
        }
      }

      // 3) 전체 생애주기 통합 회당 유지율 (유료 비중 85% + 무료 비중 15%)
      r = freeChapters.length >= 2 ? (0.85 * r_paid + 0.15 * r_free) : r_paid;

      // 연재 속도 보정 (전체 유료 연재 기간 대비 화수 밀도)
      const tStart = this.parseDateMs(firstPaid.createdAt);
      const tEnd = this.parseDateMs(latestPaid.createdAt);
      if (tStart && tEnd && tEnd > tStart) {
        const daysDiff = (tEnd - tStart) / (1000 * 60 * 60 * 24);
        const daysPerEp = daysDiff / paidSteps;
        if (daysPerEp <= 0.6) velocityBonus = 2.5; // 1일 2화+ 초고속 연참
        else if (daysPerEp <= 1.1) velocityBonus = 1.0; // 성실 일일연재
      }

      // 회당 92%~100% 방어율을 0~100점으로 정규화 (절대 0점 클리프 없음)
      const S_ret = 100 * this.clamp((r - 0.920) / (1.000 - 0.920), 0, 1);
      pillar2 = this.clamp(0.35 * S_ret + velocityBonus, 0, 35);
    } else {
      // 무료 연재작 (1화 ~ 최신 무료화 전체)
      const bufferFilteredFree = freeChapters.filter((ch) => !this.isWithin48Hours(ch.createdAt));
      const targetFree = bufferFilteredFree.length >= 2 ? bufferFilteredFree : freeChapters;

      const firstFree = targetFree[0];
      const latestFree = targetFree[targetFree.length - 1];
      const freeSteps = Math.max(1, latestFree.num - firstFree.num);

      if (firstFree.hits > 0 && latestFree.hits > 0) {
        r = Math.pow(latestFree.hits / firstFree.hits, 1 / freeSteps);
      }

      const S_ret_free = 100 * this.clamp((r - 0.900) / (1.000 - 0.900), 0, 1);
      pillar2 = this.clamp(0.35 * S_ret_free, 0, 35);
    }

    // ========================================================
    // 3. [기둥 3] 독자 활성도 & 충성도 (전체 회차 기준 - 20점 만점)
    // ========================================================
    const allValidChapters = isPaidNovel ? paidChapters : freeChapters;
    const likeRatios = allValidChapters.map((ch) => (ch.hits > 0 ? ch.likes / ch.hits : 0));
    const commentRatios = allValidChapters.map((ch) => (ch.hits > 0 ? (ch.commentCount || 0) / ch.hits : 0));

    const EL = this.calculateMedian(likeRatios);
    const EC = this.calculateMedian(commentRatios);

    // 로그 정규화 반응률 (좋아요 0.3%~6.0%, 댓글 0.05%~0.6%)
    const s_like = 100 * this.clamp((Math.log(Math.max(0.001, EL)) - Math.log(0.003)) / (Math.log(0.060) - Math.log(0.003)), 0, 1);
    const s_comment = 100 * this.clamp((EC - 0.0005) / (0.0060 - 0.0005), 0, 1);

    let pillar3 = 0;
    if (isPaidNovel && favorites > 0 && avgPurchases > 0) {
      const convRate = avgPurchases / favorites;
      const s_conv = 100 * this.clamp(convRate / 0.45, 0, 1);
      pillar3 = 0.20 * (0.45 * s_like + 0.35 * s_comment + 0.20 * s_conv);
    } else {
      pillar3 = 0.20 * (0.60 * s_like + 0.40 * s_comment);
    }

    // ========================================================
    // 종합 점수 산출 및 등급 판정
    // ========================================================
    const totalScore = this.clamp(Math.round((pillar1 + pillar2 + pillar3) * 10) / 10, 0, 100);

    let gradeLabel = 'C급';
    if (totalScore >= 85) gradeLabel = 'S급 (최상위권)';
    else if (totalScore >= 70) gradeLabel = 'A급 (안정인기작)';
    else if (totalScore >= 55) gradeLabel = 'B급 (중위권)';

    let track = 'B';
    let trackLabel = '유료 표준';
    if (isFreeNovel) {
      track = 'A';
      trackLabel = '무료 잠재력';
    } else if (isTransNovel) {
      track = 'T';
      trackLabel = '신규 전환';
    }

    return {
      valid: true,
      score: totalScore,
      gradeLabel,
      track,
      trackLabel,
      pillar1,
      pillar2,
      pillar3,
      scaleLabel,
      retentionRate: r,
      medianLikeRatio: EL,
      medianCommentRatio: EC,
    };
  },

  /**
   * 문자열 또는 숫자에서 안전하게 밀리초 타임스탬프를 추출합니다.
   * @param {string|number|null} val
   * @returns {number|null}
   */
  parseDateMs(val) {
    if (!val) return null;
    if (typeof val === 'number') {
      return val < 1e12 ? val * 1000 : val;
    }
    if (typeof val === 'string') {
      const trimmed = val.trim();
      const dotMatch = trimmed.match(/^(\d{2,4})[./-](\d{1,2})[./-](\d{1,2})/);
      if (dotMatch) {
        let y = parseInt(dotMatch[1], 10);
        if (y < 100) y += 2000;
        const m = parseInt(dotMatch[2], 10) - 1;
        const d = parseInt(dotMatch[3], 10);
        return new Date(y, m, d).getTime();
      }
      const ts = Date.parse(trimmed);
      if (!isNaN(ts)) return ts;
    }
    return null;
  },

  /**
   * [회차별 퀄리티 스코어 q_k 산출]
   * 현실적인 연속 연재 독자 이탈률과 로그 반응률을 적용하여 0점 클리프 없이 공정하게 산출합니다.
   * @param {Object} params
   * @param {number} params.currentHits - 현재 회차 조회수/구매수 (V_k)
   * @param {number|null} params.prevHits - 직전 회차 수치 (V_{k-1})
   * @param {number} params.likes - 좋아요 수 (L_k)
   * @param {number} params.comments - 댓글 수 (C_k)
   * @param {boolean} params.isFirstOrTransition - 1화이거나 유료 전환 경계 여부
   * @returns {Object}
   */
  calculateEpisodeQScore({ currentHits, prevHits, likes, comments, isFirstOrTransition }) {
    if (!currentHits || currentHits <= 0) {
      return {
        score: 0,
        dropScore: null,
        likeScore: 0,
        commentScore: 0,
        isTransition: false,
        tooltip: '[회차 Q-Score: 0점]\n수치 데이터 부족',
      };
    }

    const likeRatio = currentHits > 0 ? likes / currentHits : 0;
    const s_like = 100 * this.clamp((Math.log(Math.max(0.001, likeRatio)) - Math.log(0.003)) / (Math.log(0.060) - Math.log(0.003)), 0, 1);

    const commentRatio = currentHits > 0 ? (comments || 0) / currentHits : 0;
    const s_comment = 100 * this.clamp((commentRatio - 0.0005) / (0.0060 - 0.0005), 0, 1);

    if (isFirstOrTransition || !prevHits || prevHits <= 0) {
      // 1화 또는 무료->유료 전환 경계인 경우 유지 점수 제외하고 좋아요/댓글 점수로만 100점 환산
      const q = Math.round(this.clamp(0.70 * s_like + 0.30 * s_comment, 0, 100));
      return {
        score: q,
        dropScore: null,
        likeScore: s_like,
        commentScore: s_comment,
        isTransition: true,
        tooltip: `[회차 Q-Score: ${q}점]\n• 1화 / 전환 회차 (유지 점수 제외)\n• 좋아요 반응: ${s_like.toFixed(1)}점\n• 댓글 몰입도: ${s_comment.toFixed(1)}점`,
      };
    }

    // 직전 회차 대비 유지율 (88%~101% 구간 정규화, 회당 2~3% 일상적 감소도 70점대 안정 방어)
    const ratio = currentHits / prevHits;
    const s_drop = 100 * this.clamp((ratio - 0.880) / (1.010 - 0.880), 0, 1);

    const q = Math.round(this.clamp(0.50 * s_drop + 0.35 * s_like + 0.15 * s_comment, 0, 100));

    return {
      score: q,
      dropScore: s_drop,
      likeScore: s_like,
      commentScore: s_comment,
      isTransition: false,
      tooltip: `[회차 Q-Score: ${q}점]\n• 직전대비 유지: ${s_drop.toFixed(1)}점 (유지율 ${(ratio * 100).toFixed(2)}%)\n• 좋아요 반응: ${s_like.toFixed(1)}점\n• 댓글 몰입도: ${s_comment.toFixed(1)}점`,
    };
  },

  /**
   * 회차 메타 행의 '댓글 XX' 뒤에 동일한 폰트 스타일로 덧붙여질 인라인 분석 요소들을 생성합니다.
   * @param {Object} data
   * @param {number} data.ratio - 좋아요 비율 (%)
   * @param {number} data.likes - 좋아요 수
   * @param {number} data.hits - 조회수 또는 구매수
   * @param {boolean} [data.isPaid=false] - 유료 여부
   * @param {number|null} [data.dropRate=null] - 직전 대비 이탈률
   * @param {number|null} [data.retentionRate=null] - 1화 대비 잔존율
   * @param {number|null} [data.firstHits=null] - 1화 조회수
   * @returns {HTMLElement}
   */
  createInlineMetaAddons({ ratio, likes, hits, isPaid = false, dropRate = null, retentionRate = null, firstHits = null, qScore = null }) {
    const wrapper = document.createElement('span');
    wrapper.className = 'munpia-inline-meta-addons';
    wrapper.setAttribute('data-munpia-addon', 'stats');

    const formattedHits = Number(hits).toLocaleString('ko-KR');
    const formattedLikes = Number(likes).toLocaleString('ko-KR');
    const label = isPaid ? '구매수' : '조회수';

    const items = [];

    // 1. 좋아요 반응률 (하트 아이콘)
    const ratioTooltip = `[좋아요 반응률]\n${label}: ${formattedHits}회\n좋아요: ${formattedLikes}개\n반응률: ${ratio.toFixed(2)}%`;
    const heartIcon = `<svg class="addon-icon icon-heart" viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

    items.push(`
      <span class="munpia-meta-item item-ratio" title="${ratioTooltip}">
        ${heartIcon}
        <span class="meta-value">${ratio.toFixed(2)}%</span>
      </span>
    `);

    // 2. 직전 대비 이탈률 (트렌드 화살표 아이콘)
    if (dropRate !== null) {
      const sign = dropRate > 0 ? '+' : '';
      const dropTooltip = `[직전 회차 대비 증감]\n이탈률: ${sign}${dropRate.toFixed(2)}%`;
      const isNeg = dropRate < 0;
      const dropColorClass = isNeg ? 'drop-neg' : 'drop-pos';

      const trendIcon = isNeg
        ? `<svg class="addon-icon icon-trend" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`
        : `<svg class="addon-icon icon-trend" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`;

      items.push(`
        <span class="munpia-meta-item ${dropColorClass}" title="${dropTooltip}">
          ${trendIcon}
          <span class="meta-value">${sign}${dropRate.toFixed(2)}%</span>
        </span>
      `);
    }

    // 3. 1화 조회수 대비 비율 (타깃/과녁 아이콘)
    if (retentionRate !== null) {
      const firstHitInfo = firstHits ? `\n1화 조회수: ${Number(firstHits).toLocaleString()}회` : '';
      const retentionTooltip = `[1화 대비 연독률]${firstHitInfo}\n잔존율: ${retentionRate.toFixed(2)}%\n누적 이탈: ${(100 - retentionRate).toFixed(2)}%`;

      const targetIcon = `<svg class="addon-icon icon-target" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;

      items.push(`
        <span class="munpia-meta-item item-retention" title="${retentionTooltip}">
          ${targetIcon}
          <span class="meta-value">${retentionRate.toFixed(2)}%</span>
        </span>
      `);
    }

    // 4. 회차별 퀄리티 스코어 (Q-Score 뱃지)
    if (qScore && typeof qScore.score === 'number') {
      const qVal = Math.round(qScore.score);
      let qColorClass = 'q-low';
      if (qVal >= 85) qColorClass = 'q-high';
      else if (qVal >= 70) qColorClass = 'q-mid';

      const qTooltip = qScore.tooltip || `[회차 퀄리티: ${qVal}점]`;

      items.push(`
        <span class="munpia-meta-item munpia-qscore-badge ${qColorClass}" title="${qTooltip}">
          <span class="q-badge-text">Q ${qVal}</span>
        </span>
      `);
    }

    // 수치들을 구분자선과 함께 하나의 단일 틀 안에 조립
    wrapper.innerHTML = items.join('<span class="addon-divider"></span>');
    return wrapper;
  },

  /**
   * 상단 '작품등록일' 바로 아랫줄에 단조로운 폰트 스타일로 삽입되는 [무료 조회수 / 유료 구매수 합계] 라인을 생성합니다.
   * (아이콘 없이 기본 폰트와 통일)
   * @param {Object} data
   * @param {number} data.freeHitsSum - 무료 회차 조회수 합계
   * @param {number} data.paidPurchasesSum - 유료 회차 구매수 합계
   * @param {number} data.freeCount - 무료 회차 수
   * @param {number} data.paidCount - 유료 회차 수
   * @returns {HTMLElement}
   */
  createCleanSummaryLine({ freeHitsSum, paidPurchasesSum, freeCount, paidCount }) {
    const line = document.createElement('div');
    line.className = 'munpia-clean-summary-line';
    line.setAttribute('data-munpia-summary', 'clean-stats');

    const totalRevenue = Math.round(paidPurchasesSum * 100);
    const platformFee = Math.round(totalRevenue * 0.37);
    const fmt = (num) => Number(num).toLocaleString('ko-KR') + '원';

    let revenueAddonHtml = '';
    if (paidPurchasesSum > 0) {
      revenueAddonHtml = `
        <span class="summary-meta-divider">∙</span>
        <span class="summary-meta-item">
          <span class="meta-label">추정 매출:</span>
          <span class="meta-value highlight-gold">${fmt(totalRevenue)}</span>
        </span>
        <span class="summary-meta-divider">∙</span>
        <span class="summary-meta-item">
          <span class="meta-label">플랫폼 수수료:</span>
          <span class="meta-value">${fmt(platformFee)}</span>
        </span>
      `;
    }

    line.innerHTML = `
      <span class="summary-meta-item">
        <span class="meta-label">무료 조회수</span>
        <span class="meta-value">${freeHitsSum.toLocaleString('ko-KR')}</span>
      </span>
      <span class="summary-meta-divider">∙</span>
      <span class="summary-meta-item highlight-paid">
        <span class="meta-label">유료 구매수</span>
        <span class="meta-value">${paidPurchasesSum.toLocaleString('ko-KR')}</span>
      </span>
      ${revenueAddonHtml}
    `;

    return line;
  },

  /**
   * [출판사 정산 라인 생성]
   * CP:작가 비율(90%, 80%, 70%)별 세전 정산액 및 세후(3.3% 공제) 순수익을 생성합니다.
   * @param {number} paidPurchases - 유료 구매수 합계
   * @returns {HTMLElement|null}
   */
  createRevenueSummaryLine(paidPurchases) {
    if (!paidPurchases || paidPurchases <= 0) return null;

    const line = document.createElement('div');
    line.className = 'munpia-revenue-summary-line';
    line.setAttribute('data-munpia-summary', 'revenue-stats');

    const totalRevenue = Math.round(paidPurchases * 100);
    const platformFee = Math.round(totalRevenue * 0.37);
    const distributable = totalRevenue - platformFee; // 출판사+작가 총 정산금 (63%)

    // 작가 정산 비율 (세전 & 3.3% 원천징수 세후)
    const writer90 = Math.round(distributable * 0.90);
    const net90 = Math.round(writer90 * 0.967);

    const writer80 = Math.round(distributable * 0.80);
    const net80 = Math.round(writer80 * 0.967);

    const writer70 = Math.round(distributable * 0.70);
    const net70 = Math.round(writer70 * 0.967);

    const fmt = (num) => Number(num).toLocaleString('ko-KR') + '원';

    line.innerHTML = `
      <div class="rev-line rev-title">
        <span class="rev-label">출판사 정산</span>
      </div>
      <div class="rev-line rev-indent">
        <span class="rev-label">90%:</span>
        <span class="rev-value">${fmt(writer90)}</span>
        <span class="rev-net">(${fmt(net90)})</span>
      </div>
      <div class="rev-line rev-indent">
        <span class="rev-label">80%:</span>
        <span class="rev-value">${fmt(writer80)}</span>
        <span class="rev-net">(${fmt(net80)})</span>
      </div>
      <div class="rev-line rev-indent">
        <span class="rev-label">70%:</span>
        <span class="rev-value">${fmt(writer70)}</span>
        <span class="rev-net">(${fmt(net70)})</span>
      </div>
    `;

    return line;
  },

  /**
   * [대시보드 전용 출판사 정산 카드 생성]
   * @param {number} paidPurchases - 유료 구매수 합계
   * @returns {HTMLElement|null}
   */
  createRevenueCard(paidPurchases) {
    if (!paidPurchases || paidPurchases <= 0) return null;

    const card = document.createElement('div');
    card.className = 'munpia-revenue-card';
    card.setAttribute('data-munpia-dashboard', 'revenue-card');

    const totalRevenue = Math.round(paidPurchases * 100);
    const platformFee = Math.round(totalRevenue * 0.37);
    const distributable = totalRevenue - platformFee; // 63%

    const writer90 = Math.round(distributable * 0.90);
    const net90 = Math.round(writer90 * 0.967);

    const writer80 = Math.round(distributable * 0.80);
    const net80 = Math.round(writer80 * 0.967);

    const writer70 = Math.round(distributable * 0.70);
    const net70 = Math.round(writer70 * 0.967);

    const fmt = (num) => Number(num).toLocaleString('ko-KR') + '원';

    card.innerHTML = `
      <div class="card-header rev-card-header">
        <span class="card-title">출판사 정산 (추정 순수익)</span>
      </div>
      <div class="card-body rev-card-body">
        <div class="rev-row">
          <span class="rev-label">90%:</span>
          <span class="rev-value">${fmt(writer90)}</span>
          <span class="rev-net">(${fmt(net90)})</span>
        </div>
        <div class="rev-row">
          <span class="rev-label">80%:</span>
          <span class="rev-value">${fmt(writer80)}</span>
          <span class="rev-net">(${fmt(net80)})</span>
        </div>
        <div class="rev-row">
          <span class="rev-label">70%:</span>
          <span class="rev-value">${fmt(writer70)}</span>
          <span class="rev-net">(${fmt(net70)})</span>
        </div>
      </div>
      <div class="card-footer rev-card-footer">
        <span class="rev-tax-note">※ 괄호 안은 원천징수(3.3%) 공제 후 실수령액</span>
      </div>
    `;

    return card;
  },

  /**
   * [작품 종합 파워 대시보드 카드 생성]
   * @param {Object} qTotalData
   * @returns {HTMLElement}
   */
  createQScoreDashboardCard(qTotalData) {
    const card = document.createElement('div');
    card.className = 'munpia-qscore-card';
    card.setAttribute('data-munpia-dashboard', 'qscore-card');

    if (!qTotalData || !qTotalData.valid) {
      card.innerHTML = `
        <div class="card-header qscore-header">
          <span class="card-title">작품 종합 파워 (Market Power)</span>
          <span class="qscore-track-badge track-loading">분석 중</span>
        </div>
        <div class="card-body qscore-empty-body">
          <span class="qscore-empty-text">충분한 회차 데이터 수집 중...</span>
        </div>
      `;
      return card;
    }

    const {
      score,
      gradeLabel,
      track,
      trackLabel,
      pillar1,
      pillar2,
      pillar3,
      scaleLabel,
      retentionRate,
      medianLikeRatio,
      medianCommentRatio,
    } = qTotalData;

    let scoreColorClass = 'score-low';
    if (score >= 85) scoreColorClass = 'score-high';
    else if (score >= 70) scoreColorClass = 'score-mid';

    let trackClass = 'track-b';
    if (track === 'A') trackClass = 'track-a';
    else if (track === 'T') trackClass = 'track-t';

    const retentionDisplay = retentionRate !== null ? `${(retentionRate * 100).toFixed(2)}%` : '-';
    const likeDisplay = medianLikeRatio !== null ? `${(medianLikeRatio * 100).toFixed(2)}%` : '-';
    const commentDisplay = medianCommentRatio !== null ? `${(medianCommentRatio * 100).toFixed(2)}%` : '-';

    card.innerHTML = `
      <div class="card-header qscore-header">
        <span class="card-title">작품 종합 파워 (Market Power)</span>
        <div class="qscore-header-right">
          <span class="qscore-track-badge ${trackClass}">${trackLabel}</span>
          <button type="button" class="qscore-open-dashboard-btn" title="문피아 전체 시장 표본 순위 및 평가 리더보드 열기">📊 시장 표본 순위</button>
        </div>
      </div>
      <div class="card-body qscore-body">
        <div class="qscore-main-display">
          <span class="qscore-value ${scoreColorClass}">${score.toFixed(1)}</span>
          <span class="qscore-max">/ 100</span>
          <span class="qscore-grade ${scoreColorClass}">${gradeLabel}</span>
        </div>
        <div class="qscore-sub-metrics">
          <div class="qscore-sub-item" title="시장 상업 체급 점수 (${scaleLabel || '구매력 기반'})">
            <span class="sub-label">상업 체급</span>
            <span class="sub-value">${pillar1.toFixed(1)} <small>/ 45</small></span>
          </div>
          <div class="qscore-sub-item" title="연재 진행에 따른 독자 이탈 방어율 (회당 ${retentionDisplay})">
            <span class="sub-label">연독 방어</span>
            <span class="sub-value">${pillar2.toFixed(1)} <small>/ 35</small></span>
          </div>
          <div class="qscore-sub-item" title="좋아요 반응 밀도(${likeDisplay}) 및 댓글 몰입도(${commentDisplay})">
            <span class="sub-label">독자 반응</span>
            <span class="sub-value">${pillar3.toFixed(1)} <small>/ 20</small></span>
          </div>
        </div>
      </div>
    `;

    return card;
  },

  /**
   * 지정한 선택자에 매칭되는 요소들을 안전하게 탐색합니다.
   * @param {string} selector
   * @param {HTMLElement|Document} [context=document]
   * @returns {HTMLElement[]}
   */
  queryAll(selector, context = document) {
    try {
      return Array.from(context.querySelectorAll(selector));
    } catch {
      return [];
    }
  }
};
