/**
 * PageWatcher
 * SPA(단일 페이지 앱) 환경에서의 라우팅 변경(URL) 및
 * 비동기 DOM 렌더링(MutationObserver)을 지속적으로 감시하고 이벤트를 전달합니다.
 */
export class PageWatcher {
  /**
   * @param {Object} options
   * @param {Function} options.onUrlChange - URL 변경 시 호출될 콜백
   * @param {Function} options.onDomChange - DOM 변경 시 호출될 콜백 (디바운스 적용)
   */
  constructor({ onUrlChange, onDomChange }) {
    this.onUrlChange = onUrlChange;
    this.onDomChange = onDomChange;
    this.currentUrl = window.location.href;
    this.observer = null;
    this.debounceTimer = null;
    this.pollTimer = null;
    this.isWatching = false;
  }

  /**
   * 감시자를 시작합니다.
   */
  start() {
    if (this.isWatching) return;
    this.isWatching = true;

    this._hookHistory();
    this._observeDom();
    this._startInitialPolling();
  }

  /**
   * 페이지 로드 직후 비동기 컴포넌트 렌더링을 대비해 짧은 시간 동안 주기적으로 확인합니다.
   */
  _startInitialPolling() {
    let count = 0;
    this.pollTimer = setInterval(() => {
      count++;
      if (typeof this.onDomChange === 'function') {
        this.onDomChange(document.body);
      }
      if (count >= 10) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }, 600);
  }

  /**
   * 브라우저 History API를 후킹하여 SPA URL 전환을 감지합니다.
   */
  _hookHistory() {
    const handleUrlUpdate = () => {
      const newUrl = window.location.href;
      if (newUrl !== this.currentUrl) {
        this.currentUrl = newUrl;
        if (typeof this.onUrlChange === 'function') {
          this.onUrlChange(newUrl);
        }
        this._startInitialPolling();
      }
    };

    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleUrlUpdate();
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleUrlUpdate();
    };

    window.addEventListener('popstate', handleUrlUpdate);

    // '최신순' / '1화부터' 정렬 탭 및 페이지네이션 클릭 감지
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (
        target &&
        (target.textContent?.includes('최신순') ||
          target.textContent?.includes('1화부터') ||
          target.closest?.('[class*="pagination"], [class*="Pagination"], nav'))
      ) {
        setTimeout(() => {
          if (typeof this.onDomChange === 'function') {
            this.onDomChange(document.body);
          }
        }, 300);
      }
    }, true);
  }

  /**
   * DOM의 변경(동적 컴포넌트 마운트, 회차 목록 갱신 등)을 감시합니다.
   */
  _observeDom() {
    this.observer = new MutationObserver((mutations) => {
      // 주입된 뱃지 자체로 인한 무한 루프 방지
      const isInternalMutation = mutations.every((m) =>
        Array.from(m.addedNodes).every(
          (node) =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.classList?.contains('munpia-stat-badge') ||
              node.hasAttribute?.('data-munpia-badge'))
        )
      );

      if (isInternalMutation) return;

      // 디바운스 적용 (200ms)
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        if (typeof this.onDomChange === 'function') {
          this.onDomChange(document.body);
        }
      }, 200);
    });

    const targetNode = document.body || document.documentElement;
    if (targetNode) {
      this.observer.observe(targetNode, {
        childList: true,
        subtree: true,
      });
    }
  }

  /**
   * 감시자를 중지합니다.
   */
  stop() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
    clearTimeout(this.debounceTimer);
    this.isWatching = false;
  }
}
