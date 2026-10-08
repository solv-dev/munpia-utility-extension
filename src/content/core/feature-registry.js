/**
 * FeatureRegistry
 * 등록된 모든 분석 기능의 생명주기(초기화, 실행, 파괴)를 통합 관리하는 레지스트리 클래스입니다.
 */
export class FeatureRegistry {
  constructor() {
    this.features = new Map();
  }

  /**
   * 신규 기능 모듈을 등록합니다.
   * @param {import('../features/base-feature.js').BaseFeature} feature
   */
  register(feature) {
    if (!feature || !feature.id) {
      console.error('[Munpia Utility] 유효하지 않은 기능 모듈 등록 시도:', feature);
      return;
    }
    this.features.set(feature.id, feature);
    console.log(`[Munpia Utility] 기능 모듈 등록 완료: [${feature.id}] ${feature.title}`);
  }

  /**
   * 등록된 모든 기능 리스트를 반환합니다.
   * @returns {import('../features/base-feature.js').BaseFeature[]}
   */
  getAll() {
    return Array.from(this.features.values());
  }

  /**
   * ID로 특정 기능 모듈을 조회합니다.
   * @param {string} id
   */
  get(id) {
    return this.features.get(id);
  }

  /**
   * 페이지 URL이 변경되었을 때, 활성화 대상 기능을 검사하고 초기화합니다.
   * @param {string} url
   */
  async handleUrlChange(url) {
    for (const feature of this.features.values()) {
      try {
        if (feature.enabled && feature.matches(url)) {
          await feature.init();
        } else {
          feature.destroy();
        }
      } catch (error) {
        console.error(`[Munpia Utility] 기능 [${feature.id}] URL 처리 중 오류:`, error);
      }
    }
  }

  /**
   * DOM이 렌더링되거나 업데이트되었을 때, 매칭되는 기능들을 일괄 실행합니다.
   * @param {string} currentUrl
   * @param {HTMLElement|Document} rootElement
   */
  async executeAll(currentUrl, rootElement) {
    for (const feature of this.features.values()) {
      if (!feature.enabled || !feature.matches(currentUrl)) {
        continue;
      }

      try {
        await feature.execute(rootElement);
      } catch (error) {
        console.error(`[Munpia Utility] 기능 [${feature.id}] 실행 중 오류:`, error);
      }
    }
  }

  /**
   * 모든 기능을 정리(destroy)합니다.
   */
  destroyAll() {
    for (const feature of this.features.values()) {
      try {
        feature.destroy();
      } catch (error) {
        console.error(`[Munpia Utility] 기능 [${feature.id}] 해제 중 오류:`, error);
      }
    }
  }
}

