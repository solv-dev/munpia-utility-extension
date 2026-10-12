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

// 시장 표본 대시보드 새 탭 열기 핸들러
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'open_market_dashboard') {
    chrome.tabs.create({ url: chrome.runtime.getURL('src/dashboard/index.html') });
    sendResponse({ success: true });
  }
  return true;
});

