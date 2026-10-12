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
   * [작품 전체 퀄리티 지수 Q_total 산출]
   * 유료 회차 수에 따라 Track B(유료 안정화) 또는 Track A(무료 기반)로 분기 계산합니다.
   * @param {Array<Object>} chaptersList
   * @returns {Object}
   */
  calculateTotalQScore(chaptersList) {
    if (!Array.isArray(chaptersList) || chaptersList.length === 0) {
      return { valid: false, score: 0 };
    }

    const sortedChapters = [...chaptersList].sort((a, b) => a.num - b.num);
    const paidChapters = sortedChapters.filter((ch) => ch.isPaid && ch.hits > 0);

    // Track B: 유료 회차 10개 이상 (유료 안정화 분석)
    if (paidChapters.length >= 10) {
      // 48시간 이내 회차는 버퍼로 제외 (단, 최소 2개 이상의 표본이 남아야 함)
      const bufferFiltered = paidChapters.filter((ch) => !this.isWithin48Hours(ch.createdAt));
      const targetPaid = bufferFiltered.length >= 2 ? bufferFiltered : paidChapters;

      const M = targetPaid.length;
      const K = Math.min(20, Math.max(1, M - 1));
      const endChapter = targetPaid[targetPaid.length - 1];
      const startChapter = targetPaid[targetPaid.length - 1 - K];

      const vEnd = endChapter.hits;
      const vStart = startChapter.hits;

      // 잔존율 점수 r = (V_ne / V_ns)^(1/K)
      let r = 0.990;
      if (vStart > 0 && vEnd > 0) {
        r = Math.pow(vEnd / vStart, 1 / K);
      }
      const S_ret = this.clamp((r - 0.990) / (1.000 - 0.990), 0, 1) * 100;

      // 윈도우 구간 회차들: startChapter ~ endChapter
      const windowChapters = targetPaid.slice(targetPaid.length - 1 - K);
      const likeRatios = windowChapters.map((ch) => (ch.hits > 0 ? ch.likes / ch.hits : 0));
      const commentRatios = windowChapters.map((ch) => (ch.hits > 0 ? (ch.commentCount || 0) / ch.hits : 0));

      const EL = this.calculateMedian(likeRatios);
      const EC = this.calculateMedian(commentRatios);

      const S_like = this.clamp((EL - 0.03) / (0.08 - 0.03), 0, 1) * 100;
      const S_comment = this.clamp((EC - 0.002) / (0.008 - 0.002), 0, 1) * 100;

      const Q_total = this.clamp(0.60 * S_ret + 0.25 * S_like + 0.15 * S_comment, 0, 100);

      return {
        valid: true,
        score: Math.round(Q_total * 10) / 10,
        track: 'B',
        trackLabel: '유료 표준',
        retentionRate: r,
        retentionScore: S_ret,
        medianLikeRatio: EL,
        likeScore: S_like,
        medianCommentRatio: EC,
        commentScore: S_comment,
        sampleRangeLabel: `최근 ${startChapter.num}화 ~ ${endChapter.num}화 기준`,
      };
    }

    // Track A: 유료 10개 미만 (무료 기반 분석)
    const freeChapters = sortedChapters.filter((ch) => !ch.isPaid && ch.hits > 0);
    if (freeChapters.length === 0) {
      return { valid: false, score: 0 };
    }

    const bufferFilteredFree = freeChapters.filter((ch) => !this.isWithin48Hours(ch.createdAt));
    const targetFree = bufferFilteredFree.length >= 2 ? bufferFilteredFree : freeChapters;

    // 분석 구간: 무료 20화 ~ 45화 (또는 유효한 최신 무료화)
    let windowChapters = targetFree.filter((ch) => ch.num >= 20 && ch.num <= 45);
    if (windowChapters.length < 2) {
      windowChapters = targetFree;
    }

    const startChapter = windowChapters[0];
    const endChapter = windowChapters[windowChapters.length - 1];
    const step = Math.max(1, endChapter.num - startChapter.num);

    let r_free = 0.970;
    if (startChapter.hits > 0 && endChapter.hits > 0) {
      r_free = Math.pow(endChapter.hits / startChapter.hits, 1 / step);
    }
    const S_ret_free = this.clamp((r_free - 0.970) / (1.000 - 0.970), 0, 1) * 100;

    const likeRatios = windowChapters.map((ch) => (ch.hits > 0 ? ch.likes / ch.hits : 0));
    const EL = this.calculateMedian(likeRatios);
    const S_like = this.clamp((EL - 0.03) / (0.08 - 0.03), 0, 1) * 100;

    const Q_total = this.clamp(0.70 * S_ret_free + 0.30 * S_like, 0, 100);

    return {
      valid: true,
      score: Math.round(Q_total * 10) / 10,
      track: 'A',
      trackLabel: '무료 기반',
      retentionRate: r_free,
      retentionScore: S_ret_free,
      medianLikeRatio: EL,
      likeScore: S_like,
      medianCommentRatio: null,
      commentScore: null,
      sampleRangeLabel: `무료 ${startChapter.num}화 ~ ${endChapter.num}화 기준`,
    };
  },

  /**
   * [회차별 퀄리티 스코어 q_k 산출]
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
    const s_like = this.clamp((likeRatio - 0.03) / (0.08 - 0.03), 0, 1) * 100;

    const commentRatio = currentHits > 0 ? (comments || 0) / currentHits : 0;
    const s_comment = this.clamp((commentRatio - 0.002) / (0.008 - 0.002), 0, 1) * 100;

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

    const ratio = currentHits / prevHits;
    const s_drop = this.clamp((ratio - 0.980) / (1.005 - 0.980), 0, 1) * 100;

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
   * [작품 퀄리티 대시보드 카드 생성]
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
          <span class="card-title">작품 종합 퀄리티 (Q-Score)</span>
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
      track,
      trackLabel,
      retentionRate,
      medianLikeRatio,
      medianCommentRatio,
      sampleRangeLabel,
    } = qTotalData;

    let scoreColorClass = 'score-low';
    if (score >= 85) scoreColorClass = 'score-high';
    else if (score >= 70) scoreColorClass = 'score-mid';

    const trackClass = track === 'B' ? 'track-b' : 'track-a';
    const retentionDisplay = retentionRate !== null ? `${(retentionRate * 100).toFixed(2)}%` : '-';
    const likeDisplay = medianLikeRatio !== null ? `${(medianLikeRatio * 100).toFixed(2)}%` : '-';
    const commentDisplay = medianCommentRatio !== null ? `${(medianCommentRatio * 100).toFixed(2)}%` : '-';

    card.innerHTML = `
      <div class="card-header qscore-header">
        <span class="card-title">작품 종합 퀄리티 (Q-Score)</span>
        <span class="qscore-track-badge ${trackClass}">${trackLabel}</span>
      </div>
      <div class="card-body qscore-body">
        <div class="qscore-main-display">
          <span class="qscore-value ${scoreColorClass}">${score.toFixed(1)}</span>
          <span class="qscore-max">/ 100</span>
        </div>
        <div class="qscore-sub-metrics">
          <div class="qscore-sub-item">
            <span class="sub-label">회당 유지율</span>
            <span class="sub-value">${retentionDisplay}</span>
          </div>
          <div class="qscore-sub-item">
            <span class="sub-label">중위 좋아요율</span>
            <span class="sub-value">${likeDisplay}</span>
          </div>
          ${track === 'B' ? `
          <div class="qscore-sub-item">
            <span class="sub-label">중위 댓글율</span>
            <span class="sub-value">${commentDisplay}</span>
          </div>
          ` : ''}
          <div class="qscore-sub-item qscore-sample-range">
            <span class="sub-label">분석 표본</span>
            <span class="sub-value">${sampleRangeLabel}</span>
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
