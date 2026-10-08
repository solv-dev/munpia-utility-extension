/**
 * Munpia Utility Extension - Content Script Entry Point
 * 확장 프로그램의 코어 엔진을 부팅하고 기능 모듈들을 등록합니다.
 */
import { PageWatcher } from './core/page-watcher.js';
import { FeatureRegistry } from './core/feature-registry.js';
import { ChapterAnalyticsRowFeature } from './features/chapter-like-ratio/index.js';
import { NovelSummaryStatsFeature } from './features/novel-summary-stats/index.js';

class MunpiaExtensionApp {
  constructor() {
    this.registry = new FeatureRegistry();
    this.watcher = null;
  }

  /**
   * 확장 프로그램 부트스트랩
   */
  async start() {
    console.log('[Munpia Utility] 코어 엔진 초기화 시작...');

    // 1. 기능 모듈 등록
    this._registerFeatures();

    // 2. SPA 및 DOM 감시자(PageWatcher) 설정
    this.watcher = new PageWatcher({
      onUrlChange: async (newUrl) => {
        console.log('[Munpia Utility] 페이지 URL 변경 감지:', newUrl);
        await this.registry.handleUrlChange(newUrl);
        await this.registry.executeAll(newUrl, document.body);
      },
      onDomChange: async (rootElement) => {
        await this.registry.executeAll(window.location.href, rootElement);
      },
    });

    // 3. 감시 시작
    this.watcher.start();

    // 4. 현재 페이지 초기 실행
    const currentUrl = window.location.href;
    await this.registry.handleUrlChange(currentUrl);
    await this.registry.executeAll(currentUrl, document.body);

    document.documentElement.classList.add('munpia-utility-initialized');
    console.log('[Munpia Utility] 확장 프로그램이 성공적으로 로드되었습니다.');
  }

  /**
   * 기능 모듈 등록소
   */
  _registerFeatures() {
    // [기능 1] 회차별 2열 분석 행 (좋아요 비율 및 이탈률)
    this.registry.register(new ChapterAnalyticsRowFeature());

    // [기능 2] 작품 상단 무료 조회수 / 유료 구매수 분리 및 합산 표시
    this.registry.register(new NovelSummaryStatsFeature());
  }
}

// 싱글톤 인스턴스 실행
const app = new MunpiaExtensionApp();
app.start();
