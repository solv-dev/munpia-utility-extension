/**
 * BaseFeature
 * 모든 분석 기능 모듈이 반드시 상속해야 하는 기본 추상 클래스입니다.
 * 일관된 생명주기와 확장성을 보장합니다.
 */
export class BaseFeature {
  /**
   * @param {Object} options
   * @param {string} options.id - 고유 식별자 (kebab-case)
   * @param {string} options.title - 사용자 표시용 이름
   * @param {string} options.description - 기능 설명
   */
  constructor({ id, title, description }) {
    if (!id) throw new Error('Feature must have an id');
    this.id = id;
    this.title = title || id;
    this.description = description || '';
    this.enabled = true;
  }

  /**
   * 현재 URL 또는 페이지 상태가 이 기능의 실행 대상인지 판별합니다.
   * @param {string} url - 현재 페이지 전체 URL
   * @returns {boolean}
   */
  matches(url) {
    return false;
  }

  /**
   * 페이지 진입 시 1회 실행되는 초기화 로직입니다.
   */
  async init() {}

  /**
   * 감시자(PageWatcher)에 의해 대상 DOM이 감지/변경될 때마다 호출되는 핵심 실행 로직입니다.
   * @param {HTMLElement|Document} rootElement - 감지된 DOM 루트 또는 변경 요소
   */
  async execute(rootElement) {}

  /**
   * 페이지 전환 또는 기능 비활성화 시 주입된 DOM 및 리소스를 정리합니다.
   */
  destroy() {}
}

