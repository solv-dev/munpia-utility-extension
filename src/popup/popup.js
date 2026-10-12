/**
 * Popup Script
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('[Munpia Utility] 팝업 로드 완료');

  const openBtn = document.getElementById('btn-open-market-dashboard');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: chrome.runtime.getURL('src/dashboard/index.html') });
    });
  }
});

