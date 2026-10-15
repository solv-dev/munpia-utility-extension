import { BaseFeature } from '../base-feature.js';
import { DomUtils } from '../../core/dom-utils.js';
import { chapterDataProvider } from '../../core/chapter-data-provider.js';

/**
 * NovelSummaryStatsFeature
 * 작품 상세 상단의 '작품등록일' 바로 아랫줄에 아이콘 없이
 * 조회수/좋아요/선호작과 동일한 단조로운 폰트 스타일로
 * [무료 조회수 XXX,XXX ∙ 유료 구매수 XXX,XXX]를 확실하게 표시합니다.
 */
export class NovelSummaryStatsFeature extends BaseFeature {
  constructor() {
    super({
      id: 'novel-summary-stats',
      title: '작품 상단 조회수/구매수 분리 표시',
      description: '작품등록일 아랫줄에 아이콘 없이 무료 조회수와 유료 구매수를 분리하여 정확히 표시합니다.',
    });
    this.lastRenderedKey = '';
    this.handleDataReady = null;
  }

  matches(url) {
    if (!url.includes('munpia.com')) return false;
    // 소설 뷰어 화면에서는 회차 목록 및 상세 메타가 없으므로 제외
    if (url.includes('/viewer/') || url.includes('/novel/viewer')) return false;
    return (
      url.includes('/novel/detail/') ||
      url.includes('/novel/') ||
      url.includes('/page/hd.view') ||
      url.includes('/entry/') ||
      /\/\d+(\/|\?|#|$)/.test(url)
    );
  }

  async init() {
    console.log('[Munpia Utility] 작품 상단 조회수/구매수 분리 기능 초기화');

    this.handleDataReady = () => {
      this.execute(document.body);
    };
    window.addEventListener('munpia_global_data_ready', this.handleDataReady);
  }

  async execute(rootElement) {
    // 1. DataProvider 통계 확인
    const stats = chapterDataProvider.getStats();
    let freeHitsSum = stats.freeHitsSum || 0;
    let paidPurchasesSum = stats.paidPurchasesSum || 0;
    let freeCount = stats.freeCount || 0;
    let paidCount = stats.paidCount || 0;

    // 2. 화면 배치(screenBatch)에서 데이터 보강
    const screenBatch = window.__MUNPIA_CURRENT_SCREEN_BATCH__ || [];
    if (freeHitsSum === 0 && paidPurchasesSum === 0 && screenBatch.length > 0) {
      screenBatch.forEach((ch) => {
        if (ch.isPaid) {
          paidPurchasesSum += ch.hits;
          paidCount++;
        } else {
          freeHitsSum += ch.hits;
          freeCount++;
        }
      });
    }

    // 3. 상단 메타에서 전체 '조회수', '좋아요', '선호작', '등록일' 등 추출
    let totalHeaderViews = 0;
    let headerLikes = 0;
    let headerFavorites = 0;
    let headerRegDate = null;
    let headerRecentDate = null;

    const topMetaCandidates = DomUtils.queryAll('[class*="infoRows"], [class*="detailInfo"], [class*="info_detail"], [class*="detail_section"], div');
    for (const el of topMetaCandidates) {
      const text = el.textContent || '';
      if (text.length > 500) continue;

      if (text.includes('조회수') && !totalHeaderViews) {
        const m = text.match(/조회수\s*[:\s]?\s*([0-9,.]+만?천?)/);
        if (m) totalHeaderViews = DomUtils.parseNumber(m[1]);
      }
      if ((text.includes('좋아요') || text.includes('추천')) && !headerLikes) {
        const m = text.match(/(?:좋아요|추천)\s*[:\s]?\s*([0-9,.]+만?천?)/);
        if (m) headerLikes = DomUtils.parseNumber(m[1]);
      }
      if (text.includes('선호작') && !headerFavorites) {
        const m = text.match(/선호작\s*[:\s]?\s*([0-9,.]+만?천?)/);
        if (m) headerFavorites = DomUtils.parseNumber(m[1]);
      }
      if (text.includes('작품등록일') && !headerRegDate) {
        const m = text.match(/작품등록일\s*[:\s]?\s*([0-9.]+)/);
        if (m) headerRegDate = m[1];
      }
      if (text.includes('최근연재일') && !headerRecentDate) {
        const m = text.match(/최근연재일\s*[:\s]?\s*([0-9.]+)/);
        if (m) headerRecentDate = m[1];
      }
    }

    // 만약 screenBatch나 DataProvider에서 무료 합계가 없거나 0인 경우,
    // 그리고 유료 구매수를 뺀 나머지 또는 순수 무료작품인 경우 상단 총 조회수를 무료 조회수로 매핑
    if (paidPurchasesSum === 0) {
      if (totalHeaderViews > 0) {
        freeHitsSum = totalHeaderViews;
      }
    } else {
      if (totalHeaderViews > paidPurchasesSum && freeHitsSum === 0) {
        freeHitsSum = Math.max(0, totalHeaderViews - paidPurchasesSum);
      }
    }

    // 아무런 데이터도 없으면 리턴
    if (freeHitsSum === 0 && paidPurchasesSum === 0 && totalHeaderViews === 0) {
      return;
    }

    // 4. 깜빡임 방지: 이전 렌더링 값과 동일하면 DOM 조작 건너뜀
    const currentKey = `${freeHitsSum}_${paidPurchasesSum}_${headerFavorites}_${headerLikes}`;
    const existingLine = document.querySelector('[data-munpia-summary="clean-stats"]');

    if (existingLine && this.lastRenderedKey === currentKey) {
      return;
    }

    // 5. 상단 infoRows 컨테이너 스타일 보정 (고정 높이 70px 해제 및 gap 부여)
    const infoRowsContainers = DomUtils.queryAll('[class*="infoRows"]');
    for (const container of infoRowsContainers) {
      container.style.setProperty('height', 'auto', 'important');
      container.style.setProperty('min-height', '70px', 'important');
      container.style.setProperty('gap', '6px', 'important');
      container.style.setProperty('justify-content', 'flex-start', 'important');
    }

    // 6. '작품등록일'이 포함된 정확한 실제 행(targetRow) 탐색
    // (주의: #root나 body 등 최상위 컨테이너가 잡히지 않도록 엄격히 탐색)
    let targetRow = null;

    // 1차: infoRows 컨테이너 직계 자식 중 작품등록일/최근연재일 행 탐색
    if (infoRowsContainers.length > 0) {
      for (const container of infoRowsContainers) {
        const rows = Array.from(container.children);
        for (const row of rows) {
          const t = row.textContent || '';
          if (t.includes('작품등록일') || t.includes('최근연재일')) {
            targetRow = row;
            break;
          }
        }
        if (targetRow) break;
        // 컨테이너는 있으나 등록일 텍스트를 못 찾은 경우 마지막 행을 타깃으로 지정
        if (!targetRow && rows.length > 0) {
          targetRow = rows[rows.length - 1];
        }
      }
    }

    // 2차 fallback: 텍스트 길이가 150자 미만인 구체적인 등록일 요소 탐색
    if (!targetRow) {
      const candidates = DomUtils.queryAll('[class*="infoRow"], [class*="infoItem"], div, p, li', document.body);
      for (const el of candidates) {
        const text = el.textContent || '';
        if ((text.includes('작품등록일') || text.includes('최근연재일')) && text.length > 5 && text.length < 150) {
          targetRow = el.closest('[class*="infoRow"]') || el;
          break;
        }
      }
    }

    if (!targetRow) {
      return;
    }

    // 7. 이전 잘못된 위치에 주입되었던 summary 라인들 전체 정리
    const allOldLines = DomUtils.queryAll('[data-munpia-summary="clean-stats"]');
    for (const old of allOldLines) {
      // 만약 targetRow 바로 뒤가 아닌 엉뚱한 위치(예: body 끝)에 있다면 제거
      if (old.previousElementSibling !== targetRow) {
        old.remove();
      }
    }

    this.lastRenderedKey = currentKey;

    // 8. 단조로운 순정 스타일의 새 행 div 생성 및 주입
    const newLine = DomUtils.createCleanSummaryLine({
      freeHitsSum,
      paidPurchasesSum,
      freeCount,
      paidCount,
    });

    // 문피아 순정 infoRow의 CSS 클래스를 상속받아 크기와 행간 완벽 일치
    if (targetRow.className) {
      newLine.className = `${targetRow.className} munpia-clean-summary-line`.trim();
    }

    const currentExisting = targetRow.nextElementSibling?.getAttribute('data-munpia-summary') === 'clean-stats'
      ? targetRow.nextElementSibling
      : null;

    if (currentExisting) {
      currentExisting.innerHTML = newLine.innerHTML;
    } else {
      targetRow.insertAdjacentElement('afterend', newLine);
    }

    // 9. [대시보드 행: 출판사 정산 카드 + 작품 퀄리티 대시보드 카드] Flex 레이아웃 주입
    const insertedStatLine = targetRow.nextElementSibling;
    if (insertedStatLine) {
      // 전 회차 목록 취득 (DataProvider 또는 화면 배치 데이터 fallback)
      let allChapters = chapterDataProvider.getAllChapters();
      if (allChapters.length === 0 && screenBatch.length > 0) {
        allChapters = screenBatch.map((item) => ({
          num: item.chapterNumber,
          hits: item.hits,
          likes: item.likes,
          commentCount: item.comments || 0,
          isPaid: Boolean(item.isPaid),
          createdAt: item.createdAt || null,
        }));
      }

      // 작품 전체 Market Power Q-Score 산출
      const qTotalData = DomUtils.calculateTotalQScore(allChapters, {
        paidPurchasesSum,
        freeHitsSum,
        favorites: headerFavorites,
        totalLikes: headerLikes,
        totalViews: totalHeaderViews,
        totalChapters: stats.totalChapters || allChapters.length,
        regDate: headerRegDate,
        recentDate: headerRecentDate,
      });

      // 카드 생성
      const revCard = DomUtils.createRevenueCard(paidPurchasesSum);
      const qCard = DomUtils.createQScoreDashboardCard(qTotalData);

      // 상위 Flex 컨테이너 (.munpia-dashboard-row) 관리
      let dashboardRow = document.querySelector('[data-munpia-dashboard="row"]');
      if (!dashboardRow) {
        dashboardRow = document.createElement('div');
        dashboardRow.className = 'munpia-dashboard-row';
        dashboardRow.setAttribute('data-munpia-dashboard', 'row');
      }

      dashboardRow.innerHTML = '';
      if (qCard) {
        const openBtn = qCard.querySelector('.qscore-open-dashboard-btn');
        if (openBtn) {
          openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
              chrome.runtime.sendMessage({ action: 'open_market_dashboard' });
            }
          });
        }
        dashboardRow.appendChild(qCard);
      }
      if (revCard) {
        dashboardRow.appendChild(revCard);
      }

      // 이전 버전의 단독 정산 라인이 남아있다면 정리
      const oldRevLine = document.querySelector('[data-munpia-summary="revenue-stats"]');
      if (oldRevLine) oldRevLine.remove();

      if (dashboardRow.parentElement !== insertedStatLine.parentElement || dashboardRow.previousElementSibling !== insertedStatLine) {
        insertedStatLine.insertAdjacentElement('afterend', dashboardRow);
      }

      // 10. [munpia_extractor 연동] 작품 상세 및 전 회차 분석 메타데이터 localStorage 캐싱
      try {
        const sortedChapters = [...allChapters].sort((a, b) => a.num - b.num);
        const ch1 = sortedChapters.find((c) => c.num === 1) || sortedChapters[0];
        const ch1Hits = ch1 ? (ch1.hits || 0) : 0;

        const enrichedChapters = [];
        for (let i = 0; i < sortedChapters.length; i++) {
          const ch = sortedChapters[i];
          const prevCh = i > 0 ? sortedChapters[i - 1] : null;
          const currentHits = ch.hits || 0;
          const likes = ch.likes || 0;
          const comments = ch.commentCount || 0;
          const isPaid = Boolean(ch.isPaid);

          const likeRatio = currentHits > 0 ? Number(((likes / currentHits) * 100).toFixed(2)) : 0;
          const retentionRate = ch1Hits > 0 ? Number(((currentHits / ch1Hits) * 100).toFixed(2)) : 100.0;
          let dropRate = null;
          if (prevCh && prevCh.hits > 0) {
            dropRate = Number((((prevCh.hits - currentHits) / prevCh.hits) * 100).toFixed(2));
          }

          const isFirstOrTransition = (i === 0) || (isPaid && prevCh && !prevCh.isPaid);
          const epQ = DomUtils.calculateEpisodeQScore({
            currentHits,
            prevHits: prevCh ? prevCh.hits : null,
            likes,
            comments,
            isFirstOrTransition,
          });

          enrichedChapters.push({
            num: ch.num,
            title: ch.title || `${ch.num}화`,
            isPaid,
            createdAt: ch.createdAt || null,
            hits: currentHits,
            likes,
            comments,
            likeRatio,
            retentionRate,
            dropRate,
            qScore: (epQ && typeof epQ.score === 'number') ? epQ.score : 0,
          });
        }

        const totalRevenue = Math.round(paidPurchasesSum * 100);
        const platformFee = Math.round(totalRevenue * 0.37);
        const distributable = totalRevenue - platformFee;
        const writer90 = Math.round(distributable * 0.90);
        const net90 = Math.round(writer90 * 0.967);
        const writer80 = Math.round(distributable * 0.80);
        const net80 = Math.round(writer80 * 0.967);
        const writer70 = Math.round(distributable * 0.70);
        const net70 = Math.round(writer70 * 0.967);

        const pageMeta = extractNovelPageMeta();
        const novelId = chapterDataProvider.extractNovelId(window.location.href) || chapterDataProvider.currentNovelId;

        if (novelId) {
          const avgPurchases = stats.paidCount > 0 ? Math.round(paidPurchasesSum / stats.paidCount) : 0;
          const convRate = (headerFavorites > 0 && avgPurchases > 0)
            ? Number(((avgPurchases / headerFavorites) * 100).toFixed(2))
            : 0;
          const totalRetention = (ch1Hits > 0 && enrichedChapters.length > 0)
            ? Number(((enrichedChapters[enrichedChapters.length - 1].hits / ch1Hits) * 100).toFixed(2))
            : 0;

          const cachePayload = {
            novelId,
            title: pageMeta.title,
            author: pageMeta.author,
            genre: pageMeta.genre,
            uci: pageMeta.uci,
            regDate: headerRegDate,
            recentDate: headerRecentDate,
            totalChapters: stats.totalChapters || allChapters.length,
            capturedAt: new Date().toISOString(),
            overallStats: {
              totalViews: totalHeaderViews || (freeHitsSum + paidPurchasesSum),
              freeViews: freeHitsSum,
              paidPurchases: paidPurchasesSum,
              favorites: headerFavorites,
              totalLikes: headerLikes,
              avgPurchases,
              grossRevenue: totalRevenue,
              platformFee,
              netRevenueBreakdown: {
                ratio90: { gross: writer90, net: net90 },
                ratio80: { gross: writer80, net: net80 },
                ratio70: { gross: writer70, net: net70 },
              },
              qScore: {
                score: qTotalData.score,
                pillar1: qTotalData.pillar1,
                pillar2: qTotalData.pillar2,
                pillar3: qTotalData.pillar3,
                gradeLabel: qTotalData.gradeLabel,
                scaleLabel: qTotalData.scaleLabel,
                trackLabel: qTotalData.trackLabel,
                percentile: qTotalData.percentile,
              },
              conversionRate: convRate,
              totalRetention,
            },
            chapters: enrichedChapters,
          };

          localStorage.setItem(`munpia_novel_stats_${novelId}`, JSON.stringify(cachePayload));
          console.log(`[Munpia Utility] 작품(${novelId}) 메타데이터 localStorage 캐싱 완료 (${enrichedChapters.length}개 회차)`);
        }
      } catch (cacheErr) {
        console.warn('[Munpia Utility] 메타데이터 캐싱 중 오류 발생:', cacheErr);
      }
    }

    console.log('[Munpia Utility] 상단 무료/유료 집계 및 대시보드(정산+Q-Score) 표시 완료:', {
      freeHitsSum,
      paidPurchasesSum,
    });
  }

  destroy() {
    if (this.handleDataReady) {
      window.removeEventListener('munpia_global_data_ready', this.handleDataReady);
    }
    const line = document.querySelector('[data-munpia-summary="clean-stats"]');
    if (line) line.remove();
    const dashboardRow = document.querySelector('[data-munpia-dashboard="row"]');
    if (dashboardRow) dashboardRow.remove();
    const revLine = document.querySelector('[data-munpia-summary="revenue-stats"]');
    if (revLine) revLine.remove();
    this.lastRenderedKey = '';
  }
}

/**
 * 작품 상세 화면 DOM에서 제목, 작가, 장르, UCI 메타데이터를 정밀 추출합니다.
 */
function extractNovelPageMeta() {
  let title = '';
  let author = '';
  let genre = '';
  let uci = '';

  // 1. 작품 제목
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
  if (ogTitle) {
    title = ogTitle.split('::')[0].trim();
  }
  if (!title) {
    const titleEl = document.querySelector('h2.title, h1.title, [class*="titleButton_"], [class*="detail_section"] [class*="title"], [class*="header"] [class*="title"]');
    if (titleEl) title = titleEl.textContent.trim();
  }
  if (!title && document.title) {
    title = document.title.split('::')[0].split('-')[0].trim();
  }

  // 2. 작가명
  const ogAuthor = document.querySelector('meta[name="author"], meta[property="article:author"]')?.getAttribute('content');
  if (ogAuthor) {
    author = ogAuthor.trim();
  }
  if (!author) {
    const authorEl = document.querySelector('[class*="author"], [class*="writer"], a[href*="/author/"], .author');
    if (authorEl) author = authorEl.textContent.trim().replace(/^저자\s*[:\s]?/, '');
  }

  // 3. 장르 및 UCI (상세 정보 행 순회)
  const infoElements = DomUtils.queryAll('[class*="infoRows"], [class*="detailInfo"], [class*="info_detail"], [class*="info_section"], div', document.body);
  for (const el of infoElements) {
    const text = el.textContent || '';
    if (text.length > 500) continue;
    if (!genre && (text.includes('장르') || text.includes('분류'))) {
      const gm = text.match(/(?:장르|분류)\s*[:\s]?\s*([가-힣A-Za-z0-9\s/]+)/);
      if (gm) genre = gm[1].trim();
    }
    if (!uci && text.includes('UCI')) {
      const um = text.match(/UCI\s*[:\s]?\s*([A-Za-z0-9_:-]+)/i);
      if (um) uci = um[1].trim();
    }
  }

  return { title, author, genre, uci };
}

