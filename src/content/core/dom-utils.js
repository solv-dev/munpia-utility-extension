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
  createInlineMetaAddons({ ratio, likes, hits, isPaid = false, dropRate = null, retentionRate = null, firstHits = null }) {
    const wrapper = document.createElement('span');
    wrapper.className = 'munpia-inline-meta-addons';
    wrapper.setAttribute('data-munpia-addon', 'stats');

    const formattedHits = Number(hits).toLocaleString('ko-KR');
    const formattedLikes = Number(likes).toLocaleString('ko-KR');
    const label = isPaid ? '구매수' : '조회수';

    // 1. 비율 (좋아요/조회수)
    const ratioTooltip = `${label}: ${formattedHits}회 | 좋아요: ${formattedLikes}개 | 반응률: ${ratio.toFixed(2)}%`;
    let html = `
      <span class="munpia-meta-item" title="${ratioTooltip}">
        <span class="meta-label">비율</span>
        <span class="meta-value">${ratio.toFixed(2)}%</span>
      </span>
    `;

    // 2. 이탈률 (직전 대비)
    if (dropRate !== null) {
      const sign = dropRate > 0 ? '+' : '';
      const dropTooltip = `직전 회차 대비 증감: ${sign}${dropRate.toFixed(2)}%`;
      const dropColorClass = dropRate < 0 ? 'drop-neg' : 'drop-pos';

      html += `
        <span class="munpia-meta-item ${dropColorClass}" title="${dropTooltip}">
          <span class="meta-label">이탈률</span>
          <span class="meta-value">${sign}${dropRate.toFixed(2)}%</span>
        </span>
      `;
    }

    // 3. 1화 조회수 대비 비율 (연독 잔존율)
    if (retentionRate !== null) {
      const firstHitInfo = firstHits ? ` (1화: ${Number(firstHits).toLocaleString()}회)` : '';
      const retentionTooltip = `1화 조회수 대비 잔존율: ${retentionRate.toFixed(2)}%${firstHitInfo} | 누적 이탈: ${(100 - retentionRate).toFixed(2)}%`;

      html += `
        <span class="munpia-meta-item" title="${retentionTooltip}">
          <span class="meta-label">1화대비</span>
          <span class="meta-value">${retentionRate.toFixed(2)}%</span>
        </span>
      `;
    }

    wrapper.innerHTML = html;
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
