/**
 * ChapterDataProvider
 * 문피아 내부 chapters API를 비동기 프리페치하여
 * 1) 페이지 경계 회차(31화, 61화 등)의 직전 회차 데이터를 완벽하게 매핑하고,
 * 2) 화면 렌더링 수에 구애받지 않고 작품 전체 회차의 무료 조회수/유료 구매수 총합을 100% 정밀 집계합니다.
 */
export class ChapterDataProvider {
  constructor() {
    this.currentNovelId = null;
    this.isLoading = false;
    this.cachedNovelId = null;
    this.chaptersMap = new Map(); // num -> chapterData
    this.aggregate = {
      freeHitsSum: 0,
      paidPurchasesSum: 0,
      freeCount: 0,
      paidCount: 0,
      firstChapterHits: 0,
      totalChapters: 0,
    };
  }

  /**
   * 현재 URL에서 novelId를 추출합니다.
   * 예: /novel/detail/104753 -> "104753", /novel/104753 -> "104753"
   */
  extractNovelId(url) {
    const match = url.match(/\/novel\/(?:detail\/)?(\d+)/) || url.match(/\/(\d+)(?:\/|\?|#|$)/);
    return match ? match[1] : null;
  }

  /**
   * 해당 소설의 전 회차 데이터를 백그라운드에서 가져와 캐시를 구축합니다.
   * @param {string} novelId
   * @param {Function} [onComplete] - 완료 시 콜백
   */
  async loadNovelData(novelId, onComplete) {
    if (!novelId || (this.cachedNovelId === novelId && this.chaptersMap.size > 0)) {
      if (typeof onComplete === 'function') onComplete(this.getStats());
      return;
    }

    if (this.isLoading) return;
    this.isLoading = true;
    this.currentNovelId = novelId;

    try {
      console.log(`[Munpia Utility] 작품(ID: ${novelId}) 전체 회차 백그라운드 데이터 수집 시작...`);

      // 1. 첫 페이지 (100개) 요청
      const firstRes = await this._fetchPage(novelId, 1, 100);
      if (!firstRes || !firstRes.result) {
        this.isLoading = false;
        return;
      }

      const total = firstRes.result.total || 0;
      const allChapters = [...(firstRes.result.list || [])];
      const totalPages = Math.ceil(total / 100);

      // 2. 100화 초과 장편 작품인 경우 나머지 페이지들 병렬 비동기 조회
      if (totalPages > 1) {
        const fetchPromises = [];
        for (let p = 2; p <= totalPages; p++) {
          fetchPromises.push(this._fetchPage(novelId, p, 100));
        }

        const responses = await Promise.all(fetchPromises);
        responses.forEach((res) => {
          if (res && res.result && Array.isArray(res.result.list)) {
            allChapters.push(...res.result.list);
          }
        });
      }

      // 3. 데이터 파싱 및 통계 집계
      this.chaptersMap.clear();
      let freeHits = 0;
      let paidPurchases = 0;
      let freeCount = 0;
      let paidCount = 0;

      allChapters.forEach((ch) => {
        const num = ch.num;
        const hits = ch.viewCount || ch.hits || 0;
        const likes = ch.likeCount || ch.likes || 0;
        const commentCount = ch.commentCount ?? ch.replyCount ?? ch.comments ?? 0;
        const isPaid = !ch.free;
        const createdAt = ch.createdAt || ch.regDate || ch.registDate || ch.createDate || ch.date || null;

        if (num) {
          this.chaptersMap.set(num, {
            id: ch.id,
            num,
            title: ch.title,
            hits,
            likes,
            commentCount,
            isPaid,
            createdAt,
          });
        }

        if (isPaid) {
          paidPurchases += hits;
          paidCount++;
        } else {
          freeHits += hits;
          freeCount++;
        }
      });

      // 1화 조회수 기준점
      const ch1 = this.chaptersMap.get(1);
      const firstChapterHits = ch1 ? ch1.hits : 0;

      this.aggregate = {
        freeHitsSum: freeHits,
        paidPurchasesSum: paidPurchases,
        freeCount,
        paidCount,
        firstChapterHits,
        totalChapters: total,
      };

      this.cachedNovelId = novelId;
      console.log(`[Munpia Utility] 전체 ${total}화 데이터 수집 완료! (무료: ${freeHits.toLocaleString()}회, 유료: ${paidPurchases.toLocaleString()}회)`);

      // 전역 공유
      window.__MUNPIA_GLOBAL_DATA_PROVIDER__ = this;

      // 데이터 갱신 이벤트 발행
      window.dispatchEvent(new CustomEvent('munpia_global_data_ready', {
        detail: { novelId, aggregate: this.aggregate }
      }));

      if (typeof onComplete === 'function') {
        onComplete(this.getStats());
      }
    } catch (error) {
      console.error('[Munpia Utility] 회차 데이터 백그라운드 프리페치 실패:', error);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * 특정 페이지 API 요청 헬퍼
   */
  async _fetchPage(novelId, page, size = 100) {
    const url = `https://www.munpia.com/api/v1/pc/novel-detail/${novelId}/chapters?page=${page}&size=${size}`;
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!res.ok) return null;
    return await res.json();
  }

  /**
   * 특정 회차 번호의 데이터를 조회합니다.
   * @param {number} num
   */
  getChapter(num) {
    return this.chaptersMap.get(num);
  }

  /**
   * 전체 회차 목록을 번호 순서(오름차순)로 반환합니다.
   * @returns {Array<Object>}
   */
  getAllChapters() {
    return Array.from(this.chaptersMap.values()).sort((a, b) => a.num - b.num);
  }

  /**
   * 화면(DOM)에서 수집된 추가 메타(댓글수, 등록일 등)를 캐시에 동기화 보강합니다.
   * @param {number} num
   * @param {Object} data
   */
  updateChapterFromScreen(num, data) {
    if (!num) return;
    const existing = this.chaptersMap.get(num);
    if (existing) {
      if ((!existing.commentCount || existing.commentCount === 0) && data.comments > 0) {
        existing.commentCount = data.comments;
      }
      if (!existing.createdAt && data.createdAt) {
        existing.createdAt = data.createdAt;
      }
    } else {
      this.chaptersMap.set(num, {
        id: null,
        num,
        title: data.title || `${num}화`,
        hits: data.hits || 0,
        likes: data.likes || 0,
        commentCount: data.comments || 0,
        isPaid: Boolean(data.isPaid),
        createdAt: data.createdAt || null,
      });
    }
  }

  /**
   * 집계 통계를 반환합니다.
   */
  getStats() {
    return this.aggregate;
  }
}

// 싱글톤 인스턴스
export const chapterDataProvider = new ChapterDataProvider();

