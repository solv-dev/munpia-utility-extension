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

    // 3. 상단 메타에서 전체 '조회수' 총합 파싱 (예: "조회수 1,178,981")
    let totalHeaderViews = 0;
    // infoRows 컨테이너나 상단 메타 전체 영역에서 '조회수' 추출
    const topMetaCandidates = DomUtils.queryAll('[class*="infoRows"], [class*="detailInfo"], [class*="info_detail"], [class*="detail_section"], div');
    for (const el of topMetaCandidates) {
      const text = el.textContent || '';
      if (text.includes('조회수') && text.length < 500) {
        const m = text.match(/조회수\s*[:\s]?\s*([0-9,.]+만?천?)/);
        if (m) {
          totalHeaderViews = DomUtils.parseNumber(m[1]);
          if (totalHeaderViews > 0) break;
        }
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
    const currentKey = `${freeHitsSum}_${paidPurchasesSum}`;
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
      console.warn('[Munpia Utility] 상단 작품등록일 요소를 찾지 못했습니다.');
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

    // 9. [출판사 정산 라인] 주입 (조회수/구매수/매출/플랫폼수수료 행 바로 아랫줄)
    const insertedStatLine = targetRow.nextElementSibling;
    if (insertedStatLine) {
      const newRevLine = DomUtils.createRevenueSummaryLine(paidPurchasesSum);
      const existingRevLine = document.querySelector('[data-munpia-summary="revenue-stats"]');

      if (!newRevLine) {
        if (existingRevLine) existingRevLine.remove();
      } else {
        newRevLine.className = 'munpia-revenue-summary-line';

        if (existingRevLine) {
          if (existingRevLine.previousElementSibling === insertedStatLine) {
            existingRevLine.innerHTML = newRevLine.innerHTML;
          } else {
            existingRevLine.remove();
            insertedStatLine.insertAdjacentElement('afterend', newRevLine);
          }
        } else {
          insertedStatLine.insertAdjacentElement('afterend', newRevLine);
        }
      }
    }

    console.log('[Munpia Utility] 상단 무료 조회수/유료 구매수 및 추정 수익 표시 완료:', {
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
    const revLine = document.querySelector('[data-munpia-summary="revenue-stats"]');
    if (revLine) revLine.remove();
    this.lastRenderedKey = '';
  }
}
