/**
 * Munpia Utility Extension - Background Service Worker
 */

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('[Munpia Utility] 확장 프로그램이 설치되었습니다.');
  } else if (details.reason === 'update') {
    console.log(`[Munpia Utility] 확장 프로그램이 업데이트되었습니다 (v${chrome.runtime.getManifest().version})`);
  }
});

