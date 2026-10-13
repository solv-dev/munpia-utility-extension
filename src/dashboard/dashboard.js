import { todayMarketSamples } from '../content/data/today-market-samples.js';
import { marketBenchmark } from '../content/core/market-benchmark.js';
import { DomUtils } from '../content/core/dom-utils.js';

/**
 * Dashboard Controller
 * 시장 표본 데이터를 로드하고 각 작품의 Q-Score를 정밀 평가하여
 * 다차원 리더보드 테이블 및 시뮬레이터를 렌더링합니다.
 */
class DashboardController {
  constructor() {
    this.samples = [];
    this.evaluatedSamples = [];
    this.currentFilter = 'all';
    this.currentSort = 'qscore_desc';
    this.currentSortKey = 'qscore';
    this.currentSortOrder = 'desc';
    this.searchQuery = '';
  }

  async init() {
    // 1. 테마 초기화
    this.initTheme();

    // 2. 표본 데이터 취득 및 평가
    await this.loadAndEvaluateSamples();

    // 3. KPI 렌더링
    this.renderKPIs();

    // 4. 이벤트 바인딩
    this.bindEvents();
    this.updateHeaderSortIcons();

    // 5. 리더보드 테이블 렌더링
    this.renderLeaderboard();

    // 6. 시뮬레이터 초기 실행
    this.runSimulator();
  }

  formatRevenue(val) {
    if (!val || val <= 0) return '<span class="rev-zero">-</span>';
    if (val >= 100000000) {
      const eok = (val / 100000000).toFixed(1);
      return `<span class="rev-val highlight-gold">약 <strong>${eok}억</strong> 원</span>`;
    }
    if (val >= 10000) {
      const man = Math.round(val / 10000).toLocaleString('ko-KR');
      return `<span class="rev-val highlight-gold">약 <strong>${man}만</strong> 원</span>`;
    }
    return `<span class="rev-val">${val.toLocaleString('ko-KR')}원</span>`;
  }

  formatAvgRevenue(val) {
    if (!val || val <= 0) return '';
    if (val >= 100000000) {
      const eok = (val / 100000000).toFixed(1);
      return `<span class="rev-avg-chapter">회차당 약 <strong>${eok}억</strong> 원</span>`;
    }
    if (val >= 10000) {
      const man = (val / 10000).toFixed(1);
      const formattedMan = man.endsWith('.0') ? (val / 10000).toFixed(0) : man;
      return `<span class="rev-avg-chapter">회차당 약 <strong>${formattedMan}만</strong> 원</span>`;
    }
    return `<span class="rev-avg-chapter">회차당 약 <strong>${val.toLocaleString('ko-KR')}</strong>원</span>`;
  }

  initTheme() {
    const savedTheme = localStorage.getItem('munpia_utility_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeButtonLabel(savedTheme);

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('munpia_utility_theme', next);
        this.updateThemeButtonLabel(next);
      });
    }
  }

  updateThemeButtonLabel(theme) {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.textContent = theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
    }
  }

  async loadAndEvaluateSamples() {
    // 스토리지에 캐시된 표본이 있으면 우선 로드, 없으면 todayMarketSamples 사용
    let rawSamples = todayMarketSamples;

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      try {
        const todayKey = marketBenchmark.getTodayKey();
        const stored = await chrome.storage.local.get(`munpia_samples_${todayKey}`);
        if (stored && Array.isArray(stored[`munpia_samples_${todayKey}`])) {
          rawSamples = stored[`munpia_samples_${todayKey}`];
        }
      } catch (err) {
        console.warn('로컬 스토리지 표본 조회 오류, 기본 표본 사용:', err);
      }
    }

    this.samples = rawSamples;

    // 각 표본 평가
    this.evaluatedSamples = this.samples.map((item) => {
      return this.evaluateSample(item);
    });
  }

  evaluateSample(item) {
    // 실측 데이터셋에 이미 100% 정밀 연산된 Q-Score 및 매출 지표가 있는 경우 그대로 사용
    if (item.totalScore !== undefined && item.pillar1 !== undefined && item.estimatedRevenue !== undefined) {
      const topPct = item.percentile !== undefined ? item.percentile : Math.max(0.001, (1 - (item.pillar1 / 45)));
      return {
        ...item,
        percentile: topPct,
        likeRatio: item.medianLikeRatio || item.likeRatio || 0.02,
        formattedRevenue: this.formatRevenue(item.estimatedRevenue),
        formattedAvgRevenue: this.formatAvgRevenue(item.avgRevenuePerChapter || 0)
      };
    }

    const n = Math.max(1, item.chapterCount);
    const isPaid = Boolean(item.isPaid);
    const paidCount = item.paidChapters || (isPaid ? Math.max(1, n - 25) : 0);
    const avgPurchases = isPaid ? Math.round(item.avgViews * 0.88) : 0;
    const estimatedRevenue = isPaid ? Math.round(paidCount * avgPurchases * 100) : 0;
    const avgRevenuePerChapter = isPaid ? Math.round(avgPurchases * 100) : 0;

    // 1) 상업 체급 (Pillar 1, 45점 만점)
    const scaleEval = marketBenchmark.evaluateScalePower({
      isPaid,
      favorites: item.favorites,
      avgFreeHits: item.avgViews,
      avgPurchases,
      totalRevenue: estimatedRevenue,
      totalChapters: n,
      paidChaptersCount: paidCount,
    });

    const pillar1 = scaleEval.score;

    // 2) 연독 방어력 (Pillar 2, 35점 만점)
    let pillar2 = 0;
    let r = 0.970;
    if (n === 1) {
      r = 1.0;
      pillar2 = 35.0;
    } else if (!isPaid) {
      // 무료작: 1화 대비 최신화 자연 감쇄율 (무료 투베 랭킹 및 화수 기반 정규화)
      const rankNorm = item.ranks?.free ? (1 - item.ranks.free / 200) : 0.5;
      r = 0.910 + 0.082 * rankNorm;
      const S_ret_free = 100 * DomUtils.clamp((r - 0.890) / (1.000 - 0.890), 0, 1);
      pillar2 = DomUtils.clamp(0.35 * S_ret_free, 0, 35);
    } else {
      // 유료작: 유료 구간 유지율
      const paidRankNorm = item.ranks?.paid ? (1 - item.ranks.paid / 200) : 0.6;
      r = 0.950 + 0.035 * paidRankNorm;
      r = Math.max(0.920, Math.min(0.995, r));
      const S_ret = 100 * DomUtils.clamp((r - 0.920) / (1.000 - 0.920), 0, 1);
      pillar2 = DomUtils.clamp(0.35 * S_ret, 0, 35);
    }

    // 3) 독자 반응도 (Pillar 3, 20점 만점)
    const likeRatio = item.totalViews > 0 ? item.likes / item.totalViews : 0.02;
    const commentRatio = item.totalViews > 0 ? (item.comments || 0) / item.totalViews : 0.002;

    const s_like = 100 * DomUtils.clamp((Math.log(Math.max(0.001, likeRatio)) - Math.log(0.003)) / (Math.log(0.060) - Math.log(0.003)), 0, 1);
    const s_comment = isPaid
      ? 100 * DomUtils.clamp((commentRatio - 0.0005) / (0.0060 - 0.0005), 0, 1)
      : 100 * DomUtils.clamp((commentRatio - 0.0003) / (0.0035 - 0.0003), 0, 1);

    let pillar3 = 0.20 * (0.65 * s_like + 0.35 * s_comment);
    if (isPaid && item.favorites > 0) {
      const convRate = item.avgViews / item.favorites;
      const s_conv = 100 * DomUtils.clamp(convRate / 0.45, 0, 1);
      pillar3 = 0.20 * (0.45 * s_like + 0.35 * s_comment + 0.20 * s_conv);
    }
    pillar3 = DomUtils.clamp(pillar3, 0, 20);

    // 종합 점수 및 등급 (dom-utils.js 기준과 100% 일치)
    const totalScore = DomUtils.clamp(Math.round((pillar1 + pillar2 + pillar3) * 10) / 10, 0, 100);

    let grade = 'D급';
    let gradeClass = 'grade-d';
    if (totalScore >= 85) {
      grade = 'S급 (최상위권)';
      gradeClass = 'grade-s';
    } else if (totalScore >= 70) {
      grade = 'A급 (안정인기작)';
      gradeClass = 'grade-a';
    } else if (totalScore >= 55) {
      grade = 'B급 (중위권)';
      gradeClass = 'grade-b';
    } else if (totalScore >= 40) {
      grade = 'C급 (초기/잠재력)';
      gradeClass = 'grade-c';
    } else {
      grade = 'D급 (정체/개선필요)';
      gradeClass = 'grade-d';
    }

    return {
      ...item,
      totalScore,
      grade,
      gradeClass,
      pillar1,
      pillar2,
      pillar3,
      scaleLabel: scaleEval.label,
      percentile: scaleEval.percentile,
      retentionRate: r,
      likeRatio,
      estimatedRevenue,
      avgRevenuePerChapter,
      formattedRevenue: this.formatRevenue(estimatedRevenue),
      formattedAvgRevenue: this.formatAvgRevenue(avgRevenuePerChapter)
    };
  }

  renderKPIs() {
    const countEl = document.getElementById('kpi-sample-count');
    const freeCutEl = document.getElementById('kpi-free-top-cut');
    const paidCutEl = document.getElementById('kpi-paid-top-cut');
    const avgScoreEl = document.getElementById('kpi-avg-score');

    if (countEl) countEl.textContent = `${this.samples.length}개 작품`;

    const freeTop = this.samples.find((s) => !s.isPaid && s.chapterCount >= 20);
    if (freeCutEl) {
      freeCutEl.textContent = freeTop ? `선호작 ${(freeTop.favorites).toLocaleString()}명` : '선호작 11,400명';
    }

    const paidMega = this.samples.find((s) => s.isPaid && s.chapterCount >= 100);
    if (paidCutEl) {
      paidCutEl.textContent = paidMega ? `평균 구매 ${(Math.round(paidMega.avgViews * 0.9)).toLocaleString()}회` : '평균 구매 10,152회';
    }

    if (avgScoreEl && this.evaluatedSamples.length > 0) {
      const avg = this.evaluatedSamples.reduce((a, b) => a + b.totalScore, 0) / this.evaluatedSamples.length;
      avgScoreEl.textContent = `Q ${avg.toFixed(1)}점`;
    }

    // 탭 카운트 업데이트
    const countAll = document.getElementById('count-all');
    const countFree = document.getElementById('count-free');
    const countPaid = document.getElementById('count-paid');
    const countBestseller = document.getElementById('count-bestseller');
    const countFinish = document.getElementById('count-finish');

    if (countAll) countAll.textContent = this.evaluatedSamples.length;
    if (countFree) countFree.textContent = this.evaluatedSamples.filter((s) => s.ranks?.free != null).length;
    if (countPaid) countPaid.textContent = this.evaluatedSamples.filter((s) => s.ranks?.paid != null).length;
    if (countBestseller) countBestseller.textContent = this.evaluatedSamples.filter((s) => s.ranks?.bestseller != null).length;
    if (countFinish) countFinish.textContent = this.evaluatedSamples.filter((s) => s.ranks?.finish != null).length;
  }

  bindEvents() {
    // 필터 탭
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        tabs.forEach((t) => t.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.getAttribute('data-filter') || 'all';
        this.renderLeaderboard();
      });
    });

    // 정렬 셀렉트
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        const lastUnderscore = this.currentSort.lastIndexOf('_');
        if (lastUnderscore > 0) {
          this.currentSortKey = this.currentSort.slice(0, lastUnderscore);
          this.currentSortOrder = this.currentSort.slice(lastUnderscore + 1);
        }
        this.updateHeaderSortIcons();
        this.renderLeaderboard();
      });
    }

    // 테이블 헤더 정렬 버튼 바인딩
    this.bindHeaderSort();

    // 검색 인풋
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderLeaderboard();
      });
    }

    // 시뮬레이터 인풋 체인지 & 버튼
    const runBtn = document.getElementById('sim-run-btn');
    if (runBtn) {
      runBtn.addEventListener('click', () => this.runSimulator());
    }

    const isPaidSelect = document.getElementById('sim-is-paid');
    if (isPaidSelect) {
      isPaidSelect.addEventListener('change', (e) => {
        const isPaid = e.target.value === 'true';
        const mainLabel = document.getElementById('sim-main-label');
        const subLabel = document.getElementById('sim-sub-label');
        if (isPaid) {
          if (mainLabel) mainLabel.textContent = '편당 평균 구매수 (회)';
          if (subLabel) subLabel.textContent = '총 누적 매출 (원)';
          const mainVal = document.getElementById('sim-main-val');
          const subVal = document.getElementById('sim-sub-val');
          if (mainVal) mainVal.value = 5000;
          if (subVal) subVal.value = 50000000;
        } else {
          if (mainLabel) mainLabel.textContent = '선호작 수 (명)';
          if (subLabel) subLabel.textContent = '평균 조회수 (회)';
          const mainVal = document.getElementById('sim-main-val');
          const subVal = document.getElementById('sim-sub-val');
          if (mainVal) mainVal.value = 300;
          if (subVal) subVal.value = 2500;
        }
        this.runSimulator();
      });
    }
  }

  bindHeaderSort() {
    const triggers = document.querySelectorAll('.sortable-th, .sort-chip-btn');
    triggers.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const sortKey = el.getAttribute('data-sort');
        if (!sortKey) return;

        if (this.currentSortKey === sortKey) {
          this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.currentSortKey = sortKey;
          this.currentSortOrder = (sortKey === 'rank' || sortKey === 'title') ? 'asc' : 'desc';
        }

        this.currentSort = `${this.currentSortKey}_${this.currentSortOrder}`;
        this.syncSortSelect();
        this.updateHeaderSortIcons();
        this.renderLeaderboard();
      });
    });
  }

  updateHeaderSortIcons() {
    const triggers = document.querySelectorAll('.sortable-th, .sort-chip-btn');
    triggers.forEach((el) => {
      const sortKey = el.getAttribute('data-sort');
      const icon = el.querySelector('.sort-icon');
      if (sortKey === this.currentSortKey) {
        el.classList.add('active-sort');
        el.classList.remove('asc', 'desc');
        el.classList.add(this.currentSortOrder);
        if (icon) {
          icon.textContent = this.currentSortOrder === 'asc' ? '▲' : '▼';
        }
      } else {
        el.classList.remove('active-sort', 'asc', 'desc');
        if (icon) {
          icon.textContent = '↕';
        }
      }
    });
  }

  syncSortSelect() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      const matchingOption = sortSelect.querySelector(`option[value="${this.currentSort}"]`);
      if (matchingOption) {
        sortSelect.value = this.currentSort;
      }
    }
  }

  runSimulator() {
    const chapters = parseInt(document.getElementById('sim-chapters')?.value, 10) || 1;
    const isPaid = document.getElementById('sim-is-paid')?.value === 'true';
    const mainVal = parseFloat(document.getElementById('sim-main-val')?.value) || 0;
    const subVal = parseFloat(document.getElementById('sim-sub-val')?.value) || 0;

    let simItem = {
      id: 'sim_test',
      title: '시뮬레이션 작품',
      author: '나',
      chapterCount: chapters,
      isPaid,
      paidChapters: isPaid ? Math.max(1, chapters - 25) : 0,
      favorites: isPaid ? Math.round(mainVal * 1.5) : mainVal,
      totalViews: isPaid ? Math.round(subVal / 100) : (subVal * chapters),
      avgViews: isPaid ? mainVal : subVal,
      likes: Math.round((subVal * chapters) * 0.05),
      comments: Math.round((subVal * chapters) * 0.003),
    };

    const evaluated = this.evaluateSample(simItem);

    const scoreEl = document.getElementById('sim-result-score');
    const pctEl = document.getElementById('sim-result-percentile');
    const scaleEl = document.getElementById('sim-result-scale');

    if (scoreEl) scoreEl.textContent = `Q ${evaluated.totalScore.toFixed(1)}점 [${evaluated.grade}]`;
    if (pctEl) {
      const topPct = ((1 - evaluated.percentile) * 100).toFixed(1);
      pctEl.textContent = `${chapters}화 기준 시장 상위 ${topPct}% (표본 내 우수 체급)`;
    }
    if (scaleEl) {
      scaleEl.textContent = `체급: ${evaluated.pillar1.toFixed(1)} / 45`;
    }
  }

  renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    if (!tbody) return;

    // 1. 필터링
    let filtered = [...this.evaluatedSamples];
    if (this.currentFilter === 'free') {
      filtered = filtered.filter((s) => s.ranks?.free != null);
    } else if (this.currentFilter === 'paid') {
      filtered = filtered.filter((s) => s.ranks?.paid != null);
    } else if (this.currentFilter === 'bestseller') {
      filtered = filtered.filter((s) => s.ranks?.bestseller != null);
    } else if (this.currentFilter === 'finish') {
      filtered = filtered.filter((s) => s.ranks?.finish != null);
    }

    // 2. 검색
    if (this.searchQuery) {
      filtered = filtered.filter((s) => {
        return (
          s.title.toLowerCase().includes(this.searchQuery) ||
          s.author.toLowerCase().includes(this.searchQuery) ||
          (s.genre && s.genre.toLowerCase().includes(this.searchQuery)) ||
          (s.badges && s.badges.some(b => b.toLowerCase().includes(this.searchQuery)))
        );
      });
    }

    // 3. 정렬 (줄 세우기)
    const getMinRank = (item) => {
      if (this.currentFilter && this.currentFilter !== 'all' && item.ranks?.[this.currentFilter] != null) {
        return item.ranks[this.currentFilter];
      }
      const rList = [item.ranks?.free, item.ranks?.paid, item.ranks?.bestseller, item.ranks?.finish].filter(r => r != null && r > 0);
      return rList.length > 0 ? Math.min(...rList) : 99999;
    };

    filtered.sort((a, b) => {
      const orderMul = this.currentSortOrder === 'asc' ? 1 : -1;
      switch (this.currentSortKey) {
        case 'rank':
          return (getMinRank(a) - getMinRank(b)) * orderMul;
        case 'title':
          return a.title.localeCompare(b.title, 'ko') * orderMul;
        case 'chapters':
          return (a.chapterCount - b.chapterCount) * orderMul;
        case 'qscore':
          return (a.totalScore - b.totalScore) * orderMul;
        case 'scale':
          return (a.pillar1 - b.pillar1) * orderMul;
        case 'retention':
          return (a.pillar2 - b.pillar2) * orderMul;
        case 'loyalty':
          return (a.pillar3 - b.pillar3) * orderMul;
        case 'revenue':
          return ((a.estimatedRevenue || 0) - (b.estimatedRevenue || 0)) * orderMul;
        case 'chapter_revenue':
          return ((a.avgRevenuePerChapter || 0) - (b.avgRevenuePerChapter || 0)) * orderMul;
        case 'fav':
          return (a.favorites - b.favorites) * orderMul;
        case 'todayviews':
          return ((a.todayViews || 0) - (b.todayViews || 0)) * orderMul;
        default:
          return (a.totalScore - b.totalScore) * orderMul;
      }
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align: center; padding: 40px; color: var(--text-muted);">
            조건에 일치하는 표본 작품이 없습니다.
          </td>
        </tr>
      `;
      return;
    }

    // 4. 행 렌더링
    tbody.innerHTML = filtered.map((item, idx) => {
      const rank = idx + 1;
      let rankClass = '';
      if (rank === 1) rankClass = 'rank-top-1';
      else if (rank === 2) rankClass = 'rank-top-2';
      else if (rank === 3) rankClass = 'rank-top-3';

      let typeBadge = '<span class="type-badge type-free">무료</span>';
      if (item.ranks?.finish != null) {
        typeBadge = '<span class="type-badge type-paid">완결</span>';
      } else if (item.isPaid) {
        if (item.paidChapters > 0 && item.paidChapters < 10) {
          typeBadge = '<span class="type-badge type-trans">신규전환</span>';
        } else {
          typeBadge = '<span class="type-badge type-paid">유료</span>';
        }
      }

      const topPct = ((1 - item.percentile) * 100).toFixed(1);
      const munpiaLink = `https://novel.munpia.com/${item.id}`;

      const badgesHtml = (item.badges || []).map((b) => {
        let bClass = 'badge-best-rank';
        if (b.includes('무료')) bClass = 'badge-free-rank';
        else if (b.includes('유료')) bClass = 'badge-paid-rank';
        else if (b.includes('완결')) bClass = 'badge-finish-rank';
        return `<span class="rank-badge ${bClass}">${b}</span>`;
      }).join(' ');

      return `
        <tr>
          <td class="rank-cell ${rankClass}">#${rank}</td>
          <td class="novel-info-cell">
            <a href="${munpiaLink}" target="_blank" class="novel-title-link" title="${item.description || item.title}">
              ${item.title}
            </a>
            <div class="novel-meta-tags">
              <span>${item.author}</span>
              <span class="tag-genre">${item.genre || '판타지'}</span>
            </div>
            ${badgesHtml ? `<div class="rank-badges-wrap">${badgesHtml}</div>` : ''}
          </td>
          <td>
            <strong>${item.chapterCount}화</strong><br>
            ${typeBadge}
          </td>
          <td>
            <div class="qscore-pill">
              <span class="qscore-num">${item.totalScore.toFixed(1)}</span>
              <span class="qscore-grade ${item.gradeClass}">${item.grade.split(' ')[0]}</span>
            </div>
          </td>
          <td>
            <div class="sub-score-box">
              <span class="sub-score-val">${item.pillar1.toFixed(1)} <small>/ 45</small></span>
              <span class="sub-score-pct">상위 ${topPct}%</span>
            </div>
          </td>
          <td>
            <div class="sub-score-box">
              <span class="sub-score-val">${item.pillar2.toFixed(1)} <small>/ 35</small></span>
              <span class="sub-score-pct">유지 ${(item.retentionRate * 100).toFixed(1)}%</span>
            </div>
          </td>
          <td>
            <div class="sub-score-box">
              <span class="sub-score-val">${item.pillar3.toFixed(1)} <small>/ 20</small></span>
              <span class="sub-score-pct">좋아요 ${(item.likeRatio * 100).toFixed(1)}%</span>
            </div>
          </td>
          <td class="revenue-cell">
            <div class="revenue-box">
              ${item.formattedRevenue}
              ${item.formattedAvgRevenue}
            </div>
          </td>
          <td>
            <div class="raw-metrics-box">
              <span>선호작: <strong>${item.favorites.toLocaleString()}명</strong></span>
              <span>평균: <strong>${item.avgViews.toLocaleString()}회</strong></span>
            </div>
          </td>
          <td style="text-align: center;">
            <a href="${munpiaLink}" target="_blank" style="text-decoration: none; font-size: 14px;" title="문피아 본문 바로가기">
              🔗
            </a>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function startDashboard() {
  const app = new DashboardController();
  app.init().catch(err => console.error('[Munpia Utility] Dashboard init error:', err));
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startDashboard);
  } else {
    startDashboard();
  }
}

