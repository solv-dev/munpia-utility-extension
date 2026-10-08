/**
 * Content Script Loader
 * Manifest V3 Content Script 환경에서 ES 모듈을 동적으로 로드하는 부트스트랩 스크립트입니다.
 */
(async () => {
  try {
    const src = chrome.runtime.getURL('src/content/index.js');
    await import(src);
  } catch (error) {
    console.error('[Munpia Utility] 확장 프로그램 모듈 로드 실패:', error);
  }
})();

