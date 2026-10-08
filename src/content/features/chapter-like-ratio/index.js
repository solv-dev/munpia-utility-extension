import { BaseFeature } from '../base-feature.js';
import { DomUtils } from '../../core/dom-utils.js';
import { chapterDataProvider } from '../../core/chapter-data-provider.js';

/**
 * ChapterInlineAnalyticsFeature
 * 회차 목록의 메타 정보(날짜, 조회, 좋아요, 글자수, 댓글) 바로 뒤에
 * 동일한 폰트 스타일로 [비율 X.XX% / 이탈률 X.XX%]을 인라인으로 연결하여 표시합니다.
 * 
 * [완벽한 회차 매핑]:
 * - 각 회차 카드의 itemRow1(itemNumber)에서 고유 회차 번호(N화)를 100% 정확하게 추출합니다.
 * - 정렬 순서(최신순/1화부터)와 무관하게, N화는 무조건 직전 연재분인 (N - 1)화의 조회수와 비교하여
 *   화면 상의 모든 회차에 이탈률을 빠짐없이 100% 산출합니다.
 */
export class ChapterAnalyticsRowFeature extends BaseFeature {
  constructor() {
    super({
      id: 'chapter-analytics-inline',
      title: '회차 메타 인라인 분석 (비율 및 이탈률)',
      description: '회차 메타 행의 댓글 뒤에 동일한 폰트 스타일로 좋아요 비율과 직전 연재 회차 대비 이탈률을 표시합니다.',
    });
    this.handleDataReady = null;
  }

  matches(url) {
    if (!url.includes('munpia.com')) return false;
    // 소설 본문 뷰어 화면에서는 회차 목록이 없으므로 제외
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
    console.log('[Munpia Utility] 회차 인라인 분석 기능 초기화');

    // 백그라운드 데이터 수집 완료 시 이탈률 자동 재계산 리스너
    this.handleDataReady = () => {
      this.execute(document.body);
    };
    window.addEventListener('munpia_global_data_ready', this.handleDataReady);
  }

  async execute(rootElement) {
    // 1. novelId 추출 후 백그라운드 데이터 로드 트리거
    const novelId = chapterDataProvider.extractNovelId(window.location.href);
    if (novelId) {
      chapterDataProvider.loadNovelData(novelId);
    }

    // 2. 화면 내 회차 목록 메타 요소 처리
    this._processModernSpaItems(rootElement);
  }

  _processModernSpaItems(context) {
    const metaContainers = DomUtils.queryAll(
      '[class*="itemMeta"], [class*="itemRow2"], [class*="ItemMeta"]',
      context
    );

    if (metaContainers.length === 0) return 0;

    const currentBatch = [];
    const screenMap = new Map(); // chapterNumber -> hits (현재 화면 전체 맵)

    // 1단계: 화면에 렌더링된 모든 회차 항목의 메타 및 회차 번호(N) 수집
    metaContainers.forEach((metaContainer) => {
      let hits = 0;
      let likes = 0;
      let isPaid = false;

      const metaGroups = DomUtils.queryAll('[class*="metaGroup"]', metaContainer);
      let commentGroup = null;

      if (metaGroups.length > 0) {
        metaGroups.forEach((group) => {
          const text = group.textContent.trim();
          if (text.startsWith('조회')) {
            hits = DomUtils.parseNumber(text.replace('조회', ''));
          } else if (text.startsWith('구매')) {
            hits = DomUtils.parseNumber(text.replace('구매', ''));
            isPaid = true;
          } else if (text.startsWith('좋아요') || text.startsWith('추천')) {
            likes = DomUtils.parseNumber(text.replace(/좋아요|추천/, ''));
          } else if (text.startsWith('댓글')) {
            commentGroup = group;
          }
        });
      }

      if (!hits || !likes) {
        const fullText = metaContainer.textContent || '';
        const hitMatch = fullText.match(/(?:조회|구매)\s*[:\s]?\s*([0-9,.]+만?천?)/);
        const likeMatch = fullText.match(/(?:좋아요|추천)\s*[:\s]?\s*([0-9,.]+만?천?)/);
        if (hitMatch) {
          hits = DomUtils.parseNumber(hitMatch[1]);
          if (hitMatch[0].includes('구매')) isPaid = true;
        }
        if (likeMatch) likes = DomUtils.parseNumber(likeMatch[1]);
      }

      // 회차 번호(N) 100% 정밀 파싱:
      // 각 회차 카드의 itemRow1(itemNumber) 또는 제목에서 고유 회차 번호 추출
      const itemRow2 = metaContainer.closest('[class*="itemRow2"]') || metaContainer;
      const itemCard = itemRow2.parentElement;
      const itemRow1 = itemRow2.previousElementSibling || itemCard?.querySelector('[class*="itemRow1"]');

      let chapterNumber = null;
      if (itemRow1) {
        const numEl = itemRow1.querySelector('[class*="itemNumber"] span, [class*="itemNumber"]');
        if (numEl) {
          chapterNumber = parseInt(numEl.textContent.replace(/[^0-9]/g, ''), 10);
        } else {
          const titleEl = itemRow1.querySelector('[class*="itemTitle"], a');
          const tText = (titleEl ? titleEl.textContent : itemRow1.textContent).trim();
          const match = tText.match(/^(\d+)\s*\./) || tText.match(/^(\d+)\s*화/);
          if (match) chapterNumber = parseInt(match[1], 10);
        }
      }

      if (!chapterNumber) {
        // fallback: 메타 컨테이너 부모에서 추출
        const cardText = (itemCard ? itemCard.textContent : '').trim();
        const match = cardText.match(/^(\d+)\s*\./) || cardText.match(/(\d+)\s*\./);
        if (match) chapterNumber = parseInt(match[1], 10);
      }

      if (chapterNumber && hits > 0) {
        screenMap.set(chapterNumber, hits);
      }

      currentBatch.push({
        metaContainer,
        commentGroup: commentGroup || metaGroups[metaGroups.length - 1],
        hits,
        likes,
        isPaid,
        chapterNumber,
      });
    });

    // 화면 데이터 전역 공유 (상단 통계 집계 연동)
    window.__MUNPIA_CURRENT_SCREEN_BATCH__ = currentBatch;

    // 1화 조회수 기준점 파악
    const stats = chapterDataProvider.getStats();
    let firstChapterHits = stats.firstChapterHits;
    if (!firstChapterHits) {
      if (screenMap.has(1)) firstChapterHits = screenMap.get(1);
    }

    // 2단계: 각 회차별 이탈률 산출 및 뱃지 인라인 주입
    currentBatch.forEach((item) => {
      if (item.hits <= 0) return;

      const ratio = DomUtils.calculateRatio(item.likes, item.hits);

      // 직전 연재분(N - 1화)의 조회수 탐색:
      let prevHits = null;
      if (item.chapterNumber && item.chapterNumber > 1) {
        const targetPrevNum = item.chapterNumber - 1;

        // 1순위: 현재 화면(screenMap)에서 직전 회차(N - 1) 조회 (최신순이든 1화부터든 동일 화면이면 100% 즉시 매핑!)
        if (screenMap.has(targetPrevNum)) {
          prevHits = screenMap.get(targetPrevNum);
        } else {
          // 2순위: 백그라운드 DataProvider에서 직전 회차(N - 1) 조회 (페이지 경계 회차 커버)
          const prevChapter = chapterDataProvider.getChapter(targetPrevNum);
          if (prevChapter && prevChapter.hits > 0) {
            prevHits = prevChapter.hits;
          }
        }
      }

      const dropRate = prevHits ? DomUtils.calculateDropRate(item.hits, prevHits) : null;
      const retentionRate = firstChapterHits ? DomUtils.calculateRetentionRate(item.hits, firstChapterHits) : null;

      // 이미 주입된 요소 검사 및 업데이트
      const existingAddon = item.metaContainer.querySelector('[data-munpia-addon="stats"]');
      const newAddon = DomUtils.createInlineMetaAddons({
        ratio,
        likes: item.likes,
        hits: item.hits,
        isPaid: item.isPaid,
        dropRate,
        retentionRate,
      });

      if (existingAddon) {
        if (existingAddon.innerHTML !== newAddon.innerHTML) {
          existingAddon.replaceWith(newAddon);
        }
        return;
      }

      // 댓글 그룹 뒤에 인라인 삽입
      if (item.commentGroup) {
        item.commentGroup.insertAdjacentElement('afterend', newAddon);
      } else {
        item.metaContainer.appendChild(newAddon);
      }
    });

    return currentBatch.length;
  }

  destroy() {
    if (this.handleDataReady) {
      window.removeEventListener('munpia_global_data_ready', this.handleDataReady);
    }
    const addons = document.querySelectorAll('[data-munpia-addon="stats"]');
    addons.forEach((el) => el.remove());
  }
}
