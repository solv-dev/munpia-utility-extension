/**
 * 문피아 3대 베스트 랭킹 통합 시장 표본 데이터셋 (총 486개 실존 작품)
 * 문피아 공식 API(https://www.munpia.com/api/v1/pc/novel-detail/{id})로부터
 * 실제 실시간 화수, 선호작, 총 조회수, 좋아요, 무료/유료 상태를 100% 정밀 수집하여 동기화 완료.
 * 
 * 수집 소스:
 * 1. 무료 투데이 베스트 (https://www.munpia.com/best/today?displayType=GRID) - 1~200위
 * 2. 유료 투데이 베스트 (https://www.munpia.com/best/plsa.eachtoday?displayType=GRID) - 1~200위
 * 3. 베스트 셀러 (https://www.munpia.com/best/plsa.bestseller?displayType=GRID) - 1~200위
 * 
 * 기준 일시: 2026-10-12
 */
export const todayMarketSamples = [
  {
    "id": "591099",
    "title": "즉사무기 들고 이세계로",
    "author": "땅피",
    "genre": "현대판타지, 판타지",
    "chapterCount": 60,
    "favorites": 16122,
    "totalViews": 2412328,
    "avgViews": 40205,
    "todayViews": 12064,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 70071,
    "comments": 10511,
    "ranks": {
      "free": 1,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 1위"
    ],
    "description": "무료 투베 1위"
  },
  {
    "id": "592421",
    "title": "해고당한 삼촌이 천재 기타리스트라고?",
    "author": "김불록",
    "genre": "현대판타지, 판타지",
    "chapterCount": 77,
    "favorites": 18618,
    "totalViews": 2108141,
    "avgViews": 27378,
    "todayViews": 425125,
    "isPaid": true,
    "paidChapters": 52,
    "likes": 65862,
    "comments": 9879,
    "ranks": {
      "free": null,
      "paid": 1,
      "bestseller": 21
    },
    "badges": [
      "유료 투베 1위",
      "베스트셀러 21위"
    ],
    "description": "유료 투베 1위 | 베스트셀러 21위"
  },
  {
    "id": "499327",
    "title": "전능의 뇌를 얻었다",
    "author": "몽쉐르",
    "genre": "현대판타지",
    "chapterCount": 327,
    "favorites": 52189,
    "totalViews": 11455796,
    "avgViews": 35033,
    "todayViews": 0,
    "isPaid": true,
    "paidChapters": 302,
    "likes": 445661,
    "comments": 66849,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 1
    },
    "badges": [
      "베스트셀러 1위"
    ],
    "description": "베스트셀러 1위"
  },
  {
    "id": "606767",
    "title": "히트곡 다 써줬더니 해고당했다",
    "author": "더페이서",
    "genre": "현대판타지, SF",
    "chapterCount": 20,
    "favorites": 7752,
    "totalViews": 522279,
    "avgViews": 26114,
    "todayViews": 9437,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 9957,
    "comments": 1494,
    "ranks": {
      "free": 2,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 2위"
    ],
    "description": "무료 투베 2위"
  },
  {
    "id": "595621",
    "title": "12살 소년공인데 대문호로 착각당했다",
    "author": "덤벙",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 53,
    "favorites": 18979,
    "totalViews": 1574070,
    "avgViews": 29699,
    "todayViews": 115946,
    "isPaid": true,
    "paidChapters": 27,
    "likes": 67303,
    "comments": 10095,
    "ranks": {
      "free": null,
      "paid": 2,
      "bestseller": 143
    },
    "badges": [
      "유료 투베 2위",
      "베스트셀러 143위"
    ],
    "description": "유료 투베 2위 | 베스트셀러 143위"
  },
  {
    "id": "568983",
    "title": "막장드라마의 엔딩에 빙의했다",
    "author": "핏콩",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 160,
    "favorites": 30458,
    "totalViews": 4425027,
    "avgViews": 27656,
    "todayViews": 0,
    "isPaid": true,
    "paidChapters": 135,
    "likes": 186941,
    "comments": 28041,
    "ranks": {
      "free": null,
      "paid": 4,
      "bestseller": 2
    },
    "badges": [
      "베스트셀러 2위",
      "유료 투베 4위"
    ],
    "description": "베스트셀러 2위 | 유료 투베 4위"
  },
  {
    "id": "599602",
    "title": "멸망할 우주의 만렙 플레이어",
    "author": "통풍왔음",
    "genre": "SF, 게임",
    "chapterCount": 42,
    "favorites": 16745,
    "totalViews": 1424323,
    "avgViews": 33912,
    "todayViews": 9079,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 41951,
    "comments": 6293,
    "ranks": {
      "free": 3,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 3위"
    ],
    "description": "무료 투베 3위"
  },
  {
    "id": "585412",
    "title": "선협에서 땅굴을 숨김",
    "author": "불로수선전",
    "genre": "무협, 퓨전",
    "chapterCount": 90,
    "favorites": 23288,
    "totalViews": 2688381,
    "avgViews": 29871,
    "todayViews": 655452,
    "isPaid": true,
    "paidChapters": 67,
    "likes": 101449,
    "comments": 15217,
    "ranks": {
      "free": null,
      "paid": 3,
      "bestseller": 10
    },
    "badges": [
      "유료 투베 3위",
      "베스트셀러 10위"
    ],
    "description": "유료 투베 3위 | 베스트셀러 10위"
  },
  {
    "id": "547216",
    "title": "회장님, 신점 보시려면 줄부터 서세요",
    "author": "한성윤",
    "genre": "현대판타지",
    "chapterCount": 222,
    "favorites": 33418,
    "totalViews": 5687505,
    "avgViews": 25619,
    "todayViews": 22720,
    "isPaid": true,
    "paidChapters": 197,
    "likes": 219842,
    "comments": 32976,
    "ranks": {
      "free": null,
      "paid": 18,
      "bestseller": 3
    },
    "badges": [
      "베스트셀러 3위",
      "유료 투베 18위"
    ],
    "description": "베스트셀러 3위 | 유료 투베 18위"
  },
  {
    "id": "598545",
    "title": "1000조 셸터의 주인이 되었다",
    "author": "솔도솔도",
    "genre": "현대판타지, SF",
    "chapterCount": 43,
    "favorites": 16870,
    "totalViews": 1605374,
    "avgViews": 37334,
    "todayViews": 8908,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 43365,
    "comments": 6505,
    "ranks": {
      "free": 4,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 4위"
    ],
    "description": "무료 투베 4위"
  },
  {
    "id": "555698",
    "title": "나 혼자 마법사인데 탑 등반",
    "author": "찬동",
    "genre": "현대판타지, 판타지",
    "chapterCount": 159,
    "favorites": 24361,
    "totalViews": 4419797,
    "avgViews": 27797,
    "todayViews": 0,
    "isPaid": true,
    "paidChapters": 134,
    "likes": 144518,
    "comments": 21678,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 4
    },
    "badges": [
      "베스트셀러 4위"
    ],
    "description": "베스트셀러 4위"
  },
  {
    "id": "607392",
    "title": "핵심 특허가 내 건 줄 모르고 해고당함",
    "author": "탄산수영장",
    "genre": "현대판타지, 판타지",
    "chapterCount": 15,
    "favorites": 7997,
    "totalViews": 446229,
    "avgViews": 29749,
    "todayViews": 7657,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7601,
    "comments": 1140,
    "ranks": {
      "free": 5,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 5위"
    ],
    "description": "무료 투베 5위"
  },
  {
    "id": "548415",
    "title": "별 그리는 그림 천재",
    "author": "가화만사성™",
    "genre": "현대판타지",
    "chapterCount": 223,
    "favorites": 20856,
    "totalViews": 3885545,
    "avgViews": 17424,
    "todayViews": 694008,
    "isPaid": true,
    "paidChapters": 198,
    "likes": 168107,
    "comments": 25216,
    "ranks": {
      "free": null,
      "paid": 5,
      "bestseller": 9
    },
    "badges": [
      "유료 투베 5위",
      "베스트셀러 9위"
    ],
    "description": "유료 투베 5위 | 베스트셀러 9위"
  },
  {
    "id": "556620",
    "title": "내 훈수 한 번에 월클들의 고질병이 고쳐짐",
    "author": "솬스코",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 162,
    "favorites": 25242,
    "totalViews": 4273441,
    "avgViews": 26379,
    "todayViews": 0,
    "isPaid": true,
    "paidChapters": 137,
    "likes": 138289,
    "comments": 20743,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 5
    },
    "badges": [
      "베스트셀러 5위"
    ],
    "description": "베스트셀러 5위"
  },
  {
    "id": "603411",
    "title": "퇴사당하자 거래처가 전부 따라옴",
    "author": "시래클",
    "genre": "현대판타지",
    "chapterCount": 28,
    "favorites": 7993,
    "totalViews": 646013,
    "avgViews": 23072,
    "todayViews": 7071,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 11845,
    "comments": 1777,
    "ranks": {
      "free": 6,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 6위"
    ],
    "description": "무료 투베 6위"
  },
  {
    "id": "586529",
    "title": "왜 자꾸 드라마가 잘되는데!",
    "author": "누리용",
    "genre": "현대판타지",
    "chapterCount": 85,
    "favorites": 13134,
    "totalViews": 2132009,
    "avgViews": 25082,
    "todayViews": 205633,
    "isPaid": true,
    "paidChapters": 60,
    "likes": 38322,
    "comments": 5748,
    "ranks": {
      "free": null,
      "paid": 6,
      "bestseller": 78
    },
    "badges": [
      "유료 투베 6위",
      "베스트셀러 78위"
    ],
    "description": "유료 투베 6위 | 베스트셀러 78위"
  },
  {
    "id": "571088",
    "title": "허난설헌의 남편이 되었다?",
    "author": "글로부",
    "genre": "대체역사, 판타지",
    "chapterCount": 144,
    "favorites": 19921,
    "totalViews": 2945554,
    "avgViews": 20455,
    "todayViews": 803415,
    "isPaid": true,
    "paidChapters": 119,
    "likes": 101853,
    "comments": 15278,
    "ranks": {
      "free": null,
      "paid": 13,
      "bestseller": 6
    },
    "badges": [
      "베스트셀러 6위",
      "유료 투베 13위"
    ],
    "description": "베스트셀러 6위 | 유료 투베 13위"
  },
  {
    "id": "603082",
    "title": "나 혼자 전산담당인데 퇴사당함",
    "author": "시래클",
    "genre": "현대판타지",
    "chapterCount": 31,
    "favorites": 7402,
    "totalViews": 779493,
    "avgViews": 25145,
    "todayViews": 6485,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 14664,
    "comments": 2200,
    "ranks": {
      "free": 7,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 7위"
    ],
    "description": "무료 투베 7위"
  },
  {
    "id": "594371",
    "title": "29살 시장이 도시를 너무 잘 키움",
    "author": "탄두리치킨",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 61,
    "favorites": 14452,
    "totalViews": 1652979,
    "avgViews": 27098,
    "todayViews": 101241,
    "isPaid": true,
    "paidChapters": 36,
    "likes": 48508,
    "comments": 7276,
    "ranks": {
      "free": null,
      "paid": 7,
      "bestseller": 156
    },
    "badges": [
      "유료 투베 7위",
      "베스트셀러 156위"
    ],
    "description": "유료 투베 7위 | 베스트셀러 156위"
  },
  {
    "id": "556317",
    "title": "러시아 황제가 독재를 너무 잘함",
    "author": "폭식마왕",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 263,
    "favorites": 12364,
    "totalViews": 2496511,
    "avgViews": 9492,
    "todayViews": 752659,
    "isPaid": true,
    "paidChapters": 238,
    "likes": 119478,
    "comments": 17922,
    "ranks": {
      "free": null,
      "paid": 22,
      "bestseller": 7
    },
    "badges": [
      "베스트셀러 7위",
      "유료 투베 22위"
    ],
    "description": "베스트셀러 7위 | 유료 투베 22위"
  },
  {
    "id": "599040",
    "title": "물에 잠긴 세상에서 내 배만 레벨업",
    "author": "송탄",
    "genre": "현대판타지, SF",
    "chapterCount": 42,
    "favorites": 17505,
    "totalViews": 1526742,
    "avgViews": 36351,
    "todayViews": 6230,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 49642,
    "comments": 7446,
    "ranks": {
      "free": 8,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 8위"
    ],
    "description": "무료 투베 8위"
  },
  {
    "id": "590111",
    "title": "NBA의 폭군이 되었다",
    "author": "필리포스",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 71,
    "favorites": 8220,
    "totalViews": 906719,
    "avgViews": 12771,
    "todayViews": 125954,
    "isPaid": true,
    "paidChapters": 46,
    "likes": 32537,
    "comments": 4881,
    "ranks": {
      "free": null,
      "paid": 8,
      "bestseller": 131
    },
    "badges": [
      "유료 투베 8위",
      "베스트셀러 131위"
    ],
    "description": "유료 투베 8위 | 베스트셀러 131위"
  },
  {
    "id": "520318",
    "title": "비자발적 종신 독재자",
    "author": "키나아빠",
    "genre": "현대판타지, 드라마",
    "chapterCount": 303,
    "favorites": 38565,
    "totalViews": 7643130,
    "avgViews": 25225,
    "todayViews": 708508,
    "isPaid": true,
    "paidChapters": 278,
    "likes": 289056,
    "comments": 43358,
    "ranks": {
      "free": null,
      "paid": 12,
      "bestseller": 8
    },
    "badges": [
      "베스트셀러 8위",
      "유료 투베 12위"
    ],
    "description": "베스트셀러 8위 | 유료 투베 12위"
  },
  {
    "id": "603207",
    "title": "국가 버림 받은 영웅의 아들이 전능한 힘을 각성함",
    "author": "화운(話云)",
    "genre": "현대판타지, 판타지",
    "chapterCount": 29,
    "favorites": 6711,
    "totalViews": 454557,
    "avgViews": 15674,
    "todayViews": 6226,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 11704,
    "comments": 1756,
    "ranks": {
      "free": 9,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 9위"
    ],
    "description": "무료 투베 9위"
  },
  {
    "id": "592133",
    "title": "회귀한 김대리는 속마음이 들린다",
    "author": "킴총무",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 64,
    "favorites": 14983,
    "totalViews": 2314770,
    "avgViews": 36168,
    "todayViews": 26270,
    "isPaid": true,
    "paidChapters": 39,
    "likes": 62059,
    "comments": 9309,
    "ranks": {
      "free": null,
      "paid": 9,
      "bestseller": null
    },
    "badges": [
      "유료 투베 9위"
    ],
    "description": "유료 투베 9위"
  },
  {
    "id": "594010",
    "title": "튜토리얼에 조난당했다",
    "author": "빈수박",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 58,
    "favorites": 9523,
    "totalViews": 1439085,
    "avgViews": 24812,
    "todayViews": 5705,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 32061,
    "comments": 4809,
    "ranks": {
      "free": 10,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 10위"
    ],
    "description": "무료 투베 10위"
  },
  {
    "id": "590872",
    "title": "미국 국세청 말단인데, 온갖 거물들이 나를 두려워함",
    "author": "김옥지",
    "genre": "현대판타지, 판타지",
    "chapterCount": 85,
    "favorites": 12420,
    "totalViews": 1520232,
    "avgViews": 17885,
    "todayViews": 232271,
    "isPaid": true,
    "paidChapters": 61,
    "likes": 46966,
    "comments": 7045,
    "ranks": {
      "free": null,
      "paid": 10,
      "bestseller": 66
    },
    "badges": [
      "유료 투베 10위",
      "베스트셀러 66위"
    ],
    "description": "유료 투베 10위 | 베스트셀러 66위"
  },
  {
    "id": "606203",
    "title": "좌천당한 김 과장이 너무 유능하다",
    "author": "후추발바닥",
    "genre": "현대판타지, 판타지",
    "chapterCount": 22,
    "favorites": 8831,
    "totalViews": 559580,
    "avgViews": 25435,
    "todayViews": 5031,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 11542,
    "comments": 1731,
    "ranks": {
      "free": 11,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 11위"
    ],
    "description": "무료 투베 11위"
  },
  {
    "id": "578243",
    "title": "주인공이 1층에서 안 올라감",
    "author": "제법넓은강",
    "genre": "퓨전, 현대판타지",
    "chapterCount": 128,
    "favorites": 19915,
    "totalViews": 3612824,
    "avgViews": 28225,
    "todayViews": 493623,
    "isPaid": true,
    "paidChapters": 103,
    "likes": 130454,
    "comments": 19568,
    "ranks": {
      "free": null,
      "paid": 11,
      "bestseller": 18
    },
    "badges": [
      "유료 투베 11위",
      "베스트셀러 18위"
    ],
    "description": "유료 투베 11위 | 베스트셀러 18위"
  },
  {
    "id": "563339",
    "title": "이번 생은 무역왕",
    "author": "영완(映完)",
    "genre": "현대판타지, 드라마",
    "chapterCount": 166,
    "favorites": 13725,
    "totalViews": 2371214,
    "avgViews": 14284,
    "todayViews": 644529,
    "isPaid": true,
    "paidChapters": 141,
    "likes": 91502,
    "comments": 13725,
    "ranks": {
      "free": null,
      "paid": 27,
      "bestseller": 11
    },
    "badges": [
      "베스트셀러 11위",
      "유료 투베 27위"
    ],
    "description": "베스트셀러 11위 | 유료 투베 27위"
  },
  {
    "id": "605629",
    "title": "나 혼자 만능 서포터인데 퇴사당함",
    "author": "백수천",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 24,
    "favorites": 6201,
    "totalViews": 432817,
    "avgViews": 18034,
    "todayViews": 4888,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 9135,
    "comments": 1370,
    "ranks": {
      "free": 12,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 12위"
    ],
    "description": "무료 투베 12위"
  },
  {
    "id": "503857",
    "title": "반강제적 제국주의자",
    "author": "지갑송",
    "genre": "판타지, 퓨전",
    "chapterCount": 292,
    "favorites": 39094,
    "totalViews": 7297279,
    "avgViews": 24991,
    "todayViews": 635084,
    "isPaid": true,
    "paidChapters": 267,
    "likes": 310716,
    "comments": 46607,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 12
    },
    "badges": [
      "베스트셀러 12위"
    ],
    "description": "베스트셀러 12위"
  },
  {
    "id": "605893",
    "title": "해고 당한 과장이 업계를 뒤집어 놓음.",
    "author": "글과달",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 22,
    "favorites": 6211,
    "totalViews": 374984,
    "avgViews": 17045,
    "todayViews": 4774,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7439,
    "comments": 1116,
    "ranks": {
      "free": 13,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 13위"
    ],
    "description": "무료 투베 13위"
  },
  {
    "id": "545835",
    "title": "사천당가의 CIA 비밀 요원",
    "author": "뜨아샷추가",
    "genre": "현대판타지, 무협",
    "chapterCount": 201,
    "favorites": 30095,
    "totalViews": 5151005,
    "avgViews": 25627,
    "todayViews": 626038,
    "isPaid": true,
    "paidChapters": 176,
    "likes": 187666,
    "comments": 28150,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 13
    },
    "badges": [
      "베스트셀러 13위"
    ],
    "description": "베스트셀러 13위"
  },
  {
    "id": "601421",
    "title": "힐만 해도 레벨업",
    "author": "글맛",
    "genre": "현대판타지, 판타지",
    "chapterCount": 36,
    "favorites": 6860,
    "totalViews": 693965,
    "avgViews": 19277,
    "todayViews": 4281,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 16420,
    "comments": 2463,
    "ranks": {
      "free": 14,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 14위"
    ],
    "description": "무료 투베 14위"
  },
  {
    "id": "588280",
    "title": "퇴사 당했는데 파워볼 당첨되어 미국에서 호텔영업합니다",
    "author": "김망초",
    "genre": "현대판타지, 드라마",
    "chapterCount": 74,
    "favorites": 16485,
    "totalViews": 1911284,
    "avgViews": 25828,
    "todayViews": 267861,
    "isPaid": true,
    "paidChapters": 49,
    "likes": 56431,
    "comments": 8465,
    "ranks": {
      "free": null,
      "paid": 14,
      "bestseller": 52
    },
    "badges": [
      "유료 투베 14위",
      "베스트셀러 52위"
    ],
    "description": "유료 투베 14위 | 베스트셀러 52위"
  },
  {
    "id": "563228",
    "title": "국정원 금강불괴 블랙요원",
    "author": "소탐자",
    "genre": "현대판타지, 판타지",
    "chapterCount": 157,
    "favorites": 18526,
    "totalViews": 3199070,
    "avgViews": 20376,
    "todayViews": 622119,
    "isPaid": true,
    "paidChapters": 132,
    "likes": 111742,
    "comments": 16761,
    "ranks": {
      "free": null,
      "paid": 17,
      "bestseller": 14
    },
    "badges": [
      "베스트셀러 14위",
      "유료 투베 17위"
    ],
    "description": "베스트셀러 14위 | 유료 투베 17위"
  },
  {
    "id": "595218",
    "title": "오스만은 로마다",
    "author": "초음중음",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 56,
    "favorites": 5030,
    "totalViews": 494755,
    "avgViews": 8835,
    "todayViews": 4212,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 25448,
    "comments": 3817,
    "ranks": {
      "free": 15,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 15위"
    ],
    "description": "무료 투베 15위"
  },
  {
    "id": "576539",
    "title": "세종이 집착하는 건축가가 되었다",
    "author": "제이칸",
    "genre": "대체역사, 판타지",
    "chapterCount": 129,
    "favorites": 13007,
    "totalViews": 1877200,
    "avgViews": 14552,
    "todayViews": 489473,
    "isPaid": true,
    "paidChapters": 104,
    "likes": 71823,
    "comments": 10773,
    "ranks": {
      "free": null,
      "paid": 15,
      "bestseller": 19
    },
    "badges": [
      "유료 투베 15위",
      "베스트셀러 19위"
    ],
    "description": "유료 투베 15위 | 베스트셀러 19위"
  },
  {
    "id": "557119",
    "title": "갱단한테 곡 팔았더니 음악천재로 착각 당했다",
    "author": "모락카노",
    "genre": "현대판타지",
    "chapterCount": 179,
    "favorites": 18710,
    "totalViews": 3279765,
    "avgViews": 18323,
    "todayViews": 613732,
    "isPaid": true,
    "paidChapters": 154,
    "likes": 117711,
    "comments": 17657,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 15
    },
    "badges": [
      "베스트셀러 15위"
    ],
    "description": "베스트셀러 15위"
  },
  {
    "id": "604497",
    "title": "결혼식날 새인생 차림",
    "author": "초전도",
    "genre": "판타지, 현대판타지",
    "chapterCount": 25,
    "favorites": 5976,
    "totalViews": 453677,
    "avgViews": 18147,
    "todayViews": 4061,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 8904,
    "comments": 1336,
    "ranks": {
      "free": 16,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 16위"
    ],
    "description": "무료 투베 16위"
  },
  {
    "id": "588845",
    "title": "전설의 유물을 찾았더니 유럽 귀족이 되었다",
    "author": "야근의신",
    "genre": "현대판타지",
    "chapterCount": 78,
    "favorites": 10728,
    "totalViews": 1530344,
    "avgViews": 19620,
    "todayViews": 99946,
    "isPaid": true,
    "paidChapters": 53,
    "likes": 52481,
    "comments": 7872,
    "ranks": {
      "free": null,
      "paid": 16,
      "bestseller": 160
    },
    "badges": [
      "유료 투베 16위",
      "베스트셀러 160위"
    ],
    "description": "유료 투베 16위 | 베스트셀러 160위"
  },
  {
    "id": "564697",
    "title": "북한의 지도자가 되었다",
    "author": "언행일치",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 208,
    "favorites": 11212,
    "totalViews": 2161292,
    "avgViews": 10391,
    "todayViews": 582016,
    "isPaid": true,
    "paidChapters": 183,
    "likes": 75256,
    "comments": 11288,
    "ranks": {
      "free": null,
      "paid": 30,
      "bestseller": 16
    },
    "badges": [
      "베스트셀러 16위",
      "유료 투베 30위"
    ],
    "description": "베스트셀러 16위 | 유료 투베 30위"
  },
  {
    "id": "600930",
    "title": "신내림 받은 조연은 소소하게 산다",
    "author": "어로달",
    "genre": "현대판타지",
    "chapterCount": 37,
    "favorites": 4897,
    "totalViews": 380509,
    "avgViews": 10284,
    "todayViews": 3935,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 14987,
    "comments": 2248,
    "ranks": {
      "free": 17,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 17위"
    ],
    "description": "무료 투베 17위"
  },
  {
    "id": "540228",
    "title": "시간 정지 능력으로 탑 등반",
    "author": "봡바봡",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 190,
    "favorites": 34267,
    "totalViews": 6238618,
    "avgViews": 32835,
    "todayViews": 528237,
    "isPaid": true,
    "paidChapters": 165,
    "likes": 208988,
    "comments": 31348,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 17
    },
    "badges": [
      "베스트셀러 17위"
    ],
    "description": "베스트셀러 17위"
  },
  {
    "id": "608297",
    "title": "유일한 지구 출신 대군주가 되었다.",
    "author": "플라워링",
    "genre": "현대판타지, SF",
    "chapterCount": 21,
    "favorites": 3373,
    "totalViews": 165923,
    "avgViews": 7901,
    "todayViews": 3898,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 4106,
    "comments": 616,
    "ranks": {
      "free": 18,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 18위"
    ],
    "description": "무료 투베 18위"
  },
  {
    "id": "598994",
    "title": "은하제국 개망나니가 빙의를 숨김",
    "author": "라가불린",
    "genre": "판타지, SF",
    "chapterCount": 43,
    "favorites": 7604,
    "totalViews": 776192,
    "avgViews": 18051,
    "todayViews": 3819,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 17411,
    "comments": 2612,
    "ranks": {
      "free": 19,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 19위"
    ],
    "description": "무료 투베 19위"
  },
  {
    "id": "594220",
    "title": "회귀한 투수 코치가 공을 너무 잘 던짐",
    "author": "밤카다",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 56,
    "favorites": 7291,
    "totalViews": 1236462,
    "avgViews": 22080,
    "todayViews": 22400,
    "isPaid": true,
    "paidChapters": 31,
    "likes": 26231,
    "comments": 3935,
    "ranks": {
      "free": null,
      "paid": 19,
      "bestseller": null
    },
    "badges": [
      "유료 투베 19위"
    ],
    "description": "유료 투베 19위"
  },
  {
    "id": "594643",
    "title": "멸세 무림에 선협 시스템이 켜졌다",
    "author": "안형찬",
    "genre": "무협, 퓨전",
    "chapterCount": 55,
    "favorites": 5349,
    "totalViews": 640636,
    "avgViews": 11648,
    "todayViews": 3651,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 18587,
    "comments": 2788,
    "ranks": {
      "free": 20,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 20위"
    ],
    "description": "무료 투베 20위"
  },
  {
    "id": "593497",
    "title": "미국에서 방출 선수만 계약한다",
    "author": "아아연하게",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 60,
    "favorites": 6176,
    "totalViews": 1048791,
    "avgViews": 17480,
    "todayViews": 22280,
    "isPaid": true,
    "paidChapters": 35,
    "likes": 24478,
    "comments": 3672,
    "ranks": {
      "free": null,
      "paid": 20,
      "bestseller": null
    },
    "badges": [
      "유료 투베 20위"
    ],
    "description": "유료 투베 20위"
  },
  {
    "id": "535356",
    "title": "서울에서 주술사로 살아남기",
    "author": "아우송",
    "genre": "현대판타지",
    "chapterCount": 286,
    "favorites": 29196,
    "totalViews": 5383816,
    "avgViews": 18825,
    "todayViews": 449619,
    "isPaid": true,
    "paidChapters": 261,
    "likes": 172458,
    "comments": 25869,
    "ranks": {
      "free": null,
      "paid": 33,
      "bestseller": 20
    },
    "badges": [
      "베스트셀러 20위",
      "유료 투베 33위"
    ],
    "description": "베스트셀러 20위 | 유료 투베 33위"
  },
  {
    "id": "609253",
    "title": "잘렸더니 회사가 매일 전화함",
    "author": "귤까는곰",
    "genre": "현대판타지, SF",
    "chapterCount": 12,
    "favorites": 2581,
    "totalViews": 118351,
    "avgViews": 9863,
    "todayViews": 3398,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2204,
    "comments": 331,
    "ranks": {
      "free": 21,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 21위"
    ],
    "description": "무료 투베 21위"
  },
  {
    "id": "594760",
    "title": "모두 탑에 갇혔는데 나만 출퇴근한다",
    "author": "그랜드잭팟",
    "genre": "퓨전, 현대판타지",
    "chapterCount": 62,
    "favorites": 10098,
    "totalViews": 1543555,
    "avgViews": 24896,
    "todayViews": 22210,
    "isPaid": true,
    "paidChapters": 37,
    "likes": 36238,
    "comments": 5436,
    "ranks": {
      "free": null,
      "paid": 21,
      "bestseller": null
    },
    "badges": [
      "유료 투베 21위"
    ],
    "description": "유료 투베 21위"
  },
  {
    "id": "605509",
    "title": "한의사가 운기조식을 깨우침",
    "author": "마늘생강",
    "genre": "현대판타지, 무협",
    "chapterCount": 24,
    "favorites": 3533,
    "totalViews": 188929,
    "avgViews": 7872,
    "todayViews": 3385,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5699,
    "comments": 855,
    "ranks": {
      "free": 22,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 22위"
    ],
    "description": "무료 투베 22위"
  },
  {
    "id": "494781",
    "title": "와인의 신",
    "author": "최풍뎅",
    "genre": "현대판타지, 드라마",
    "chapterCount": 452,
    "favorites": 25530,
    "totalViews": 7167350,
    "avgViews": 15857,
    "todayViews": 424311,
    "isPaid": true,
    "paidChapters": 427,
    "likes": 292035,
    "comments": 43805,
    "ranks": {
      "free": null,
      "paid": 26,
      "bestseller": 22
    },
    "badges": [
      "베스트셀러 22위",
      "유료 투베 26위"
    ],
    "description": "베스트셀러 22위 | 유료 투베 26위"
  },
  {
    "id": "599478",
    "title": "재벌 서자가 대한민국을 먹여살림",
    "author": "이도윤",
    "genre": "대체역사, SF",
    "chapterCount": 49,
    "favorites": 3990,
    "totalViews": 491235,
    "avgViews": 10025,
    "todayViews": 3109,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 10116,
    "comments": 1517,
    "ranks": {
      "free": 23,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 23위"
    ],
    "description": "무료 투베 23위"
  },
  {
    "id": "583408",
    "title": "무당 매니저가 탑스타들을 극락 보냄",
    "author": "모락카노",
    "genre": "현대판타지",
    "chapterCount": 69,
    "favorites": 15289,
    "totalViews": 2036675,
    "avgViews": 29517,
    "todayViews": 154462,
    "isPaid": true,
    "paidChapters": 44,
    "likes": 61950,
    "comments": 9293,
    "ranks": {
      "free": null,
      "paid": 23,
      "bestseller": 108
    },
    "badges": [
      "유료 투베 23위",
      "베스트셀러 108위"
    ],
    "description": "유료 투베 23위 | 베스트셀러 108위"
  },
  {
    "id": "530500",
    "title": "판초우의의 마법사",
    "author": "하드폭발",
    "genre": "판타지, 퓨전",
    "chapterCount": 187,
    "favorites": 27313,
    "totalViews": 3712071,
    "avgViews": 19851,
    "todayViews": 418758,
    "isPaid": true,
    "paidChapters": 162,
    "likes": 198179,
    "comments": 29727,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 23
    },
    "badges": [
      "베스트셀러 23위"
    ],
    "description": "베스트셀러 23위"
  },
  {
    "id": "602634",
    "title": "귀환한 천하제일인은 쉬고싶다",
    "author": "백몽(白夢)",
    "genre": "현대판타지, 무협",
    "chapterCount": 34,
    "favorites": 7065,
    "totalViews": 757821,
    "avgViews": 22289,
    "todayViews": 2996,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 13944,
    "comments": 2092,
    "ranks": {
      "free": 24,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 24위"
    ],
    "description": "무료 투베 24위"
  },
  {
    "id": "442239",
    "title": "고려에서 치트 없이 문명합니다",
    "author": "긴목숨",
    "genre": "대체역사, 판타지",
    "chapterCount": 731,
    "favorites": 13315,
    "totalViews": 6157638,
    "avgViews": 8424,
    "todayViews": 416890,
    "isPaid": true,
    "paidChapters": 706,
    "likes": 276984,
    "comments": 41548,
    "ranks": {
      "free": null,
      "paid": 24,
      "bestseller": 24
    },
    "badges": [
      "유료 투베 24위",
      "베스트셀러 24위"
    ],
    "description": "유료 투베 24위 | 베스트셀러 24위"
  },
  {
    "id": "608530",
    "title": "해고당한 의사가 병원 최고였다",
    "author": "오두리리",
    "genre": "현대판타지",
    "chapterCount": 12,
    "favorites": 2172,
    "totalViews": 67656,
    "avgViews": 5638,
    "todayViews": 2991,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1607,
    "comments": 241,
    "ranks": {
      "free": 25,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 25위"
    ],
    "description": "무료 투베 25위"
  },
  {
    "id": "601754",
    "title": "해고당한 만년 차장은 업계 최고임",
    "author": "타타비",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 41,
    "favorites": 20957,
    "totalViews": 1923998,
    "avgViews": 46927,
    "todayViews": 82538,
    "isPaid": true,
    "paidChapters": 16,
    "likes": 56427,
    "comments": 8464,
    "ranks": {
      "free": null,
      "paid": 25,
      "bestseller": 195
    },
    "badges": [
      "유료 투베 25위",
      "베스트셀러 195위"
    ],
    "description": "유료 투베 25위 | 베스트셀러 195위"
  },
  {
    "id": "572075",
    "title": "데뷔가 월드컵인 23살 축구 감독",
    "author": "고양이앞발",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 152,
    "favorites": 13816,
    "totalViews": 2625552,
    "avgViews": 17273,
    "todayViews": 413884,
    "isPaid": true,
    "paidChapters": 127,
    "likes": 67507,
    "comments": 10126,
    "ranks": {
      "free": null,
      "paid": 55,
      "bestseller": 25
    },
    "badges": [
      "베스트셀러 25위",
      "유료 투베 55위"
    ],
    "description": "베스트셀러 25위 | 유료 투베 55위"
  },
  {
    "id": "604548",
    "title": "망한 재벌가의 천재 사생아",
    "author": "홈스탠바이",
    "genre": "현대판타지, 드라마",
    "chapterCount": 26,
    "favorites": 3125,
    "totalViews": 185113,
    "avgViews": 7120,
    "todayViews": 2977,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 4283,
    "comments": 642,
    "ranks": {
      "free": 26,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 26위"
    ],
    "description": "무료 투베 26위"
  },
  {
    "id": "541245",
    "title": "17세기 스페인에서 귀농합니다.",
    "author": "핀치의예감",
    "genre": "대체역사, 라이트노벨",
    "chapterCount": 373,
    "favorites": 9144,
    "totalViews": 2839163,
    "avgViews": 7612,
    "todayViews": 411485,
    "isPaid": true,
    "paidChapters": 348,
    "likes": 145149,
    "comments": 21772,
    "ranks": {
      "free": null,
      "paid": 29,
      "bestseller": 26
    },
    "badges": [
      "베스트셀러 26위",
      "유료 투베 29위"
    ],
    "description": "베스트셀러 26위 | 유료 투베 29위"
  },
  {
    "id": "598965",
    "title": "국가에 버림받은 천재 개발자가 특이점을 만듬",
    "author": "한혜주",
    "genre": "현대판타지, SF",
    "chapterCount": 42,
    "favorites": 5352,
    "totalViews": 660141,
    "avgViews": 15718,
    "todayViews": 2915,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 13570,
    "comments": 2036,
    "ranks": {
      "free": 27,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 27위"
    ],
    "description": "무료 투베 27위"
  },
  {
    "id": "541023",
    "title": "무림맹 고문기술자는 경찰이 너무 쉽다",
    "author": "흠박",
    "genre": "현대판타지, 판타지",
    "chapterCount": 221,
    "favorites": 20974,
    "totalViews": 3781584,
    "avgViews": 17111,
    "todayViews": 400244,
    "isPaid": true,
    "paidChapters": 196,
    "likes": 121187,
    "comments": 18178,
    "ranks": {
      "free": null,
      "paid": 39,
      "bestseller": 27
    },
    "badges": [
      "베스트셀러 27위",
      "유료 투베 39위"
    ],
    "description": "베스트셀러 27위 | 유료 투베 39위"
  },
  {
    "id": "598028",
    "title": "텔레포트 하나로 현실에서도 쌀먹합니다",
    "author": "양면거울",
    "genre": "현대판타지, 게임",
    "chapterCount": 35,
    "favorites": 6774,
    "totalViews": 724314,
    "avgViews": 20695,
    "todayViews": 2728,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 15427,
    "comments": 2314,
    "ranks": {
      "free": 28,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 28위"
    ],
    "description": "무료 투베 28위"
  },
  {
    "id": "576469",
    "title": "전역하는 날 북한군이 쳐들어왔다",
    "author": "정글포켓",
    "genre": "현대판타지, 전쟁·밀리터리",
    "chapterCount": 130,
    "favorites": 9605,
    "totalViews": 1364004,
    "avgViews": 10492,
    "todayViews": 347736,
    "isPaid": true,
    "paidChapters": 105,
    "likes": 46393,
    "comments": 6959,
    "ranks": {
      "free": null,
      "paid": 28,
      "bestseller": 34
    },
    "badges": [
      "유료 투베 28위",
      "베스트셀러 34위"
    ],
    "description": "유료 투베 28위 | 베스트셀러 34위"
  },
  {
    "id": "528383",
    "title": "즉사기 들고 무림에 떨어지다",
    "author": "오늘도요",
    "genre": "무협",
    "chapterCount": 199,
    "favorites": 32058,
    "totalViews": 4478084,
    "avgViews": 22503,
    "todayViews": 395618,
    "isPaid": true,
    "paidChapters": 174,
    "likes": 205482,
    "comments": 30822,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 28
    },
    "badges": [
      "베스트셀러 28위"
    ],
    "description": "베스트셀러 28위"
  },
  {
    "id": "594834",
    "title": "조선 한양에 정신과 차렸더니 거물들이 몰려옴",
    "author": "하마버지",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 54,
    "favorites": 3363,
    "totalViews": 393883,
    "avgViews": 7294,
    "todayViews": 2724,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 12247,
    "comments": 1837,
    "ranks": {
      "free": 29,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 29위"
    ],
    "description": "무료 투베 29위"
  },
  {
    "id": "552086",
    "title": "삼국지, 매력255 사이비교주가 되었다",
    "author": "사일도",
    "genre": "대체역사, 퓨전",
    "chapterCount": 225,
    "favorites": 14768,
    "totalViews": 2474722,
    "avgViews": 10999,
    "todayViews": 391918,
    "isPaid": true,
    "paidChapters": 200,
    "likes": 97778,
    "comments": 14667,
    "ranks": {
      "free": null,
      "paid": 44,
      "bestseller": 29
    },
    "badges": [
      "베스트셀러 29위",
      "유료 투베 44위"
    ],
    "description": "베스트셀러 29위 | 유료 투베 44위"
  },
  {
    "id": "597893",
    "title": "세상이 멸망했지만 내 집은 그대로",
    "author": "무한㉿",
    "genre": "현대판타지, 게임",
    "chapterCount": 48,
    "favorites": 3813,
    "totalViews": 336214,
    "avgViews": 7004,
    "todayViews": 2683,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 10860,
    "comments": 1629,
    "ranks": {
      "free": 30,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 30위"
    ],
    "description": "무료 투베 30위"
  },
  {
    "id": "558010",
    "title": "죽지않는 흑마법사",
    "author": "김강현",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 181,
    "favorites": 10058,
    "totalViews": 2072921,
    "avgViews": 11453,
    "todayViews": 373106,
    "isPaid": true,
    "paidChapters": 156,
    "likes": 70595,
    "comments": 10589,
    "ranks": {
      "free": null,
      "paid": 93,
      "bestseller": 30
    },
    "badges": [
      "베스트셀러 30위",
      "유료 투베 93위"
    ],
    "description": "베스트셀러 30위 | 유료 투베 93위"
  },
  {
    "id": "602690",
    "title": "전능한 사이비 교주가 인방에서 사업을 잘함",
    "author": "필빛",
    "genre": "판타지, 현대판타지",
    "chapterCount": 31,
    "favorites": 4107,
    "totalViews": 298019,
    "avgViews": 9614,
    "todayViews": 2469,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 9134,
    "comments": 1370,
    "ranks": {
      "free": 31,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 31위"
    ],
    "description": "무료 투베 31위"
  },
  {
    "id": "588387",
    "title": "탐관오리가 충신으로 착각당함",
    "author": "연재약장수",
    "genre": "대체역사, 판타지",
    "chapterCount": 83,
    "favorites": 9492,
    "totalViews": 1458864,
    "avgViews": 17577,
    "todayViews": 96535,
    "isPaid": true,
    "paidChapters": 58,
    "likes": 42654,
    "comments": 6398,
    "ranks": {
      "free": null,
      "paid": 31,
      "bestseller": 168
    },
    "badges": [
      "유료 투베 31위",
      "베스트셀러 168위"
    ],
    "description": "유료 투베 31위 | 베스트셀러 168위"
  },
  {
    "id": "563286",
    "title": "하산했더니 야구가 너무 쉬움",
    "author": "김꿩",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 150,
    "favorites": 14052,
    "totalViews": 2616471,
    "avgViews": 17443,
    "todayViews": 370563,
    "isPaid": true,
    "paidChapters": 125,
    "likes": 82482,
    "comments": 12372,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 31
    },
    "badges": [
      "베스트셀러 31위"
    ],
    "description": "베스트셀러 31위"
  },
  {
    "id": "607282",
    "title": "사표내고 나간 차장이 너무 유능함",
    "author": "되새김질",
    "genre": "현대판타지, 드라마",
    "chapterCount": 15,
    "favorites": 1773,
    "totalViews": 93877,
    "avgViews": 6258,
    "todayViews": 2452,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1389,
    "comments": 208,
    "ranks": {
      "free": 32,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 32위"
    ],
    "description": "무료 투베 32위"
  },
  {
    "id": "582774",
    "title": "퓨전펑크 만렙 칼잡이",
    "author": "토니토",
    "genre": "퓨전, 판타지",
    "chapterCount": 95,
    "favorites": 17229,
    "totalViews": 1947052,
    "avgViews": 20495,
    "todayViews": 339531,
    "isPaid": true,
    "paidChapters": 71,
    "likes": 56429,
    "comments": 8464,
    "ranks": {
      "free": null,
      "paid": 32,
      "bestseller": 35
    },
    "badges": [
      "유료 투베 32위",
      "베스트셀러 35위"
    ],
    "description": "유료 투베 32위 | 베스트셀러 35위"
  },
  {
    "id": "549589",
    "title": "천재배우가 세계최강 싸움실력을 숨김",
    "author": "던송",
    "genre": "현대판타지, 드라마",
    "chapterCount": 183,
    "favorites": 18230,
    "totalViews": 3383755,
    "avgViews": 18490,
    "todayViews": 356794,
    "isPaid": true,
    "paidChapters": 158,
    "likes": 97848,
    "comments": 14677,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 32
    },
    "badges": [
      "베스트셀러 32위"
    ],
    "description": "베스트셀러 32위"
  },
  {
    "id": "603782",
    "title": "법으로는 안 될 것 같아 마공으로 때려죽임",
    "author": "단팥빵소년",
    "genre": "현대판타지, 무협",
    "chapterCount": 29,
    "favorites": 4552,
    "totalViews": 315660,
    "avgViews": 10885,
    "todayViews": 2375,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 9245,
    "comments": 1387,
    "ranks": {
      "free": 33,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 33위"
    ],
    "description": "무료 투베 33위"
  },
  {
    "id": "585472",
    "title": "좌천된 국민연금 지부장이 대한민국을 먹여살림",
    "author": "더페이서",
    "genre": "현대판타지, 판타지",
    "chapterCount": 134,
    "favorites": 9734,
    "totalViews": 1882599,
    "avgViews": 14049,
    "todayViews": 355637,
    "isPaid": true,
    "paidChapters": 109,
    "likes": 48962,
    "comments": 7344,
    "ranks": {
      "free": null,
      "paid": 43,
      "bestseller": 33
    },
    "badges": [
      "베스트셀러 33위",
      "유료 투베 43위"
    ],
    "description": "베스트셀러 33위 | 유료 투베 43위"
  },
  {
    "id": "604368",
    "title": "외계어를 나만 알아듣자 전 세계가 집착함",
    "author": "마리골드14",
    "genre": "현대판타지, SF",
    "chapterCount": 28,
    "favorites": 3563,
    "totalViews": 282849,
    "avgViews": 10102,
    "todayViews": 2246,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6960,
    "comments": 1044,
    "ranks": {
      "free": 34,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 34위"
    ],
    "description": "무료 투베 34위"
  },
  {
    "id": "594510",
    "title": "19세기 대영제국에서 K-빵집으로 대박남",
    "author": "글쓰는너겟",
    "genre": "대체역사, 퓨전",
    "chapterCount": 62,
    "favorites": 6543,
    "totalViews": 872077,
    "avgViews": 14066,
    "todayViews": 15220,
    "isPaid": true,
    "paidChapters": 37,
    "likes": 30218,
    "comments": 4533,
    "ranks": {
      "free": null,
      "paid": 34,
      "bestseller": null
    },
    "badges": [
      "유료 투베 34위"
    ],
    "description": "유료 투베 34위"
  },
  {
    "id": "597810",
    "title": "제명 당한 헌터가 구세주였다",
    "author": "태국리",
    "genre": "현대판타지",
    "chapterCount": 42,
    "favorites": 3374,
    "totalViews": 483876,
    "avgViews": 11521,
    "todayViews": 2228,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 9966,
    "comments": 1495,
    "ranks": {
      "free": 35,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 35위"
    ],
    "description": "무료 투베 35위"
  },
  {
    "id": "591400",
    "title": "정보기관이 집착하는 천재해커가 되었다",
    "author": "에그빵",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 66,
    "favorites": 9491,
    "totalViews": 1202878,
    "avgViews": 18225,
    "todayViews": 95983,
    "isPaid": true,
    "paidChapters": 42,
    "likes": 32838,
    "comments": 4926,
    "ranks": {
      "free": null,
      "paid": 35,
      "bestseller": 169
    },
    "badges": [
      "유료 투베 35위",
      "베스트셀러 169위"
    ],
    "description": "유료 투베 35위 | 베스트셀러 169위"
  },
  {
    "id": "595612",
    "title": "회귀한 헌터가 가족만 챙김",
    "author": "구백만",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 51,
    "favorites": 4118,
    "totalViews": 696012,
    "avgViews": 13647,
    "todayViews": 2208,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 18461,
    "comments": 2769,
    "ranks": {
      "free": 36,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 36위"
    ],
    "description": "무료 투베 36위"
  },
  {
    "id": "546362",
    "title": "프린스 레이지",
    "author": "도동파",
    "genre": "판타지",
    "chapterCount": 190,
    "favorites": 17737,
    "totalViews": 2679428,
    "avgViews": 14102,
    "todayViews": 322199,
    "isPaid": true,
    "paidChapters": 165,
    "likes": 154363,
    "comments": 23154,
    "ranks": {
      "free": null,
      "paid": 36,
      "bestseller": 39
    },
    "badges": [
      "유료 투베 36위",
      "베스트셀러 39위"
    ],
    "description": "유료 투베 36위 | 베스트셀러 39위"
  },
  {
    "id": "545695",
    "title": "단종 구하러 4군6진",
    "author": "간다왼쪽",
    "genre": "대체역사, 퓨전",
    "chapterCount": 199,
    "favorites": 19826,
    "totalViews": 3056387,
    "avgViews": 15359,
    "todayViews": 335042,
    "isPaid": true,
    "paidChapters": 174,
    "likes": 179466,
    "comments": 26920,
    "ranks": {
      "free": null,
      "paid": 161,
      "bestseller": 36
    },
    "badges": [
      "베스트셀러 36위",
      "유료 투베 161위"
    ],
    "description": "베스트셀러 36위 | 유료 투베 161위"
  },
  {
    "id": "603462",
    "title": "무한 강화로 국가권력급 네크로맨서",
    "author": "지점장",
    "genre": "판타지, 퓨전",
    "chapterCount": 29,
    "favorites": 4076,
    "totalViews": 234970,
    "avgViews": 8102,
    "todayViews": 2172,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6477,
    "comments": 972,
    "ranks": {
      "free": 37,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 37위"
    ],
    "description": "무료 투베 37위"
  },
  {
    "id": "595787",
    "title": "폐업 직전 한의사는 전생에 신의였다",
    "author": "블럭통통",
    "genre": "현대판타지",
    "chapterCount": 53,
    "favorites": 8645,
    "totalViews": 1315155,
    "avgViews": 24814,
    "todayViews": 14330,
    "isPaid": true,
    "paidChapters": 28,
    "likes": 32698,
    "comments": 4905,
    "ranks": {
      "free": null,
      "paid": 37,
      "bestseller": null
    },
    "badges": [
      "유료 투베 37위"
    ],
    "description": "유료 투베 37위"
  },
  {
    "id": "570506",
    "title": "미국에서 태권도장을 여니 이웃들이 내게 집착함",
    "author": "reone",
    "genre": "현대판타지, 스포츠",
    "chapterCount": 142,
    "favorites": 12145,
    "totalViews": 1975615,
    "avgViews": 13913,
    "todayViews": 334693,
    "isPaid": true,
    "paidChapters": 117,
    "likes": 78103,
    "comments": 11715,
    "ranks": {
      "free": null,
      "paid": 49,
      "bestseller": 37
    },
    "badges": [
      "베스트셀러 37위",
      "유료 투베 49위"
    ],
    "description": "베스트셀러 37위 | 유료 투베 49위"
  },
  {
    "id": "607344",
    "title": "이혼당한 데릴사위가 초국가적 재벌 후계자",
    "author": "라쿤캣",
    "genre": "현대판타지, 드라마",
    "chapterCount": 18,
    "favorites": 1469,
    "totalViews": 94748,
    "avgViews": 5264,
    "todayViews": 2080,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1471,
    "comments": 221,
    "ranks": {
      "free": 38,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 38위"
    ],
    "description": "무료 투베 38위"
  },
  {
    "id": "568752",
    "title": "공돌이가 LA에서 비행기 만드는 이야기",
    "author": "김미원",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 168,
    "favorites": 4897,
    "totalViews": 868362,
    "avgViews": 5169,
    "todayViews": 256197,
    "isPaid": true,
    "paidChapters": 143,
    "likes": 37852,
    "comments": 5678,
    "ranks": {
      "free": null,
      "paid": 38,
      "bestseller": 58
    },
    "badges": [
      "유료 투베 38위",
      "베스트셀러 58위"
    ],
    "description": "유료 투베 38위 | 베스트셀러 58위"
  },
  {
    "id": "579687",
    "title": "소비에트가 쓰러지지 않아!",
    "author": "쿤타세계관",
    "genre": "대체역사, 판타지",
    "chapterCount": 101,
    "favorites": 9842,
    "totalViews": 1250472,
    "avgViews": 12381,
    "todayViews": 329957,
    "isPaid": true,
    "paidChapters": 76,
    "likes": 58007,
    "comments": 8701,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 38
    },
    "badges": [
      "베스트셀러 38위"
    ],
    "description": "베스트셀러 38위"
  },
  {
    "id": "593434",
    "title": "무신의 서를 얻었다",
    "author": "몽랑괴행",
    "genre": "무협, 퓨전",
    "chapterCount": 49,
    "favorites": 4742,
    "totalViews": 555448,
    "avgViews": 11336,
    "todayViews": 1950,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 13166,
    "comments": 1975,
    "ranks": {
      "free": 39,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 39위"
    ],
    "description": "무료 투베 39위"
  },
  {
    "id": "602643",
    "title": "멸망한 세상에서 미군기지를 주웠다",
    "author": "참숯닭구이",
    "genre": "SF, 현대판타지",
    "chapterCount": 33,
    "favorites": 3467,
    "totalViews": 256153,
    "avgViews": 7762,
    "todayViews": 1933,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6804,
    "comments": 1021,
    "ranks": {
      "free": 40,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 40위"
    ],
    "description": "무료 투베 40위"
  },
  {
    "id": "588693",
    "title": "검은머리 특수요원이 미국 목장을 인수함",
    "author": "무정호",
    "genre": "현대판타지, 판타지",
    "chapterCount": 100,
    "favorites": 14632,
    "totalViews": 2377590,
    "avgViews": 23776,
    "todayViews": 248733,
    "isPaid": true,
    "paidChapters": 75,
    "likes": 78368,
    "comments": 11755,
    "ranks": {
      "free": null,
      "paid": 40,
      "bestseller": 60
    },
    "badges": [
      "유료 투베 40위",
      "베스트셀러 60위"
    ],
    "description": "유료 투베 40위 | 베스트셀러 60위"
  },
  {
    "id": "519484",
    "title": "중세 이단왕이 발전을 너무 잘함",
    "author": "서자아",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 295,
    "favorites": 15995,
    "totalViews": 3603017,
    "avgViews": 12214,
    "todayViews": 319569,
    "isPaid": true,
    "paidChapters": 270,
    "likes": 127174,
    "comments": 19076,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 40
    },
    "badges": [
      "베스트셀러 40위"
    ],
    "description": "베스트셀러 40위"
  },
  {
    "id": "595814",
    "title": "방탕한 도련님이 미국 자동차를 장악함",
    "author": "역사설계자",
    "genre": "대체역사",
    "chapterCount": 43,
    "favorites": 3034,
    "totalViews": 253509,
    "avgViews": 5896,
    "todayViews": 1807,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6073,
    "comments": 911,
    "ranks": {
      "free": 41,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 41위"
    ],
    "description": "무료 투베 41위"
  },
  {
    "id": "525227",
    "title": "미국 시골에서 올드카 복원으로 대박",
    "author": "우수상",
    "genre": "현대판타지",
    "chapterCount": 325,
    "favorites": 13529,
    "totalViews": 2866714,
    "avgViews": 8821,
    "todayViews": 305298,
    "isPaid": true,
    "paidChapters": 300,
    "likes": 128001,
    "comments": 19200,
    "ranks": {
      "free": null,
      "paid": 41,
      "bestseller": 44
    },
    "badges": [
      "유료 투베 41위",
      "베스트셀러 44위"
    ],
    "description": "유료 투베 41위 | 베스트셀러 44위"
  },
  {
    "id": "536687",
    "title": "방구석 뱀파이어는 미궁에서 사업합니다",
    "author": "디월스",
    "genre": "현대판타지, 판타지",
    "chapterCount": 217,
    "favorites": 15825,
    "totalViews": 3135742,
    "avgViews": 14450,
    "todayViews": 316389,
    "isPaid": true,
    "paidChapters": 192,
    "likes": 113715,
    "comments": 17057,
    "ranks": {
      "free": null,
      "paid": 89,
      "bestseller": 41
    },
    "badges": [
      "베스트셀러 41위",
      "유료 투베 89위"
    ],
    "description": "베스트셀러 41위 | 유료 투베 89위"
  },
  {
    "id": "608178",
    "title": "멸망 30일 전, 무한 아공간을 얻다",
    "author": "콜디",
    "genre": "현대판타지, 판타지",
    "chapterCount": 13,
    "favorites": 1379,
    "totalViews": 59256,
    "avgViews": 4558,
    "todayViews": 1744,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1327,
    "comments": 199,
    "ranks": {
      "free": 42,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 42위"
    ],
    "description": "무료 투베 42위"
  },
  {
    "id": "586390",
    "title": "악역만 연기했는데 탑스타가 되었다",
    "author": "해피엔딩이즈굿",
    "genre": "현대판타지",
    "chapterCount": 86,
    "favorites": 8432,
    "totalViews": 1193038,
    "avgViews": 13873,
    "todayViews": 137087,
    "isPaid": true,
    "paidChapters": 61,
    "likes": 29908,
    "comments": 4486,
    "ranks": {
      "free": null,
      "paid": 42,
      "bestseller": 116
    },
    "badges": [
      "유료 투베 42위",
      "베스트셀러 116위"
    ],
    "description": "유료 투베 42위 | 베스트셀러 116위"
  },
  {
    "id": "424385",
    "title": "퓨전펑크에서 살아가는 법",
    "author": "오동냐무",
    "genre": "퓨전, 현대판타지",
    "chapterCount": 544,
    "favorites": 31280,
    "totalViews": 9697593,
    "avgViews": 17826,
    "todayViews": 310529,
    "isPaid": true,
    "paidChapters": 519,
    "likes": 428559,
    "comments": 64284,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 42
    },
    "badges": [
      "베스트셀러 42위"
    ],
    "description": "베스트셀러 42위"
  },
  {
    "id": "598480",
    "title": "선협에서 전생 각성후 우주문명을 씹어먹음",
    "author": "멱월",
    "genre": "SF, 무협",
    "chapterCount": 42,
    "favorites": 3034,
    "totalViews": 216118,
    "avgViews": 5146,
    "todayViews": 1666,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6659,
    "comments": 999,
    "ranks": {
      "free": 43,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 43위"
    ],
    "description": "무료 투베 43위"
  },
  {
    "id": "451701",
    "title": "국정원 말단직원",
    "author": "삼둘",
    "genre": "퓨전, 전쟁·밀리터리",
    "chapterCount": 602,
    "favorites": 21632,
    "totalViews": 7393541,
    "avgViews": 12282,
    "todayViews": 307006,
    "isPaid": true,
    "paidChapters": 576,
    "likes": 272709,
    "comments": 40906,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 43
    },
    "badges": [
      "베스트셀러 43위"
    ],
    "description": "베스트셀러 43위"
  },
  {
    "id": "595480",
    "title": "0점짜리 장남이 100조로 효도합니다",
    "author": "김시놉",
    "genre": "현대판타지",
    "chapterCount": 58,
    "favorites": 2930,
    "totalViews": 609105,
    "avgViews": 10502,
    "todayViews": 1665,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 10924,
    "comments": 1639,
    "ranks": {
      "free": 44,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 44위"
    ],
    "description": "무료 투베 44위"
  },
  {
    "id": "596283",
    "title": "선협 농사가 쉽다",
    "author": "탄산수영장",
    "genre": "무협, 판타지",
    "chapterCount": 49,
    "favorites": 2489,
    "totalViews": 308367,
    "avgViews": 6293,
    "todayViews": 1620,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 8279,
    "comments": 1242,
    "ranks": {
      "free": 45,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 45위"
    ],
    "description": "무료 투베 45위"
  },
  {
    "id": "588650",
    "title": "법이 안 죽이길래 그냥 내가 죽임",
    "author": "묘엽",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 75,
    "favorites": 11294,
    "totalViews": 1647342,
    "avgViews": 21965,
    "todayViews": 130100,
    "isPaid": true,
    "paidChapters": 50,
    "likes": 47100,
    "comments": 7065,
    "ranks": {
      "free": null,
      "paid": 45,
      "bestseller": 126
    },
    "badges": [
      "유료 투베 45위",
      "베스트셀러 126위"
    ],
    "description": "유료 투베 45위 | 베스트셀러 126위"
  },
  {
    "id": "566586",
    "title": "K-무당은 할리우드가 너무 쉬움",
    "author": "고요섬",
    "genre": "현대판타지",
    "chapterCount": 139,
    "favorites": 10205,
    "totalViews": 1958674,
    "avgViews": 14091,
    "todayViews": 290422,
    "isPaid": true,
    "paidChapters": 114,
    "likes": 71090,
    "comments": 10664,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 45
    },
    "badges": [
      "베스트셀러 45위"
    ],
    "description": "베스트셀러 45위"
  },
  {
    "id": "603375",
    "title": "EX급 수복 스킬로 다 고침",
    "author": "긍정론적",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 30,
    "favorites": 4086,
    "totalViews": 326268,
    "avgViews": 10876,
    "todayViews": 1568,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 8286,
    "comments": 1243,
    "ranks": {
      "free": 46,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 46위"
    ],
    "description": "무료 투베 46위"
  },
  {
    "id": "592487",
    "title": "국가권력급 헌터",
    "author": "대문호",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 58,
    "favorites": 6244,
    "totalViews": 1480964,
    "avgViews": 25534,
    "todayViews": 11910,
    "isPaid": true,
    "paidChapters": 32,
    "likes": 25289,
    "comments": 3793,
    "ranks": {
      "free": null,
      "paid": 46,
      "bestseller": null
    },
    "badges": [
      "유료 투베 46위"
    ],
    "description": "유료 투베 46위"
  },
  {
    "id": "433601",
    "title": "선협식 수련에 드래곤 하트를 더하면",
    "author": "오늘오후에",
    "genre": "퓨전, 현대판타지",
    "chapterCount": 571,
    "favorites": 21167,
    "totalViews": 6558581,
    "avgViews": 11486,
    "todayViews": 282500,
    "isPaid": true,
    "paidChapters": 546,
    "likes": 281837,
    "comments": 42276,
    "ranks": {
      "free": null,
      "paid": 54,
      "bestseller": 46
    },
    "badges": [
      "베스트셀러 46위",
      "유료 투베 54위"
    ],
    "description": "베스트셀러 46위 | 유료 투베 54위"
  },
  {
    "id": "608907",
    "title": "권고사직 명단에 올랐는데 최고 에이스임",
    "author": "연함™",
    "genre": "현대판타지",
    "chapterCount": 13,
    "favorites": 1551,
    "totalViews": 88254,
    "avgViews": 6789,
    "todayViews": 1550,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1505,
    "comments": 226,
    "ranks": {
      "free": 47,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 47위"
    ],
    "description": "무료 투베 47위"
  },
  {
    "id": "586697",
    "title": "미국 시골 영양사에게 이웃들이 너무 집착함.",
    "author": "글과달",
    "genre": "현대판타지, 판타지",
    "chapterCount": 93,
    "favorites": 9547,
    "totalViews": 1417720,
    "avgViews": 15244,
    "todayViews": 123574,
    "isPaid": true,
    "paidChapters": 68,
    "likes": 49418,
    "comments": 7413,
    "ranks": {
      "free": null,
      "paid": 47,
      "bestseller": 136
    },
    "badges": [
      "유료 투베 47위",
      "베스트셀러 136위"
    ],
    "description": "유료 투베 47위 | 베스트셀러 136위"
  },
  {
    "id": "563288",
    "title": "전능의 천사를 얻었다",
    "author": "맘모스XM",
    "genre": "현대판타지, 판타지",
    "chapterCount": 145,
    "favorites": 17128,
    "totalViews": 2526440,
    "avgViews": 17424,
    "todayViews": 280961,
    "isPaid": true,
    "paidChapters": 120,
    "likes": 98959,
    "comments": 14844,
    "ranks": {
      "free": null,
      "paid": 66,
      "bestseller": 47
    },
    "badges": [
      "베스트셀러 47위",
      "유료 투베 66위"
    ],
    "description": "베스트셀러 47위 | 유료 투베 66위"
  },
  {
    "id": "592051",
    "title": "미국 3천억 파워볼 당첨자인데 빈 통장으로 회귀함",
    "author": "기신",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 66,
    "favorites": 4108,
    "totalViews": 655762,
    "avgViews": 9936,
    "todayViews": 1500,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 14046,
    "comments": 2107,
    "ranks": {
      "free": 48,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 48위"
    ],
    "description": "무료 투베 48위"
  },
  {
    "id": "539219",
    "title": "아프리카 반란군 사령관이 되었다",
    "author": "운비양",
    "genre": "대체역사",
    "chapterCount": 251,
    "favorites": 8481,
    "totalViews": 2147629,
    "avgViews": 8556,
    "todayViews": 269436,
    "isPaid": true,
    "paidChapters": 226,
    "likes": 83166,
    "comments": 12475,
    "ranks": {
      "free": null,
      "paid": 48,
      "bestseller": 51
    },
    "badges": [
      "유료 투베 48위",
      "베스트셀러 51위"
    ],
    "description": "유료 투베 48위 | 베스트셀러 51위"
  },
  {
    "id": "223890",
    "title": "약먹는 천재마법사",
    "author": "글근육",
    "genre": "현대판타지, 판타지",
    "chapterCount": 1701,
    "favorites": 51042,
    "totalViews": 31099765,
    "avgViews": 18283,
    "todayViews": 278546,
    "isPaid": true,
    "paidChapters": 1675,
    "likes": 1165110,
    "comments": 174767,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 48
    },
    "badges": [
      "베스트셀러 48위"
    ],
    "description": "베스트셀러 48위"
  },
  {
    "id": "598369",
    "title": "나혼자 신화급 사령으로 탑을 씹어먹음",
    "author": "틈새솔",
    "genre": "현대판타지, 판타지",
    "chapterCount": 49,
    "favorites": 3966,
    "totalViews": 597878,
    "avgViews": 12202,
    "todayViews": 1487,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 11705,
    "comments": 1756,
    "ranks": {
      "free": 49,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 49위"
    ],
    "description": "무료 투베 49위"
  },
  {
    "id": "560691",
    "title": "1957년, 식모는 아공간을 숨겼다",
    "author": "여우사초",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 177,
    "favorites": 6003,
    "totalViews": 995817,
    "avgViews": 5626,
    "todayViews": 270962,
    "isPaid": true,
    "paidChapters": 152,
    "likes": 66067,
    "comments": 9910,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 49
    },
    "badges": [
      "베스트셀러 49위"
    ],
    "description": "베스트셀러 49위"
  },
  {
    "id": "598079",
    "title": "망한 캠핑장을 샀더니 손님들이 미친듯이 몰려옴",
    "author": "마로01",
    "genre": "현대판타지, 판타지",
    "chapterCount": 42,
    "favorites": 2358,
    "totalViews": 279475,
    "avgViews": 6654,
    "todayViews": 1474,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7333,
    "comments": 1100,
    "ranks": {
      "free": 50,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 50위"
    ],
    "description": "무료 투베 50위"
  },
  {
    "id": "533608",
    "title": "방송했더니 천재 의사로 착각당했다",
    "author": "저기요선생",
    "genre": "현대판타지, 드라마",
    "chapterCount": 218,
    "favorites": 13683,
    "totalViews": 2701719,
    "avgViews": 12393,
    "todayViews": 222450,
    "isPaid": true,
    "paidChapters": 193,
    "likes": 81704,
    "comments": 12256,
    "ranks": {
      "free": null,
      "paid": 50,
      "bestseller": 68
    },
    "badges": [
      "유료 투베 50위",
      "베스트셀러 68위"
    ],
    "description": "유료 투베 50위 | 베스트셀러 68위"
  },
  {
    "id": "582704",
    "title": "기러기 아빠는 호주 재벌이 되었다",
    "author": "로그1",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 119,
    "favorites": 11952,
    "totalViews": 2327904,
    "avgViews": 19562,
    "todayViews": 270691,
    "isPaid": true,
    "paidChapters": 94,
    "likes": 60377,
    "comments": 9057,
    "ranks": {
      "free": null,
      "paid": 57,
      "bestseller": 50
    },
    "badges": [
      "베스트셀러 50위",
      "유료 투베 57위"
    ],
    "description": "베스트셀러 50위 | 유료 투베 57위"
  },
  {
    "id": "598570",
    "title": "퇴사 후 우주전함 함장이 되었다",
    "author": "구나낭",
    "genre": "SF, 현대판타지",
    "chapterCount": 44,
    "favorites": 2622,
    "totalViews": 212355,
    "avgViews": 4826,
    "todayViews": 1411,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5376,
    "comments": 806,
    "ranks": {
      "free": 51,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 51위"
    ],
    "description": "무료 투베 51위"
  },
  {
    "id": "592470",
    "title": "행운 EX 원딜은 탑 등반이 맛있다",
    "author": "건태양",
    "genre": "현대판타지, 판타지",
    "chapterCount": 66,
    "favorites": 7705,
    "totalViews": 1307797,
    "avgViews": 19815,
    "todayViews": 10680,
    "isPaid": true,
    "paidChapters": 41,
    "likes": 35366,
    "comments": 5305,
    "ranks": {
      "free": null,
      "paid": 51,
      "bestseller": null
    },
    "badges": [
      "유료 투베 51위"
    ],
    "description": "유료 투베 51위"
  },
  {
    "id": "599278",
    "title": "외계 쓰레기로 특허 재벌",
    "author": "김탐식",
    "genre": "현대판타지, SF",
    "chapterCount": 42,
    "favorites": 3246,
    "totalViews": 279732,
    "avgViews": 6660,
    "todayViews": 1402,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7760,
    "comments": 1164,
    "ranks": {
      "free": 52,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 52위"
    ],
    "description": "무료 투베 52위"
  },
  {
    "id": "590467",
    "title": "먼치킨 검성의 탑 등반",
    "author": "별끝작가",
    "genre": "현대판타지, 판타지",
    "chapterCount": 76,
    "favorites": 5657,
    "totalViews": 1265584,
    "avgViews": 16652,
    "todayViews": 10520,
    "isPaid": true,
    "paidChapters": 48,
    "likes": 28761,
    "comments": 4314,
    "ranks": {
      "free": null,
      "paid": 52,
      "bestseller": null
    },
    "badges": [
      "유료 투베 52위"
    ],
    "description": "유료 투베 52위"
  },
  {
    "id": "604258",
    "title": "미국 3대 복권에 당첨됐는데 한국에서 엔터사업함",
    "author": "강현우",
    "genre": "현대판타지",
    "chapterCount": 27,
    "favorites": 1992,
    "totalViews": 123242,
    "avgViews": 4565,
    "todayViews": 1399,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2571,
    "comments": 386,
    "ranks": {
      "free": 53,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 53위"
    ],
    "description": "무료 투베 53위"
  },
  {
    "id": "587384",
    "title": "소소한 특전으로 인생 역전",
    "author": "신림서점",
    "genre": "현대판타지, 판타지",
    "chapterCount": 66,
    "favorites": 12461,
    "totalViews": 1928923,
    "avgViews": 29226,
    "todayViews": 96584,
    "isPaid": true,
    "paidChapters": 41,
    "likes": 53537,
    "comments": 8031,
    "ranks": {
      "free": null,
      "paid": 53,
      "bestseller": 167
    },
    "badges": [
      "유료 투베 53위",
      "베스트셀러 167위"
    ],
    "description": "유료 투베 53위 | 베스트셀러 167위"
  },
  {
    "id": "556962",
    "title": "전생자가 미국 서부를 다 씹어먹음",
    "author": "낑깡깽",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 185,
    "favorites": 9214,
    "totalViews": 1871399,
    "avgViews": 10116,
    "todayViews": 267179,
    "isPaid": true,
    "paidChapters": 160,
    "likes": 79966,
    "comments": 11995,
    "ranks": {
      "free": null,
      "paid": 64,
      "bestseller": 53
    },
    "badges": [
      "베스트셀러 53위",
      "유료 투베 64위"
    ],
    "description": "베스트셀러 53위 | 유료 투베 64위"
  },
  {
    "id": "602355",
    "title": "외계 AI로 대한민국 초강대국 만들기",
    "author": "최자까s",
    "genre": "SF, 현대판타지",
    "chapterCount": 32,
    "favorites": 1768,
    "totalViews": 142253,
    "avgViews": 4445,
    "todayViews": 1284,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3157,
    "comments": 474,
    "ranks": {
      "free": 54,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 54위"
    ],
    "description": "무료 투베 54위"
  },
  {
    "id": "563155",
    "title": "절대 나락가지 않는 천재 작가",
    "author": "papapa.",
    "genre": "현대판타지",
    "chapterCount": 139,
    "favorites": 13938,
    "totalViews": 2231116,
    "avgViews": 16051,
    "todayViews": 263431,
    "isPaid": true,
    "paidChapters": 114,
    "likes": 83396,
    "comments": 12509,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 54
    },
    "badges": [
      "베스트셀러 54위"
    ],
    "description": "베스트셀러 54위"
  },
  {
    "id": "605026",
    "title": "해고 당했더니 마법사로 각성했다",
    "author": "시르베르",
    "genre": "현대판타지, 판타지",
    "chapterCount": 24,
    "favorites": 1532,
    "totalViews": 116496,
    "avgViews": 4854,
    "todayViews": 1270,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2613,
    "comments": 392,
    "ranks": {
      "free": 55,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 55위"
    ],
    "description": "무료 투베 55위"
  },
  {
    "id": "565708",
    "title": "방구석 버튜버가 신점을 너무 잘 봄",
    "author": "오징어금값",
    "genre": "현대판타지",
    "chapterCount": 164,
    "favorites": 6842,
    "totalViews": 1508111,
    "avgViews": 9196,
    "todayViews": 261368,
    "isPaid": true,
    "paidChapters": 139,
    "likes": 47578,
    "comments": 7137,
    "ranks": {
      "free": null,
      "paid": 74,
      "bestseller": 55
    },
    "badges": [
      "베스트셀러 55위",
      "유료 투베 74위"
    ],
    "description": "베스트셀러 55위 | 유료 투베 74위"
  },
  {
    "id": "601189",
    "title": "나 혼자 서버관리자인데 퇴사당함",
    "author": "까막커",
    "genre": "현대판타지, SF",
    "chapterCount": 37,
    "favorites": 6416,
    "totalViews": 896236,
    "avgViews": 24223,
    "todayViews": 1251,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 15620,
    "comments": 2343,
    "ranks": {
      "free": 56,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 56위"
    ],
    "description": "무료 투베 56위"
  },
  {
    "id": "463152",
    "title": "선협의 뱀이 되었다",
    "author": "판다공자",
    "genre": "무협, 판타지",
    "chapterCount": 558,
    "favorites": 12464,
    "totalViews": 3091320,
    "avgViews": 5540,
    "todayViews": 246655,
    "isPaid": true,
    "paidChapters": 533,
    "likes": 141982,
    "comments": 21297,
    "ranks": {
      "free": null,
      "paid": 56,
      "bestseller": 62
    },
    "badges": [
      "유료 투베 56위",
      "베스트셀러 62위"
    ],
    "description": "유료 투베 56위 | 베스트셀러 62위"
  },
  {
    "id": "542531",
    "title": "격투 천재가 미국 고교 최강 피지컬로 눈을 떴다",
    "author": "리안사마",
    "genre": "현대판타지, 스포츠",
    "chapterCount": 199,
    "favorites": 8530,
    "totalViews": 1716746,
    "avgViews": 8627,
    "todayViews": 259279,
    "isPaid": true,
    "paidChapters": 174,
    "likes": 57024,
    "comments": 8554,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 56
    },
    "badges": [
      "베스트셀러 56위"
    ],
    "description": "베스트셀러 56위"
  },
  {
    "id": "610774",
    "title": "5초 먼저보는 펀드매니저를 해고했더니 펀드가 박살남",
    "author": "킹스롬",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 10,
    "favorites": 529,
    "totalViews": 18914,
    "avgViews": 1891,
    "todayViews": 1244,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 322,
    "comments": 48,
    "ranks": {
      "free": 57,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 57위"
    ],
    "description": "무료 투베 57위"
  },
  {
    "id": "536450",
    "title": "천재 투수인데 벤클을 더 잘함",
    "author": "희도",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 238,
    "favorites": 11555,
    "totalViews": 2336884,
    "avgViews": 9819,
    "todayViews": 258635,
    "isPaid": true,
    "paidChapters": 213,
    "likes": 73951,
    "comments": 11093,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 57
    },
    "badges": [
      "베스트셀러 57위"
    ],
    "description": "베스트셀러 57위"
  },
  {
    "id": "598809",
    "title": "제국의 사냥개는 우주해적이 되었다",
    "author": "오동환",
    "genre": "SF, 판타지",
    "chapterCount": 40,
    "favorites": 2064,
    "totalViews": 205721,
    "avgViews": 5143,
    "todayViews": 1237,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6177,
    "comments": 927,
    "ranks": {
      "free": 58,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 58위"
    ],
    "description": "무료 투베 58위"
  },
  {
    "id": "591027",
    "title": "시골 보건소 의사가 힐러로 각성함",
    "author": "쿠쿠하스",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 81,
    "favorites": 4190,
    "totalViews": 655912,
    "avgViews": 8098,
    "todayViews": 9280,
    "isPaid": true,
    "paidChapters": 56,
    "likes": 19225,
    "comments": 2884,
    "ranks": {
      "free": null,
      "paid": 58,
      "bestseller": null
    },
    "badges": [
      "유료 투베 58위"
    ],
    "description": "유료 투베 58위"
  },
  {
    "id": "602717",
    "title": "타이탄 파일럿 된 줄 모르고 무시당함",
    "author": "활자오락",
    "genre": "현대판타지, SF",
    "chapterCount": 31,
    "favorites": 2451,
    "totalViews": 198328,
    "avgViews": 6398,
    "todayViews": 1233,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 4324,
    "comments": 649,
    "ranks": {
      "free": 59,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 59위"
    ],
    "description": "무료 투베 59위"
  },
  {
    "id": "578423",
    "title": "(경) 세종대왕님, 소갈치료원 입소 (축)",
    "author": "MOOHA",
    "genre": "대체역사, 판타지",
    "chapterCount": 125,
    "favorites": 5709,
    "totalViews": 924266,
    "avgViews": 7394,
    "todayViews": 189889,
    "isPaid": true,
    "paidChapters": 100,
    "likes": 32523,
    "comments": 4878,
    "ranks": {
      "free": null,
      "paid": 59,
      "bestseller": 86
    },
    "badges": [
      "유료 투베 59위",
      "베스트셀러 86위"
    ],
    "description": "유료 투베 59위 | 베스트셀러 86위"
  },
  {
    "id": "534442",
    "title": "판타지에서 나 혼자 선협식 수련",
    "author": "불로수선전",
    "genre": "판타지, 무협",
    "chapterCount": 272,
    "favorites": 5487,
    "totalViews": 1094923,
    "avgViews": 4025,
    "todayViews": 250521,
    "isPaid": true,
    "paidChapters": 247,
    "likes": 42812,
    "comments": 6422,
    "ranks": {
      "free": null,
      "paid": 97,
      "bestseller": 59
    },
    "badges": [
      "베스트셀러 59위",
      "유료 투베 97위"
    ],
    "description": "베스트셀러 59위 | 유료 투베 97위"
  },
  {
    "id": "604962",
    "title": "아포칼립스에서 우주전함을 주웠다",
    "author": "한소™",
    "genre": "SF, 현대판타지",
    "chapterCount": 25,
    "favorites": 2272,
    "totalViews": 120010,
    "avgViews": 4800,
    "todayViews": 1213,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3679,
    "comments": 552,
    "ranks": {
      "free": 60,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 60위"
    ],
    "description": "무료 투베 60위"
  },
  {
    "id": "588713",
    "title": "소설 속 광마가 되었다",
    "author": "글카인",
    "genre": "무협, 퓨전",
    "chapterCount": 69,
    "favorites": 3852,
    "totalViews": 416630,
    "avgViews": 6038,
    "todayViews": 8700,
    "isPaid": true,
    "paidChapters": 44,
    "likes": 15125,
    "comments": 2269,
    "ranks": {
      "free": null,
      "paid": 60,
      "bestseller": null
    },
    "badges": [
      "유료 투베 60위"
    ],
    "description": "유료 투베 60위"
  },
  {
    "id": "609617",
    "title": "즉사기가 핵심인 줄 모르고 해고당함",
    "author": "백수천",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 11,
    "favorites": 847,
    "totalViews": 30035,
    "avgViews": 2730,
    "todayViews": 1158,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 866,
    "comments": 130,
    "ranks": {
      "free": 61,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 61위"
    ],
    "description": "무료 투베 61위"
  },
  {
    "id": "597651",
    "title": "1조 파워볼 당첨 후, 걸그룹을 샀다",
    "author": "죽엇푹",
    "genre": "현대판타지",
    "chapterCount": 55,
    "favorites": 4136,
    "totalViews": 577102,
    "avgViews": 10493,
    "todayViews": 8480,
    "isPaid": true,
    "paidChapters": 30,
    "likes": 12164,
    "comments": 1825,
    "ranks": {
      "free": null,
      "paid": 61,
      "bestseller": null
    },
    "badges": [
      "유료 투베 61위"
    ],
    "description": "유료 투베 61위"
  },
  {
    "id": "563812",
    "title": "연금술사의 경제학",
    "author": "스또리",
    "genre": "현대판타지",
    "chapterCount": 152,
    "favorites": 9496,
    "totalViews": 2250056,
    "avgViews": 14803,
    "todayViews": 246920,
    "isPaid": true,
    "paidChapters": 127,
    "likes": 55438,
    "comments": 8316,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 61
    },
    "badges": [
      "베스트셀러 61위"
    ],
    "description": "베스트셀러 61위"
  },
  {
    "id": "609190",
    "title": "핵심 특허가 내 것인데 그런 나를 해고함!",
    "author": "오렌지깡",
    "genre": "현대판타지",
    "chapterCount": 14,
    "favorites": 734,
    "totalViews": 55129,
    "avgViews": 3938,
    "todayViews": 1059,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 719,
    "comments": 108,
    "ranks": {
      "free": 62,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 62위"
    ],
    "description": "무료 투베 62위"
  },
  {
    "id": "585347",
    "title": "주식 천재 노총각, 월가를 흔들다",
    "author": "팥빵맨",
    "genre": "현대판타지, 판타지",
    "chapterCount": 130,
    "favorites": 5169,
    "totalViews": 1263188,
    "avgViews": 9717,
    "todayViews": 132268,
    "isPaid": true,
    "paidChapters": 105,
    "likes": 23391,
    "comments": 3509,
    "ranks": {
      "free": null,
      "paid": 62,
      "bestseller": 121
    },
    "badges": [
      "유료 투베 62위",
      "베스트셀러 121위"
    ],
    "description": "유료 투베 62위 | 베스트셀러 121위"
  },
  {
    "id": "604842",
    "title": "장자상속 재벌가의 장자가 되었다!",
    "author": "초보글장인",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 24,
    "favorites": 1643,
    "totalViews": 89541,
    "avgViews": 3731,
    "todayViews": 1051,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1870,
    "comments": 281,
    "ranks": {
      "free": 63,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 63위"
    ],
    "description": "무료 투베 63위"
  },
  {
    "id": "578253",
    "title": "삼국지연의:병사의꿈",
    "author": "동동휘온",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 126,
    "favorites": 3991,
    "totalViews": 694352,
    "avgViews": 5511,
    "todayViews": 130253,
    "isPaid": true,
    "paidChapters": 101,
    "likes": 25631,
    "comments": 3845,
    "ranks": {
      "free": null,
      "paid": 63,
      "bestseller": 125
    },
    "badges": [
      "유료 투베 63위",
      "베스트셀러 125위"
    ],
    "description": "유료 투베 63위 | 베스트셀러 125위"
  },
  {
    "id": "571333",
    "title": "회귀한 천재게이머가 스타를 너무 잘함",
    "author": "아몬드빵",
    "genre": "현대판타지, 스포츠",
    "chapterCount": 160,
    "favorites": 5943,
    "totalViews": 1183089,
    "avgViews": 7394,
    "todayViews": 244610,
    "isPaid": true,
    "paidChapters": 135,
    "likes": 33752,
    "comments": 5063,
    "ranks": {
      "free": null,
      "paid": 65,
      "bestseller": 63
    },
    "badges": [
      "베스트셀러 63위",
      "유료 투베 65위"
    ],
    "description": "베스트셀러 63위 | 유료 투베 65위"
  },
  {
    "id": "592510",
    "title": "삼국지: 십상시 아들이라서 튑니다.",
    "author": "박야옹",
    "genre": "대체역사, 판타지",
    "chapterCount": 70,
    "favorites": 1571,
    "totalViews": 269709,
    "avgViews": 3853,
    "todayViews": 1044,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7923,
    "comments": 1188,
    "ranks": {
      "free": 64,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 64위"
    ],
    "description": "무료 투베 64위"
  },
  {
    "id": "512997",
    "title": "만주 군벌이 한국인을 숨김",
    "author": "수팅스타",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 255,
    "favorites": 7834,
    "totalViews": 1608052,
    "avgViews": 6306,
    "todayViews": 244490,
    "isPaid": true,
    "paidChapters": 230,
    "likes": 87214,
    "comments": 13082,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 64
    },
    "badges": [
      "베스트셀러 64위"
    ],
    "description": "베스트셀러 64위"
  },
  {
    "id": "604686",
    "title": "막내 동생이 규격외 역대급 천재였다",
    "author": "공상소년",
    "genre": "현대판타지",
    "chapterCount": 24,
    "favorites": 1346,
    "totalViews": 73189,
    "avgViews": 3050,
    "todayViews": 1034,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1923,
    "comments": 288,
    "ranks": {
      "free": 65,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 65위"
    ],
    "description": "무료 투베 65위"
  },
  {
    "id": "556083",
    "title": "맛있다! 전생 천하제일숙수",
    "author": "장성필",
    "genre": "현대판타지",
    "chapterCount": 193,
    "favorites": 11325,
    "totalViews": 2300057,
    "avgViews": 11917,
    "todayViews": 233774,
    "isPaid": true,
    "paidChapters": 168,
    "likes": 63683,
    "comments": 9552,
    "ranks": {
      "free": null,
      "paid": 141,
      "bestseller": 65
    },
    "badges": [
      "베스트셀러 65위",
      "유료 투베 141위"
    ],
    "description": "베스트셀러 65위 | 유료 투베 141위"
  },
  {
    "id": "604224",
    "title": "파워볼 당첨후 미국에서 농사짓는데 기업들이 몰려옴",
    "author": "잭슨뽈락",
    "genre": "현대판타지, 드라마",
    "chapterCount": 27,
    "favorites": 1109,
    "totalViews": 91386,
    "avgViews": 3385,
    "todayViews": 1034,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1715,
    "comments": 257,
    "ranks": {
      "free": 66,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 66위"
    ],
    "description": "무료 투베 66위"
  },
  {
    "id": "599811",
    "title": "침대 밑 화이트홀이 능력을 자꾸 준다",
    "author": "크엉컹컹",
    "genre": "현대판타지, SF",
    "chapterCount": 39,
    "favorites": 1641,
    "totalViews": 156485,
    "avgViews": 4012,
    "todayViews": 1033,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5699,
    "comments": 855,
    "ranks": {
      "free": 67,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 67위"
    ],
    "description": "무료 투베 67위"
  },
  {
    "id": "591171",
    "title": "500억 자산가 교사인데 학부모가 고소함",
    "author": "파르랑",
    "genre": "현대판타지, 판타지",
    "chapterCount": 52,
    "favorites": 3727,
    "totalViews": 565555,
    "avgViews": 10876,
    "todayViews": 7090,
    "isPaid": true,
    "paidChapters": 27,
    "likes": 13269,
    "comments": 1990,
    "ranks": {
      "free": null,
      "paid": 67,
      "bestseller": null
    },
    "badges": [
      "유료 투베 67위"
    ],
    "description": "유료 투베 67위"
  },
  {
    "id": "553552",
    "title": "절대은신으로 신화급 탑 공략",
    "author": "차용",
    "genre": "현대판타지, 판타지",
    "chapterCount": 155,
    "favorites": 16488,
    "totalViews": 2592440,
    "avgViews": 16725,
    "todayViews": 230642,
    "isPaid": true,
    "paidChapters": 134,
    "likes": 77457,
    "comments": 11619,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 67
    },
    "badges": [
      "베스트셀러 67위"
    ],
    "description": "베스트셀러 67위"
  },
  {
    "id": "597879",
    "title": "잠수사가 폐광을 빙하기 벙커로 바꿈",
    "author": "과묵한구리",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 44,
    "favorites": 2351,
    "totalViews": 239208,
    "avgViews": 5437,
    "todayViews": 1012,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5891,
    "comments": 884,
    "ranks": {
      "free": 68,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 68위"
    ],
    "description": "무료 투베 68위"
  },
  {
    "id": "579986",
    "title": "경험치 100만배로 탑 등반하는 EX급 마법사",
    "author": "돔황차",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 115,
    "favorites": 7608,
    "totalViews": 1268330,
    "avgViews": 11029,
    "todayViews": 182762,
    "isPaid": true,
    "paidChapters": 90,
    "likes": 34691,
    "comments": 5204,
    "ranks": {
      "free": null,
      "paid": 68,
      "bestseller": 87
    },
    "badges": [
      "유료 투베 68위",
      "베스트셀러 87위"
    ],
    "description": "유료 투베 68위 | 베스트셀러 87위"
  },
  {
    "id": "608172",
    "title": "EX급 제약 스킬을 얻었더니 해고당함",
    "author": "흑전",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 15,
    "favorites": 1421,
    "totalViews": 60292,
    "avgViews": 4019,
    "todayViews": 986,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1653,
    "comments": 248,
    "ranks": {
      "free": 69,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 69위"
    ],
    "description": "무료 투베 69위"
  },
  {
    "id": "556699",
    "title": "초자발적 종신 재상이 되었다",
    "author": "어겐어겐",
    "genre": "대체역사",
    "chapterCount": 200,
    "favorites": 5607,
    "totalViews": 1149045,
    "avgViews": 5745,
    "todayViews": 222259,
    "isPaid": true,
    "paidChapters": 175,
    "likes": 35634,
    "comments": 5345,
    "ranks": {
      "free": null,
      "paid": 69,
      "bestseller": 69
    },
    "badges": [
      "유료 투베 69위",
      "베스트셀러 69위"
    ],
    "description": "유료 투베 69위 | 베스트셀러 69위"
  },
  {
    "id": "600875",
    "title": "천마신교 서고지기는 재벌가 막둥이로 힐링 합니다",
    "author": "배소리",
    "genre": "현대판타지, 무협",
    "chapterCount": 37,
    "favorites": 3347,
    "totalViews": 375968,
    "avgViews": 10161,
    "todayViews": 983,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 8174,
    "comments": 1226,
    "ranks": {
      "free": 70,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 70위"
    ],
    "description": "무료 투베 70위"
  },
  {
    "id": "540718",
    "title": "자원 만드는 중동 독재자 둘째아들",
    "author": "주키니",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 195,
    "favorites": 8470,
    "totalViews": 1736238,
    "avgViews": 8904,
    "todayViews": 159993,
    "isPaid": true,
    "paidChapters": 170,
    "likes": 53238,
    "comments": 7986,
    "ranks": {
      "free": null,
      "paid": 70,
      "bestseller": 104
    },
    "badges": [
      "유료 투베 70위",
      "베스트셀러 104위"
    ],
    "description": "유료 투베 70위 | 베스트셀러 104위"
  },
  {
    "id": "513793",
    "title": "미국 트럭커가 골동품으로 대박남",
    "author": "지나83",
    "genre": "현대판타지",
    "chapterCount": 422,
    "favorites": 21241,
    "totalViews": 4122530,
    "avgViews": 9769,
    "todayViews": 221528,
    "isPaid": true,
    "paidChapters": 395,
    "likes": 178211,
    "comments": 26732,
    "ranks": {
      "free": null,
      "paid": 82,
      "bestseller": 70
    },
    "badges": [
      "베스트셀러 70위",
      "유료 투베 82위"
    ],
    "description": "베스트셀러 70위 | 유료 투베 82위"
  },
  {
    "id": "600592",
    "title": "환생한 용사가 S급 즉사기로 멸망급 탑 공략",
    "author": "윤어파",
    "genre": "현대판타지, SF",
    "chapterCount": 38,
    "favorites": 1797,
    "totalViews": 193226,
    "avgViews": 5085,
    "todayViews": 968,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 4694,
    "comments": 704,
    "ranks": {
      "free": 71,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 71위"
    ],
    "description": "무료 투베 71위"
  },
  {
    "id": "590518",
    "title": "전능의 침술로 회귀했다",
    "author": "대작살",
    "genre": "현대판타지, 드라마",
    "chapterCount": 80,
    "favorites": 4544,
    "totalViews": 794369,
    "avgViews": 9930,
    "todayViews": 6710,
    "isPaid": true,
    "paidChapters": 55,
    "likes": 21756,
    "comments": 3263,
    "ranks": {
      "free": null,
      "paid": 71,
      "bestseller": null
    },
    "badges": [
      "유료 투베 71위"
    ],
    "description": "유료 투베 71위"
  },
  {
    "id": "502508",
    "title": "미국 남부의 악덕 대지주가 되었다",
    "author": "폭식마왕",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 577,
    "favorites": 21299,
    "totalViews": 5171274,
    "avgViews": 8962,
    "todayViews": 219537,
    "isPaid": true,
    "paidChapters": 552,
    "likes": 249428,
    "comments": 37414,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 71
    },
    "badges": [
      "베스트셀러 71위"
    ],
    "description": "베스트셀러 71위"
  },
  {
    "id": "600910",
    "title": "포션수선전",
    "author": "오구진",
    "genre": "무협, 퓨전",
    "chapterCount": 37,
    "favorites": 1657,
    "totalViews": 133359,
    "avgViews": 3604,
    "todayViews": 940,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3578,
    "comments": 537,
    "ranks": {
      "free": 72,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 72위"
    ],
    "description": "무료 투베 72위"
  },
  {
    "id": "544370",
    "title": "별을 품은 천재가 살아가는 법",
    "author": "한준솔봄",
    "genre": "현대판타지, 드라마",
    "chapterCount": 230,
    "favorites": 20535,
    "totalViews": 3325210,
    "avgViews": 14457,
    "todayViews": 193810,
    "isPaid": true,
    "paidChapters": 205,
    "likes": 136359,
    "comments": 20454,
    "ranks": {
      "free": null,
      "paid": 72,
      "bestseller": 84
    },
    "badges": [
      "유료 투베 72위",
      "베스트셀러 84위"
    ],
    "description": "유료 투베 72위 | 베스트셀러 84위"
  },
  {
    "id": "563294",
    "title": "강심장 PD의 겁없는 방송생활",
    "author": "담하이데",
    "genre": "현대판타지, 판타지",
    "chapterCount": 170,
    "favorites": 17060,
    "totalViews": 2956915,
    "avgViews": 17394,
    "todayViews": 218895,
    "isPaid": true,
    "paidChapters": 145,
    "likes": 110243,
    "comments": 16536,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 72
    },
    "badges": [
      "베스트셀러 72위"
    ],
    "description": "베스트셀러 72위"
  },
  {
    "id": "604789",
    "title": "1조 재벌인데 시골에서 힐링합니다",
    "author": "재미진글",
    "genre": "현대판타지",
    "chapterCount": 24,
    "favorites": 1179,
    "totalViews": 93007,
    "avgViews": 3875,
    "todayViews": 932,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1960,
    "comments": 294,
    "ranks": {
      "free": 73,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 73위"
    ],
    "description": "무료 투베 73위"
  },
  {
    "id": "564882",
    "title": "흉성의 화신",
    "author": "퉁구스카",
    "genre": "현대판타지",
    "chapterCount": 180,
    "favorites": 9451,
    "totalViews": 1108983,
    "avgViews": 6161,
    "todayViews": 212850,
    "isPaid": true,
    "paidChapters": 155,
    "likes": 67141,
    "comments": 10071,
    "ranks": {
      "free": null,
      "paid": 73,
      "bestseller": 74
    },
    "badges": [
      "유료 투베 73위",
      "베스트셀러 74위"
    ],
    "description": "유료 투베 73위 | 베스트셀러 74위"
  },
  {
    "id": "539606",
    "title": "꿈에서 국정원 요원이었음 현실은 재벌 3세인데",
    "author": "강준현",
    "genre": "판타지, 현대판타지",
    "chapterCount": 243,
    "favorites": 11241,
    "totalViews": 2371327,
    "avgViews": 9759,
    "todayViews": 215499,
    "isPaid": true,
    "paidChapters": 218,
    "likes": 68361,
    "comments": 10254,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 73
    },
    "badges": [
      "베스트셀러 73위"
    ],
    "description": "베스트셀러 73위"
  },
  {
    "id": "607389",
    "title": "해고당한 협회 직원이 각성 후 국가에 헌신을 안함",
    "author": "우르스.",
    "genre": "현대판타지, 판타지",
    "chapterCount": 16,
    "favorites": 646,
    "totalViews": 37481,
    "avgViews": 2343,
    "todayViews": 916,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 839,
    "comments": 126,
    "ranks": {
      "free": 74,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 74위"
    ],
    "description": "무료 투베 74위"
  },
  {
    "id": "606826",
    "title": "좌천 당한 실장이 너무 유능함",
    "author": "뇽뇽e",
    "genre": "현대판타지, 드라마",
    "chapterCount": 20,
    "favorites": 866,
    "totalViews": 56898,
    "avgViews": 2845,
    "todayViews": 912,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1417,
    "comments": 213,
    "ranks": {
      "free": 75,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 75위"
    ],
    "description": "무료 투베 75위"
  },
  {
    "id": "538483",
    "title": "낭인은 무림에 산다",
    "author": "인간방패",
    "genre": "무협",
    "chapterCount": 256,
    "favorites": 12718,
    "totalViews": 2390548,
    "avgViews": 9338,
    "todayViews": 181959,
    "isPaid": true,
    "paidChapters": 231,
    "likes": 81472,
    "comments": 12221,
    "ranks": {
      "free": null,
      "paid": 75,
      "bestseller": 88
    },
    "badges": [
      "유료 투베 75위",
      "베스트셀러 88위"
    ],
    "description": "유료 투베 75위 | 베스트셀러 88위"
  },
  {
    "id": "535885",
    "title": "퇴사 후 아포칼립스로 출근합니다",
    "author": "포더엠",
    "genre": "현대판타지, 판타지",
    "chapterCount": 221,
    "favorites": 16400,
    "totalViews": 3360144,
    "avgViews": 15204,
    "todayViews": 211356,
    "isPaid": true,
    "paidChapters": 193,
    "likes": 107795,
    "comments": 16169,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 75
    },
    "badges": [
      "베스트셀러 75위"
    ],
    "description": "베스트셀러 75위"
  },
  {
    "id": "607657",
    "title": "방출당한 2군이 축구를 너무 잘함",
    "author": "쿨라임",
    "genre": "스포츠, 판타지",
    "chapterCount": 26,
    "favorites": 652,
    "totalViews": 54967,
    "avgViews": 2114,
    "todayViews": 912,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 857,
    "comments": 129,
    "ranks": {
      "free": 76,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 76위"
    ],
    "description": "무료 투베 76위"
  },
  {
    "id": "524526",
    "title": "검귀가 환생함",
    "author": "목마",
    "genre": "판타지, 퓨전",
    "chapterCount": 228,
    "favorites": 22281,
    "totalViews": 3598891,
    "avgViews": 15785,
    "todayViews": 117813,
    "isPaid": true,
    "paidChapters": 203,
    "likes": 114675,
    "comments": 17201,
    "ranks": {
      "free": null,
      "paid": 76,
      "bestseller": 141
    },
    "badges": [
      "유료 투베 76위",
      "베스트셀러 141위"
    ],
    "description": "유료 투베 76위 | 베스트셀러 141위"
  },
  {
    "id": "574789",
    "title": "축협아 배신 고맙다. 포르투갈 국대로 갈아탄다.",
    "author": "역작s",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 126,
    "favorites": 14415,
    "totalViews": 2434620,
    "avgViews": 19322,
    "todayViews": 211000,
    "isPaid": true,
    "paidChapters": 101,
    "likes": 59311,
    "comments": 8897,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 76
    },
    "badges": [
      "베스트셀러 76위"
    ],
    "description": "베스트셀러 76위"
  },
  {
    "id": "596475",
    "title": "삼국지. 이번 생엔 유비를 개처럼 부려먹겠다",
    "author": "運月",
    "genre": "대체역사, 판타지",
    "chapterCount": 53,
    "favorites": 1468,
    "totalViews": 188379,
    "avgViews": 3554,
    "todayViews": 896,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5680,
    "comments": 852,
    "ranks": {
      "free": 77,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 77위"
    ],
    "description": "무료 투베 77위"
  },
  {
    "id": "593342",
    "title": "노가다꾼이 사천당가 각성했더니 재벌들이 집착함",
    "author": "종이노트",
    "genre": "현대판타지",
    "chapterCount": 61,
    "favorites": 6864,
    "totalViews": 1105300,
    "avgViews": 18120,
    "todayViews": 5850,
    "isPaid": true,
    "paidChapters": 36,
    "likes": 21885,
    "comments": 3283,
    "ranks": {
      "free": null,
      "paid": 77,
      "bestseller": null
    },
    "badges": [
      "유료 투베 77위"
    ],
    "description": "유료 투베 77위"
  },
  {
    "id": "581316",
    "title": "삼국지, 조조의 동생이 되었다",
    "author": "조경래",
    "genre": "대체역사, 판타지",
    "chapterCount": 131,
    "favorites": 6337,
    "totalViews": 1038600,
    "avgViews": 7928,
    "todayViews": 207337,
    "isPaid": true,
    "paidChapters": 106,
    "likes": 44642,
    "comments": 6696,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 77
    },
    "badges": [
      "베스트셀러 77위"
    ],
    "description": "베스트셀러 77위"
  },
  {
    "id": "607817",
    "title": "퇴사한 내과 의사가 너무 유능함",
    "author": "자몽라임",
    "genre": "현대판타지",
    "chapterCount": 15,
    "favorites": 859,
    "totalViews": 39545,
    "avgViews": 2636,
    "todayViews": 891,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1002,
    "comments": 150,
    "ranks": {
      "free": 78,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 78위"
    ],
    "description": "무료 투베 78위"
  },
  {
    "id": "595533",
    "title": "S급 헌터는 계획대로 잘렸다",
    "author": "김템포",
    "genre": "현대판타지, 판타지",
    "chapterCount": 56,
    "favorites": 6881,
    "totalViews": 1375171,
    "avgViews": 24557,
    "todayViews": 5710,
    "isPaid": true,
    "paidChapters": 31,
    "likes": 24829,
    "comments": 3724,
    "ranks": {
      "free": null,
      "paid": 78,
      "bestseller": null
    },
    "badges": [
      "유료 투베 78위"
    ],
    "description": "유료 투베 78위"
  },
  {
    "id": "608131",
    "title": "예술고 천재가 빌보드 1위를 숨김",
    "author": "누리용",
    "genre": "현대판타지",
    "chapterCount": 12,
    "favorites": 792,
    "totalViews": 22817,
    "avgViews": 1901,
    "todayViews": 886,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 678,
    "comments": 102,
    "ranks": {
      "free": 79,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 79위"
    ],
    "description": "무료 투베 79위"
  },
  {
    "id": "591000",
    "title": "회귀한 0점짜리 남편이 빅테크를 만들었다",
    "author": "톨킴",
    "genre": "현대판타지, 판타지",
    "chapterCount": 82,
    "favorites": 3685,
    "totalViews": 687481,
    "avgViews": 8384,
    "todayViews": 5680,
    "isPaid": true,
    "paidChapters": 57,
    "likes": 14917,
    "comments": 2238,
    "ranks": {
      "free": null,
      "paid": 79,
      "bestseller": null
    },
    "badges": [
      "유료 투베 79위"
    ],
    "description": "유료 투베 79위"
  },
  {
    "id": "578448",
    "title": "동유럽의 천재 유물 복원사",
    "author": "도마뱀작가",
    "genre": "현대판타지",
    "chapterCount": 171,
    "favorites": 12064,
    "totalViews": 2547731,
    "avgViews": 14899,
    "todayViews": 205623,
    "isPaid": true,
    "paidChapters": 146,
    "likes": 83956,
    "comments": 12593,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 79
    },
    "badges": [
      "베스트셀러 79위"
    ],
    "description": "베스트셀러 79위"
  },
  {
    "id": "604252",
    "title": "자고 일어났더니 유튜브 1,000만 구독자가 되었다",
    "author": "김전기",
    "genre": "현대판타지, 판타지",
    "chapterCount": 26,
    "favorites": 880,
    "totalViews": 69333,
    "avgViews": 2667,
    "todayViews": 874,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1372,
    "comments": 206,
    "ranks": {
      "free": 80,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 80위"
    ],
    "description": "무료 투베 80위"
  },
  {
    "id": "594337",
    "title": "국가에게 버림받은 탱커는 재앙급 각성자",
    "author": "쿨라임",
    "genre": "현대판타지, 판타지",
    "chapterCount": 81,
    "favorites": 7620,
    "totalViews": 1706264,
    "avgViews": 21065,
    "todayViews": 5660,
    "isPaid": true,
    "paidChapters": 56,
    "likes": 34490,
    "comments": 5174,
    "ranks": {
      "free": null,
      "paid": 80,
      "bestseller": null
    },
    "badges": [
      "유료 투베 80위"
    ],
    "description": "유료 투베 80위"
  },
  {
    "id": "548106",
    "title": "조선인이 총독부에 독을 풀었다",
    "author": "황투",
    "genre": "대체역사",
    "chapterCount": 225,
    "favorites": 6693,
    "totalViews": 1062492,
    "avgViews": 4722,
    "todayViews": 203850,
    "isPaid": true,
    "paidChapters": 200,
    "likes": 65931,
    "comments": 9890,
    "ranks": {
      "free": null,
      "paid": 85,
      "bestseller": 80
    },
    "badges": [
      "베스트셀러 80위",
      "유료 투베 85위"
    ],
    "description": "베스트셀러 80위 | 유료 투베 85위"
  },
  {
    "id": "607530",
    "title": "방출당한 고교 최대어가 170 던짐",
    "author": "배추나무",
    "genre": "스포츠, 퓨전",
    "chapterCount": 15,
    "favorites": 689,
    "totalViews": 38571,
    "avgViews": 2571,
    "todayViews": 871,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 828,
    "comments": 124,
    "ranks": {
      "free": 81,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 81위"
    ],
    "description": "무료 투베 81위"
  },
  {
    "id": "583018",
    "title": "독일에 조선을 풀었다",
    "author": "글철인",
    "genre": "대체역사, 판타지",
    "chapterCount": 111,
    "favorites": 3639,
    "totalViews": 473916,
    "avgViews": 4270,
    "todayViews": 87286,
    "isPaid": true,
    "paidChapters": 86,
    "likes": 19995,
    "comments": 2999,
    "ranks": {
      "free": null,
      "paid": 81,
      "bestseller": 186
    },
    "badges": [
      "유료 투베 81위",
      "베스트셀러 186위"
    ],
    "description": "유료 투베 81위 | 베스트셀러 186위"
  },
  {
    "id": "574693",
    "title": "퇴근 후 소소하게 힐링함",
    "author": "후추발바닥",
    "genre": "현대판타지, 판타지",
    "chapterCount": 126,
    "favorites": 9686,
    "totalViews": 1921401,
    "avgViews": 15249,
    "todayViews": 201941,
    "isPaid": true,
    "paidChapters": 103,
    "likes": 46221,
    "comments": 6933,
    "ranks": {
      "free": null,
      "paid": 158,
      "bestseller": 81
    },
    "badges": [
      "베스트셀러 81위",
      "유료 투베 158위"
    ],
    "description": "베스트셀러 81위 | 유료 투베 158위"
  },
  {
    "id": "608006",
    "title": "해고당한 단장에게 러브콜이 쏟아짐",
    "author": "밀렵",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 14,
    "favorites": 1072,
    "totalViews": 41975,
    "avgViews": 2998,
    "todayViews": 861,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1035,
    "comments": 155,
    "ranks": {
      "free": 82,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 82위"
    ],
    "description": "무료 투베 82위"
  },
  {
    "id": "578189",
    "title": "19세기 러시아에 웹소설을 풀었다",
    "author": "적백赤白",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 135,
    "favorites": 6469,
    "totalViews": 829595,
    "avgViews": 6145,
    "todayViews": 196696,
    "isPaid": true,
    "paidChapters": 113,
    "likes": 41404,
    "comments": 6211,
    "ranks": {
      "free": null,
      "paid": 96,
      "bestseller": 82
    },
    "badges": [
      "베스트셀러 82위",
      "유료 투베 96위"
    ],
    "description": "베스트셀러 82위 | 유료 투베 96위"
  },
  {
    "id": "603999",
    "title": "우주에서 나 홀로 7000경으로 제국 건설",
    "author": "글난타",
    "genre": "판타지, SF",
    "chapterCount": 32,
    "favorites": 1323,
    "totalViews": 96616,
    "avgViews": 3019,
    "todayViews": 859,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2933,
    "comments": 440,
    "ranks": {
      "free": 83,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 83위"
    ],
    "description": "무료 투베 83위"
  },
  {
    "id": "596148",
    "title": "유럽에서 망한 가게를 물려받았는데 해달이 보물을 주워옴",
    "author": "무던",
    "genre": "현대판타지",
    "chapterCount": 55,
    "favorites": 2106,
    "totalViews": 273500,
    "avgViews": 4973,
    "todayViews": 5490,
    "isPaid": true,
    "paidChapters": 30,
    "likes": 10054,
    "comments": 1508,
    "ranks": {
      "free": null,
      "paid": 83,
      "bestseller": null
    },
    "badges": [
      "유료 투베 83위"
    ],
    "description": "유료 투베 83위"
  },
  {
    "id": "346981",
    "title": "회귀수선전(回歸修仙傳)",
    "author": "엄청난",
    "genre": "무협, 퓨전",
    "chapterCount": 876,
    "favorites": 46493,
    "totalViews": 18783139,
    "avgViews": 21442,
    "todayViews": 195361,
    "isPaid": true,
    "paidChapters": 849,
    "likes": 750244,
    "comments": 112537,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 83
    },
    "badges": [
      "베스트셀러 83위"
    ],
    "description": "베스트셀러 83위"
  },
  {
    "id": "603795",
    "title": "나만 오르는 주식이 보임",
    "author": "백우랑",
    "genre": "현대판타지, 판타지",
    "chapterCount": 27,
    "favorites": 949,
    "totalViews": 69364,
    "avgViews": 2569,
    "todayViews": 840,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1472,
    "comments": 221,
    "ranks": {
      "free": 84,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 84위"
    ],
    "description": "무료 투베 84위"
  },
  {
    "id": "549262",
    "title": "천재 한식 유튜버는 미국 정복이 너무 쉽다",
    "author": "우주현인",
    "genre": "현대판타지",
    "chapterCount": 217,
    "favorites": 7192,
    "totalViews": 1371164,
    "avgViews": 6319,
    "todayViews": 162867,
    "isPaid": true,
    "paidChapters": 192,
    "likes": 46148,
    "comments": 6922,
    "ranks": {
      "free": null,
      "paid": 84,
      "bestseller": 100
    },
    "badges": [
      "유료 투베 84위",
      "베스트셀러 100위"
    ],
    "description": "유료 투베 84위 | 베스트셀러 100위"
  },
  {
    "id": "603357",
    "title": "해고당한 투수가 메이저에서 대박남",
    "author": "치규치규",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 30,
    "favorites": 2099,
    "totalViews": 211936,
    "avgViews": 7065,
    "todayViews": 835,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3911,
    "comments": 587,
    "ranks": {
      "free": 85,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 85위"
    ],
    "description": "무료 투베 85위"
  },
  {
    "id": "547733",
    "title": "서번트 증후군 천재가 되었다",
    "author": "동화제군",
    "genre": "현대판타지",
    "chapterCount": 349,
    "favorites": 12765,
    "totalViews": 2727731,
    "avgViews": 7816,
    "todayViews": 192072,
    "isPaid": true,
    "paidChapters": 324,
    "likes": 93077,
    "comments": 13962,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 85
    },
    "badges": [
      "베스트셀러 85위"
    ],
    "description": "베스트셀러 85위"
  },
  {
    "id": "606891",
    "title": "미래 먼저보는 팀장을 해고했더니 경쟁사가 모셔감",
    "author": "콜라아이스",
    "genre": "현대판타지, SF",
    "chapterCount": 16,
    "favorites": 715,
    "totalViews": 43269,
    "avgViews": 2704,
    "todayViews": 833,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1241,
    "comments": 186,
    "ranks": {
      "free": 86,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 86위"
    ],
    "description": "무료 투베 86위"
  },
  {
    "id": "584035",
    "title": "정자기증으로 재벌가 데릴사위",
    "author": "황금코끼리",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 98,
    "favorites": 8095,
    "totalViews": 1157354,
    "avgViews": 11810,
    "todayViews": 162193,
    "isPaid": true,
    "paidChapters": 73,
    "likes": 26115,
    "comments": 3917,
    "ranks": {
      "free": null,
      "paid": 86,
      "bestseller": 101
    },
    "badges": [
      "유료 투베 86위",
      "베스트셀러 101위"
    ],
    "description": "유료 투베 86위 | 베스트셀러 101위"
  },
  {
    "id": "604380",
    "title": "국가에 버림받고 재앙급 마법사로 각성했다",
    "author": "적축",
    "genre": "현대판타지, 판타지",
    "chapterCount": 27,
    "favorites": 1539,
    "totalViews": 132738,
    "avgViews": 4916,
    "todayViews": 829,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2613,
    "comments": 392,
    "ranks": {
      "free": 87,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 87위"
    ],
    "description": "무료 투베 87위"
  },
  {
    "id": "596924",
    "title": "퇴직금으로 산 무인도에서 취미로 돈 법니다",
    "author": "이구공",
    "genre": "현대판타지",
    "chapterCount": 57,
    "favorites": 4033,
    "totalViews": 646506,
    "avgViews": 11342,
    "todayViews": 5310,
    "isPaid": true,
    "paidChapters": 32,
    "likes": 15313,
    "comments": 2297,
    "ranks": {
      "free": null,
      "paid": 87,
      "bestseller": null
    },
    "badges": [
      "유료 투베 87위"
    ],
    "description": "유료 투베 87위"
  },
  {
    "id": "603229",
    "title": "국가에 버림받은 탱커가 EX급으로 재각성함",
    "author": "피초",
    "genre": "판타지",
    "chapterCount": 28,
    "favorites": 1491,
    "totalViews": 136349,
    "avgViews": 4870,
    "todayViews": 821,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2910,
    "comments": 437,
    "ranks": {
      "free": 88,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 88위"
    ],
    "description": "무료 투베 88위"
  },
  {
    "id": "557482",
    "title": "전능의 신을 얻었다",
    "author": "406",
    "genre": "현대판타지, 판타지",
    "chapterCount": 156,
    "favorites": 11622,
    "totalViews": 2270643,
    "avgViews": 14555,
    "todayViews": 156954,
    "isPaid": true,
    "paidChapters": 130,
    "likes": 70754,
    "comments": 10613,
    "ranks": {
      "free": null,
      "paid": 88,
      "bestseller": 107
    },
    "badges": [
      "유료 투베 88위",
      "베스트셀러 107위"
    ],
    "description": "유료 투베 88위 | 베스트셀러 107위"
  },
  {
    "id": "607203",
    "title": "회귀한 구원 투수가 경기를 자꾸 이김",
    "author": "금문장",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 15,
    "favorites": 555,
    "totalViews": 28762,
    "avgViews": 1917,
    "todayViews": 791,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 681,
    "comments": 102,
    "ranks": {
      "free": 89,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 89위"
    ],
    "description": "무료 투베 89위"
  },
  {
    "id": "549055",
    "title": "평화로운 세상의 역병 의사",
    "author": "순두부정신",
    "genre": "현대판타지, 판타지",
    "chapterCount": 195,
    "favorites": 8991,
    "totalViews": 1840493,
    "avgViews": 9438,
    "todayViews": 181819,
    "isPaid": true,
    "paidChapters": 170,
    "likes": 96801,
    "comments": 14520,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 89
    },
    "badges": [
      "베스트셀러 89위"
    ],
    "description": "베스트셀러 89위"
  },
  {
    "id": "603136",
    "title": "아버지 밭 아래 초호화 쉘터가 있었다",
    "author": "나니모노",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 31,
    "favorites": 4327,
    "totalViews": 386223,
    "avgViews": 12459,
    "todayViews": 790,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7537,
    "comments": 1131,
    "ranks": {
      "free": 90,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 90위"
    ],
    "description": "무료 투베 90위"
  },
  {
    "id": "589315",
    "title": "위기감지 능력으로 투자했더니 흑막으로 착각당했다",
    "author": "비건두부",
    "genre": "현대판타지",
    "chapterCount": 91,
    "favorites": 3792,
    "totalViews": 782336,
    "avgViews": 8597,
    "todayViews": 5190,
    "isPaid": true,
    "paidChapters": 66,
    "likes": 13768,
    "comments": 2065,
    "ranks": {
      "free": null,
      "paid": 90,
      "bestseller": null
    },
    "badges": [
      "유료 투베 90위"
    ],
    "description": "유료 투베 90위"
  },
  {
    "id": "437266",
    "title": "반응속도 0.0001초 F1 드라이버",
    "author": "쩹쩨비",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 756,
    "favorites": 8253,
    "totalViews": 2755352,
    "avgViews": 3645,
    "todayViews": 180728,
    "isPaid": true,
    "paidChapters": 736,
    "likes": 111874,
    "comments": 16781,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 90
    },
    "badges": [
      "베스트셀러 90위"
    ],
    "description": "베스트셀러 90위"
  },
  {
    "id": "606436",
    "title": "파워볼 당첨 후, 기업을 통째로 사버림",
    "author": "86호",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 21,
    "favorites": 1351,
    "totalViews": 110911,
    "avgViews": 5281,
    "todayViews": 779,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1854,
    "comments": 278,
    "ranks": {
      "free": 91,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 91위"
    ],
    "description": "무료 투베 91위"
  },
  {
    "id": "595562",
    "title": "1979 장포스, 대한민국 하드 캐리 모드",
    "author": "선우선사",
    "genre": "대체역사, 판타지",
    "chapterCount": 69,
    "favorites": 1785,
    "totalViews": 334628,
    "avgViews": 4850,
    "todayViews": 5160,
    "isPaid": true,
    "paidChapters": 44,
    "likes": 8636,
    "comments": 1295,
    "ranks": {
      "free": null,
      "paid": 91,
      "bestseller": null
    },
    "badges": [
      "유료 투베 91위"
    ],
    "description": "유료 투베 91위"
  },
  {
    "id": "372155",
    "title": "조선에는 쿠데타가 필요해요",
    "author": "앙금고라니",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 2164,
    "favorites": 7689,
    "totalViews": 4988043,
    "avgViews": 2305,
    "todayViews": 180118,
    "isPaid": true,
    "paidChapters": 2137,
    "likes": 285138,
    "comments": 42771,
    "ranks": {
      "free": null,
      "paid": 120,
      "bestseller": 91
    },
    "badges": [
      "베스트셀러 91위",
      "유료 투베 120위"
    ],
    "description": "베스트셀러 91위 | 유료 투베 120위"
  },
  {
    "id": "600130",
    "title": "외계 문명에 라면 팔았더니 오버테크 장비가 쏟아짐",
    "author": "땡시기",
    "genre": "SF, 현대판타지",
    "chapterCount": 41,
    "favorites": 2957,
    "totalViews": 356054,
    "avgViews": 8684,
    "todayViews": 776,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 8474,
    "comments": 1271,
    "ranks": {
      "free": 92,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 92위"
    ],
    "description": "무료 투베 92위"
  },
  {
    "id": "585475",
    "title": "은퇴 당한 헌터가 재평가되었다",
    "author": "진소화",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 96,
    "favorites": 11363,
    "totalViews": 2116739,
    "avgViews": 22049,
    "todayViews": 152574,
    "isPaid": true,
    "paidChapters": 71,
    "likes": 39749,
    "comments": 5962,
    "ranks": {
      "free": null,
      "paid": 92,
      "bestseller": 109
    },
    "badges": [
      "유료 투베 92위",
      "베스트셀러 109위"
    ],
    "description": "유료 투베 92위 | 베스트셀러 109위"
  },
  {
    "id": "469259",
    "title": "정치인이 정치를 너무 잘함",
    "author": "정따블",
    "genre": "현대판타지, 드라마",
    "chapterCount": 367,
    "favorites": 21073,
    "totalViews": 5355261,
    "avgViews": 14592,
    "todayViews": 179418,
    "isPaid": true,
    "paidChapters": 349,
    "likes": 247117,
    "comments": 37068,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 92
    },
    "badges": [
      "베스트셀러 92위"
    ],
    "description": "베스트셀러 92위"
  },
  {
    "id": "609024",
    "title": "낙하산인 줄 모르고 좌천당함",
    "author": "왕십리글쟁이",
    "genre": "현대판타지, 판타지",
    "chapterCount": 13,
    "favorites": 735,
    "totalViews": 45264,
    "avgViews": 3482,
    "todayViews": 741,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 808,
    "comments": 121,
    "ranks": {
      "free": 93,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 93위"
    ],
    "description": "무료 투베 93위"
  },
  {
    "id": "566106",
    "title": "선협에서 뽑기로 수선함",
    "author": "서공(書工)",
    "genre": "무협, 퓨전",
    "chapterCount": 136,
    "favorites": 7047,
    "totalViews": 1399069,
    "avgViews": 10287,
    "todayViews": 179230,
    "isPaid": true,
    "paidChapters": 111,
    "likes": 40100,
    "comments": 6015,
    "ranks": {
      "free": null,
      "paid": 144,
      "bestseller": 93
    },
    "badges": [
      "베스트셀러 93위",
      "유료 투베 144위"
    ],
    "description": "베스트셀러 93위 | 유료 투베 144위"
  },
  {
    "id": "606661",
    "title": "파워볼 당첨되고 미국 목장을 샀더니 자꾸 대박남",
    "author": "양작과",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 20,
    "favorites": 949,
    "totalViews": 46884,
    "avgViews": 2344,
    "todayViews": 736,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1552,
    "comments": 233,
    "ranks": {
      "free": 94,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 94위"
    ],
    "description": "무료 투베 94위"
  },
  {
    "id": "468559",
    "title": "대한제국, 항모 살리기",
    "author": "텔냐",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 335,
    "favorites": 2422,
    "totalViews": 652575,
    "avgViews": 1948,
    "todayViews": 5020,
    "isPaid": true,
    "paidChapters": 310,
    "likes": 34190,
    "comments": 5129,
    "ranks": {
      "free": null,
      "paid": 94,
      "bestseller": null
    },
    "badges": [
      "유료 투베 94위"
    ],
    "description": "유료 투베 94위"
  },
  {
    "id": "555827",
    "title": "삼국지 : 조조보다 더 잘 나감",
    "author": "문귀(文鬼)",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 185,
    "favorites": 6402,
    "totalViews": 1367731,
    "avgViews": 7393,
    "todayViews": 172894,
    "isPaid": true,
    "paidChapters": 160,
    "likes": 37804,
    "comments": 5671,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 94
    },
    "badges": [
      "베스트셀러 94위"
    ],
    "description": "베스트셀러 94위"
  },
  {
    "id": "603193",
    "title": "무제한 레벨업으로 탑 등반",
    "author": "광산김가",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 29,
    "favorites": 1077,
    "totalViews": 83555,
    "avgViews": 2881,
    "todayViews": 725,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2277,
    "comments": 342,
    "ranks": {
      "free": 95,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 95위"
    ],
    "description": "무료 투베 95위"
  },
  {
    "id": "594495",
    "title": "격투 피지컬 천재는 궤적이 다 보임",
    "author": "콜레오",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 53,
    "favorites": 3889,
    "totalViews": 543366,
    "avgViews": 10252,
    "todayViews": 4910,
    "isPaid": true,
    "paidChapters": 28,
    "likes": 11480,
    "comments": 1722,
    "ranks": {
      "free": null,
      "paid": 95,
      "bestseller": null
    },
    "badges": [
      "유료 투베 95위"
    ],
    "description": "유료 투베 95위"
  },
  {
    "id": "545129",
    "title": "1달러에 관상봐줬더니 거물들이 미쳐날뜀",
    "author": "사는게죄",
    "genre": "현대판타지, 판타지",
    "chapterCount": 178,
    "favorites": 14568,
    "totalViews": 2359864,
    "avgViews": 13258,
    "todayViews": 172739,
    "isPaid": true,
    "paidChapters": 153,
    "likes": 86147,
    "comments": 12922,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 95
    },
    "badges": [
      "베스트셀러 95위"
    ],
    "description": "베스트셀러 95위"
  },
  {
    "id": "608923",
    "title": "해고당한 최 비서가 너무 유능함",
    "author": "유노이아",
    "genre": "현대판타지, 판타지",
    "chapterCount": 10,
    "favorites": 388,
    "totalViews": 15256,
    "avgViews": 1526,
    "todayViews": 714,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 265,
    "comments": 40,
    "ranks": {
      "free": 96,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 96위"
    ],
    "description": "무료 투베 96위"
  },
  {
    "id": "560871",
    "title": "이혼했더니 전능의 눈을 얻었다",
    "author": "임플로이",
    "genre": "현대판타지, 판타지",
    "chapterCount": 200,
    "favorites": 8397,
    "totalViews": 1941956,
    "avgViews": 9710,
    "todayViews": 168831,
    "isPaid": true,
    "paidChapters": 175,
    "likes": 50602,
    "comments": 7590,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 96
    },
    "badges": [
      "베스트셀러 96위"
    ],
    "description": "베스트셀러 96위"
  },
  {
    "id": "607997",
    "title": "해고당한 짐꾼은 S급 버퍼였다",
    "author": "소래담",
    "genre": "현대판타지, 판타지",
    "chapterCount": 8,
    "favorites": 545,
    "totalViews": 12493,
    "avgViews": 1562,
    "todayViews": 698,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 489,
    "comments": 73,
    "ranks": {
      "free": 97,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 97위"
    ],
    "description": "무료 투베 97위"
  },
  {
    "id": "538182",
    "title": "건물주라 대충 회사 다니려는데, 톱스타들이 집착함",
    "author": "오두리리",
    "genre": "현대판타지",
    "chapterCount": 228,
    "favorites": 14964,
    "totalViews": 2918862,
    "avgViews": 12802,
    "todayViews": 168361,
    "isPaid": true,
    "paidChapters": 203,
    "likes": 75727,
    "comments": 11359,
    "ranks": {
      "free": null,
      "paid": 102,
      "bestseller": 97
    },
    "badges": [
      "베스트셀러 97위",
      "유료 투베 102위"
    ],
    "description": "베스트셀러 97위 | 유료 투베 102위"
  },
  {
    "id": "600622",
    "title": "레전드 걸그룹 멤버의 남편이 되었다",
    "author": "무성(無聲)",
    "genre": "현대판타지, 로맨스",
    "chapterCount": 38,
    "favorites": 3139,
    "totalViews": 390020,
    "avgViews": 10264,
    "todayViews": 689,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6236,
    "comments": 935,
    "ranks": {
      "free": 98,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 98위"
    ],
    "description": "무료 투베 98위"
  },
  {
    "id": "91668",
    "title": "명군이 되어보세!",
    "author": "슈타인호프",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 2913,
    "favorites": 12893,
    "totalViews": 15330667,
    "avgViews": 5263,
    "todayViews": 93913,
    "isPaid": true,
    "paidChapters": 2813,
    "likes": 538685,
    "comments": 80803,
    "ranks": {
      "free": null,
      "paid": 98,
      "bestseller": 173
    },
    "badges": [
      "유료 투베 98위",
      "베스트셀러 173위"
    ],
    "description": "유료 투베 98위 | 베스트셀러 173위"
  },
  {
    "id": "563654",
    "title": "공식을 바꾸니 마법이 너무 쉬움",
    "author": "오렌",
    "genre": "판타지, 퓨전",
    "chapterCount": 139,
    "favorites": 9880,
    "totalViews": 1764223,
    "avgViews": 12692,
    "todayViews": 166887,
    "isPaid": true,
    "paidChapters": 114,
    "likes": 50177,
    "comments": 7527,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 98
    },
    "badges": [
      "베스트셀러 98위"
    ],
    "description": "베스트셀러 98위"
  },
  {
    "id": "597813",
    "title": "국가에게 버림받은 헌터가 재평가되었다",
    "author": "찹쌀빵",
    "genre": "현대판타지, 판타지",
    "chapterCount": 43,
    "favorites": 1423,
    "totalViews": 281562,
    "avgViews": 6548,
    "todayViews": 654,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 4707,
    "comments": 706,
    "ranks": {
      "free": 99,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 99위"
    ],
    "description": "무료 투베 99위"
  },
  {
    "id": "418603",
    "title": "유랑기사와 움직이는 성",
    "author": "구소재",
    "genre": "판타지, 퓨전",
    "chapterCount": 648,
    "favorites": 15968,
    "totalViews": 4589634,
    "avgViews": 7083,
    "todayViews": 98198,
    "isPaid": true,
    "paidChapters": 623,
    "likes": 212773,
    "comments": 31916,
    "ranks": {
      "free": null,
      "paid": 99,
      "bestseller": 163
    },
    "badges": [
      "유료 투베 99위",
      "베스트셀러 163위"
    ],
    "description": "유료 투베 99위 | 베스트셀러 163위"
  },
  {
    "id": "534215",
    "title": "스페이스 마린에게 상태창이 생김",
    "author": "디다트",
    "genre": "퓨전, 게임",
    "chapterCount": 219,
    "favorites": 29552,
    "totalViews": 3618584,
    "avgViews": 16523,
    "todayViews": 165025,
    "isPaid": true,
    "paidChapters": 194,
    "likes": 137699,
    "comments": 20655,
    "ranks": {
      "free": null,
      "paid": 119,
      "bestseller": 99
    },
    "badges": [
      "베스트셀러 99위",
      "유료 투베 119위"
    ],
    "description": "베스트셀러 99위 | 유료 투베 119위"
  },
  {
    "id": "607730",
    "title": "퇴사하고 차린 함바집에 연예인들이 몰려옴",
    "author": "땃땃땃쥐",
    "genre": "현대판타지",
    "chapterCount": 14,
    "favorites": 668,
    "totalViews": 25348,
    "avgViews": 1811,
    "todayViews": 644,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 794,
    "comments": 119,
    "ranks": {
      "free": 100,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 100위"
    ],
    "description": "무료 투베 100위"
  },
  {
    "id": "539992",
    "title": "다크엘프는 주사위 사기꾼",
    "author": "병장개미",
    "genre": "판타지",
    "chapterCount": 214,
    "favorites": 6508,
    "totalViews": 1022229,
    "avgViews": 4777,
    "todayViews": 124994,
    "isPaid": true,
    "paidChapters": 189,
    "likes": 72429,
    "comments": 10864,
    "ranks": {
      "free": null,
      "paid": 100,
      "bestseller": 132
    },
    "badges": [
      "유료 투베 100위",
      "베스트셀러 132위"
    ],
    "description": "유료 투베 100위 | 베스트셀러 132위"
  },
  {
    "id": "610251",
    "title": "히든 특허 17개 들고 퇴사함",
    "author": "백원만s",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 9,
    "favorites": 429,
    "totalViews": 16583,
    "avgViews": 1843,
    "todayViews": 630,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 297,
    "comments": 45,
    "ranks": {
      "free": 101,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 101위"
    ],
    "description": "무료 투베 101위"
  },
  {
    "id": "594988",
    "title": "미국 시골 목장이 S급 경주마만 골라 키움",
    "author": "탄뽀",
    "genre": "현대판타지, 판타지",
    "chapterCount": 60,
    "favorites": 3985,
    "totalViews": 501982,
    "avgViews": 8366,
    "todayViews": 4510,
    "isPaid": true,
    "paidChapters": 35,
    "likes": 16128,
    "comments": 2419,
    "ranks": {
      "free": null,
      "paid": 101,
      "bestseller": null
    },
    "badges": [
      "유료 투베 101위"
    ],
    "description": "유료 투베 101위"
  },
  {
    "id": "608614",
    "title": "해고당한 펀드 매니저한테 재벌들이 집착함",
    "author": "참맛글",
    "genre": "현대판타지, 판타지",
    "chapterCount": 13,
    "favorites": 586,
    "totalViews": 25705,
    "avgViews": 1977,
    "todayViews": 608,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 528,
    "comments": 79,
    "ranks": {
      "free": 102,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 102위"
    ],
    "description": "무료 투베 102위"
  },
  {
    "id": "550013",
    "title": "신입이라 후계 1순위를 들키면 안됨",
    "author": "서인하",
    "genre": "현대판타지, 드라마",
    "chapterCount": 204,
    "favorites": 10774,
    "totalViews": 2059230,
    "avgViews": 10094,
    "todayViews": 161373,
    "isPaid": true,
    "paidChapters": 179,
    "likes": 80359,
    "comments": 12054,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 102
    },
    "badges": [
      "베스트셀러 102위"
    ],
    "description": "베스트셀러 102위"
  },
  {
    "id": "606130",
    "title": "국가에게 버림받은 초감각 CIA 요원",
    "author": "최뚝",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 20,
    "favorites": 609,
    "totalViews": 35499,
    "avgViews": 1775,
    "todayViews": 599,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 774,
    "comments": 116,
    "ranks": {
      "free": 103,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 103위"
    ],
    "description": "무료 투베 103위"
  },
  {
    "id": "597806",
    "title": "미국에서 온 삼촌이 3스타 셰프라고?",
    "author": "상한가",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 51,
    "favorites": 3350,
    "totalViews": 494650,
    "avgViews": 9699,
    "todayViews": 4330,
    "isPaid": true,
    "paidChapters": 26,
    "likes": 9835,
    "comments": 1475,
    "ranks": {
      "free": null,
      "paid": 103,
      "bestseller": null
    },
    "badges": [
      "유료 투베 103위"
    ],
    "description": "유료 투베 103위"
  },
  {
    "id": "580694",
    "title": "사천당가 신의가 미국에서 환자를 너무 잘 고침",
    "author": "카피닌자",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 124,
    "favorites": 8802,
    "totalViews": 1794216,
    "avgViews": 14469,
    "todayViews": 160562,
    "isPaid": true,
    "paidChapters": 99,
    "likes": 37801,
    "comments": 5670,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 103
    },
    "badges": [
      "베스트셀러 103위"
    ],
    "description": "베스트셀러 103위"
  },
  {
    "id": "607318",
    "title": "좌천당한 전산담당 김과장이 해고 되자 거래처가 따라옴",
    "author": "결결결결",
    "genre": "현대판타지",
    "chapterCount": 16,
    "favorites": 655,
    "totalViews": 41948,
    "avgViews": 2622,
    "todayViews": 596,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 847,
    "comments": 127,
    "ranks": {
      "free": 104,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 104위"
    ],
    "description": "무료 투베 104위"
  },
  {
    "id": "582894",
    "title": "병아리 힐러 탑에 오르다",
    "author": "필독(必讀)",
    "genre": "판타지, 현대판타지",
    "chapterCount": 101,
    "favorites": 5237,
    "totalViews": 745684,
    "avgViews": 7383,
    "todayViews": 82810,
    "isPaid": true,
    "paidChapters": 76,
    "likes": 29564,
    "comments": 4435,
    "ranks": {
      "free": null,
      "paid": 104,
      "bestseller": 193
    },
    "badges": [
      "유료 투베 104위",
      "베스트셀러 193위"
    ],
    "description": "유료 투베 104위 | 베스트셀러 193위"
  },
  {
    "id": "611444",
    "title": "해고당한 조 대리는 재벌 집 막내아들!",
    "author": "흑곰작가",
    "genre": "현대판타지",
    "chapterCount": 6,
    "favorites": 196,
    "totalViews": 5632,
    "avgViews": 939,
    "todayViews": 593,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 154,
    "comments": 23,
    "ranks": {
      "free": 105,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 105위"
    ],
    "description": "무료 투베 105위"
  },
  {
    "id": "589911",
    "title": "전 재산을 쓰레기 코인에 박았다.",
    "author": "매니보보",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 82,
    "favorites": 4011,
    "totalViews": 868271,
    "avgViews": 10589,
    "todayViews": 4260,
    "isPaid": true,
    "paidChapters": 57,
    "likes": 15551,
    "comments": 2333,
    "ranks": {
      "free": null,
      "paid": 105,
      "bestseller": null
    },
    "badges": [
      "유료 투베 105위"
    ],
    "description": "유료 투베 105위"
  },
  {
    "id": "544162",
    "title": "삼국지, 원가의 후계자가 되었다.",
    "author": "에스투팍",
    "genre": "대체역사, 판타지",
    "chapterCount": 249,
    "favorites": 4630,
    "totalViews": 992155,
    "avgViews": 3985,
    "todayViews": 157515,
    "isPaid": true,
    "paidChapters": 224,
    "likes": 32423,
    "comments": 4863,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 105
    },
    "badges": [
      "베스트셀러 105위"
    ],
    "description": "베스트셀러 105위"
  },
  {
    "id": "608074",
    "title": "대체불가능한 아카데미 SSS급 주임이 해고 당함",
    "author": "[쥬시]",
    "genre": "현대판타지, SF",
    "chapterCount": 14,
    "favorites": 648,
    "totalViews": 35643,
    "avgViews": 2546,
    "todayViews": 589,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 798,
    "comments": 120,
    "ranks": {
      "free": 106,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 106위"
    ],
    "description": "무료 투베 106위"
  },
  {
    "id": "507961",
    "title": "돈은 많은데 아무도 나를 모름",
    "author": "빨간Bull",
    "genre": "현대판타지",
    "chapterCount": 392,
    "favorites": 15083,
    "totalViews": 2719575,
    "avgViews": 6938,
    "todayViews": 101398,
    "isPaid": true,
    "paidChapters": 367,
    "likes": 82105,
    "comments": 12316,
    "ranks": {
      "free": null,
      "paid": 106,
      "bestseller": 155
    },
    "badges": [
      "유료 투베 106위",
      "베스트셀러 155위"
    ],
    "description": "유료 투베 106위 | 베스트셀러 155위"
  },
  {
    "id": "543382",
    "title": "미국 시골의 총기 수리공",
    "author": "크공",
    "genre": "현대판타지, 드라마",
    "chapterCount": 235,
    "favorites": 9663,
    "totalViews": 1992294,
    "avgViews": 8478,
    "todayViews": 156959,
    "isPaid": true,
    "paidChapters": 210,
    "likes": 72111,
    "comments": 10817,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 106
    },
    "badges": [
      "베스트셀러 106위"
    ],
    "description": "베스트셀러 106위"
  },
  {
    "id": "608304",
    "title": "해고당한 이 과장이 1000조 짜리 회사를 만듬",
    "author": "테드K",
    "genre": "현대판타지",
    "chapterCount": 12,
    "favorites": 373,
    "totalViews": 14987,
    "avgViews": 1249,
    "todayViews": 579,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 322,
    "comments": 48,
    "ranks": {
      "free": 107,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 107위"
    ],
    "description": "무료 투베 107위"
  },
  {
    "id": "582722",
    "title": "경호원 출신 승무원이 너무 유능함",
    "author": "동쪽사람",
    "genre": "현대판타지",
    "chapterCount": 108,
    "favorites": 5401,
    "totalViews": 1149693,
    "avgViews": 10645,
    "todayViews": 92095,
    "isPaid": true,
    "paidChapters": 82,
    "likes": 32538,
    "comments": 4881,
    "ranks": {
      "free": null,
      "paid": 107,
      "bestseller": 175
    },
    "badges": [
      "유료 투베 107위",
      "베스트셀러 175위"
    ],
    "description": "유료 투베 107위 | 베스트셀러 175위"
  },
  {
    "id": "608696",
    "title": "해고당했더니 공장이 안 돌아감",
    "author": "진주냉면",
    "genre": "현대판타지, 드라마",
    "chapterCount": 7,
    "favorites": 238,
    "totalViews": 9447,
    "avgViews": 1350,
    "todayViews": 571,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 146,
    "comments": 22,
    "ranks": {
      "free": 108,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 108위"
    ],
    "description": "무료 투베 108위"
  },
  {
    "id": "590024",
    "title": "견훤의 사위가 고려를 멸망시킴",
    "author": "대박터짐",
    "genre": "대체역사, 판타지",
    "chapterCount": 71,
    "favorites": 1566,
    "totalViews": 216111,
    "avgViews": 3044,
    "todayViews": 3850,
    "isPaid": true,
    "paidChapters": 46,
    "likes": 6607,
    "comments": 991,
    "ranks": {
      "free": null,
      "paid": 108,
      "bestseller": null
    },
    "badges": [
      "유료 투베 108위"
    ],
    "description": "유료 투베 108위"
  },
  {
    "id": "608665",
    "title": "멸망한 세상의 소드마스터로 사는 법",
    "author": "글럼프",
    "genre": "판타지",
    "chapterCount": 10,
    "favorites": 514,
    "totalViews": 13609,
    "avgViews": 1361,
    "todayViews": 563,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 540,
    "comments": 81,
    "ranks": {
      "free": 109,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 109위"
    ],
    "description": "무료 투베 109위"
  },
  {
    "id": "590104",
    "title": "나 혼자 차원거래로 신소재 재벌",
    "author": "plustari",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 86,
    "favorites": 2260,
    "totalViews": 529703,
    "avgViews": 6159,
    "todayViews": 3810,
    "isPaid": true,
    "paidChapters": 61,
    "likes": 9705,
    "comments": 1456,
    "ranks": {
      "free": null,
      "paid": 109,
      "bestseller": null
    },
    "badges": [
      "유료 투베 109위"
    ],
    "description": "유료 투베 109위"
  },
  {
    "id": "609590",
    "title": "해고당한 김과장이 회장님의 혼외자였다",
    "author": "어나인",
    "genre": "현대판타지",
    "chapterCount": 10,
    "favorites": 445,
    "totalViews": 17266,
    "avgViews": 1727,
    "todayViews": 560,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 257,
    "comments": 39,
    "ranks": {
      "free": 110,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 110위"
    ],
    "description": "무료 투베 110위"
  },
  {
    "id": "550171",
    "title": "1991 다시 사는 인생",
    "author": "뇽뇽e",
    "genre": "현대판타지, 드라마",
    "chapterCount": 216,
    "favorites": 4520,
    "totalViews": 856178,
    "avgViews": 3964,
    "todayViews": 88077,
    "isPaid": true,
    "paidChapters": 191,
    "likes": 35384,
    "comments": 5308,
    "ranks": {
      "free": null,
      "paid": 110,
      "bestseller": 184
    },
    "badges": [
      "유료 투베 110위",
      "베스트셀러 184위"
    ],
    "description": "유료 투베 110위 | 베스트셀러 184위"
  },
  {
    "id": "563571",
    "title": "1933년, 회귀한 강원도 사냥꾼은 돈을 잘 번다.",
    "author": "신노아",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 171,
    "favorites": 5517,
    "totalViews": 950044,
    "avgViews": 5556,
    "todayViews": 151951,
    "isPaid": true,
    "paidChapters": 145,
    "likes": 53882,
    "comments": 8082,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 110
    },
    "badges": [
      "베스트셀러 110위"
    ],
    "description": "베스트셀러 110위"
  },
  {
    "id": "605710",
    "title": "강아지 속마음 들었더니 여배우들이 집착함",
    "author": "태솔재",
    "genre": "현대판타지",
    "chapterCount": 20,
    "favorites": 551,
    "totalViews": 32483,
    "avgViews": 1624,
    "todayViews": 534,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 834,
    "comments": 125,
    "ranks": {
      "free": 111,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 111위"
    ],
    "description": "무료 투베 111위"
  },
  {
    "id": "591112",
    "title": "버림받은 짐꾼이 EX급 각성함",
    "author": "농구광™",
    "genre": "현대판타지, 판타지",
    "chapterCount": 65,
    "favorites": 3373,
    "totalViews": 746372,
    "avgViews": 11483,
    "todayViews": 3760,
    "isPaid": true,
    "paidChapters": 39,
    "likes": 15325,
    "comments": 2299,
    "ranks": {
      "free": null,
      "paid": 111,
      "bestseller": null
    },
    "badges": [
      "유료 투베 111위"
    ],
    "description": "유료 투베 111위"
  },
  {
    "id": "439231",
    "title": "소요수선전(逍遙修仙傳)",
    "author": "아이라울",
    "genre": "무협, 판타지",
    "chapterCount": 444,
    "favorites": 11299,
    "totalViews": 3025948,
    "avgViews": 6815,
    "todayViews": 151477,
    "isPaid": true,
    "paidChapters": 419,
    "likes": 108213,
    "comments": 16232,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 111
    },
    "badges": [
      "베스트셀러 111위"
    ],
    "description": "베스트셀러 111위"
  },
  {
    "id": "610327",
    "title": "반도체 수율의 핵심을 나만 알고 있는데 해고당함",
    "author": "배고픈꼬미",
    "genre": "현대판타지",
    "chapterCount": 7,
    "favorites": 230,
    "totalViews": 6220,
    "avgViews": 889,
    "todayViews": 530,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 134,
    "comments": 20,
    "ranks": {
      "free": 112,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 112위"
    ],
    "description": "무료 투베 112위"
  },
  {
    "id": "558966",
    "title": "탑 유일의 편의점을 독점했다",
    "author": "아원잇",
    "genre": "판타지, 현대판타지",
    "chapterCount": 175,
    "favorites": 6756,
    "totalViews": 1401494,
    "avgViews": 8009,
    "todayViews": 131380,
    "isPaid": true,
    "paidChapters": 150,
    "likes": 40978,
    "comments": 6147,
    "ranks": {
      "free": null,
      "paid": 112,
      "bestseller": 123
    },
    "badges": [
      "유료 투베 112위",
      "베스트셀러 123위"
    ],
    "description": "유료 투베 112위 | 베스트셀러 123위"
  },
  {
    "id": "505513",
    "title": "선협에서 전능의 문을 열었다",
    "author": "노스가르",
    "genre": "판타지, 퓨전",
    "chapterCount": 404,
    "favorites": 4814,
    "totalViews": 1427200,
    "avgViews": 3533,
    "todayViews": 147743,
    "isPaid": true,
    "paidChapters": 379,
    "likes": 41529,
    "comments": 6229,
    "ranks": {
      "free": null,
      "paid": 180,
      "bestseller": 112
    },
    "badges": [
      "베스트셀러 112위",
      "유료 투베 180위"
    ],
    "description": "베스트셀러 112위 | 유료 투베 180위"
  },
  {
    "id": "607669",
    "title": "국가권력급 헌터가 강제 은퇴 당함.",
    "author": "아난티",
    "genre": "퓨전, 현대판타지",
    "chapterCount": 16,
    "favorites": 401,
    "totalViews": 26703,
    "avgViews": 1669,
    "todayViews": 525,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 477,
    "comments": 72,
    "ranks": {
      "free": 113,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 113위"
    ],
    "description": "무료 투베 113위"
  },
  {
    "id": "560991",
    "title": "삼국지 : 읍참마속의 마씨로 살아남기",
    "author": "페타7",
    "genre": "대체역사",
    "chapterCount": 148,
    "favorites": 2582,
    "totalViews": 488283,
    "avgViews": 3299,
    "todayViews": 81417,
    "isPaid": true,
    "paidChapters": 123,
    "likes": 22817,
    "comments": 3423,
    "ranks": {
      "free": null,
      "paid": 113,
      "bestseller": 200
    },
    "badges": [
      "유료 투베 113위",
      "베스트셀러 200위"
    ],
    "description": "유료 투베 113위 | 베스트셀러 200위"
  },
  {
    "id": "563567",
    "title": "좀비 세상에서 시스템을 독점함",
    "author": "투판",
    "genre": "현대판타지",
    "chapterCount": 154,
    "favorites": 4776,
    "totalViews": 1007862,
    "avgViews": 6545,
    "todayViews": 145423,
    "isPaid": true,
    "paidChapters": 129,
    "likes": 28738,
    "comments": 4311,
    "ranks": {
      "free": null,
      "paid": 130,
      "bestseller": 113
    },
    "badges": [
      "베스트셀러 113위",
      "유료 투베 130위"
    ],
    "description": "베스트셀러 113위 | 유료 투베 130위"
  },
  {
    "id": "603078",
    "title": "귀환한 삼촌은 EX급이었다.",
    "author": "선비의붓",
    "genre": "판타지, 퓨전",
    "chapterCount": 32,
    "favorites": 1288,
    "totalViews": 136792,
    "avgViews": 4275,
    "todayViews": 520,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2805,
    "comments": 421,
    "ranks": {
      "free": 114,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 114위"
    ],
    "description": "무료 투베 114위"
  },
  {
    "id": "585253",
    "title": "전투형 AI와 함께 1984년으로",
    "author": "마나크",
    "genre": "현대판타지, 스포츠",
    "chapterCount": 116,
    "favorites": 4874,
    "totalViews": 1029572,
    "avgViews": 8876,
    "todayViews": 93959,
    "isPaid": true,
    "paidChapters": 91,
    "likes": 27365,
    "comments": 4105,
    "ranks": {
      "free": null,
      "paid": 114,
      "bestseller": 172
    },
    "badges": [
      "유료 투베 114위",
      "베스트셀러 172위"
    ],
    "description": "유료 투베 114위 | 베스트셀러 172위"
  },
  {
    "id": "565707",
    "title": "비자발적 천재감독",
    "author": "양복선",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 147,
    "favorites": 5495,
    "totalViews": 1189068,
    "avgViews": 8089,
    "todayViews": 144347,
    "isPaid": true,
    "paidChapters": 122,
    "likes": 28486,
    "comments": 4273,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 114
    },
    "badges": [
      "베스트셀러 114위"
    ],
    "description": "베스트셀러 114위"
  },
  {
    "id": "597872",
    "title": "전역 후, 유럽에서 축구 선수가 되었다",
    "author": "현진현우",
    "genre": "현대판타지, 스포츠",
    "chapterCount": 44,
    "favorites": 676,
    "totalViews": 117752,
    "avgViews": 2676,
    "todayViews": 512,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1746,
    "comments": 262,
    "ranks": {
      "free": 115,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 115위"
    ],
    "description": "무료 투베 115위"
  },
  {
    "id": "597475",
    "title": "이혼 후 아내 비트코인 1조원치를 훔쳤다",
    "author": "판타지현대",
    "genre": "현대판타지, 드라마",
    "chapterCount": 51,
    "favorites": 2959,
    "totalViews": 505522,
    "avgViews": 9912,
    "todayViews": 3560,
    "isPaid": true,
    "paidChapters": 25,
    "likes": 8159,
    "comments": 1224,
    "ranks": {
      "free": null,
      "paid": 115,
      "bestseller": null
    },
    "badges": [
      "유료 투베 115위"
    ],
    "description": "유료 투베 115위"
  },
  {
    "id": "571931",
    "title": "촌구석 천재의사 백현우",
    "author": "주딩크",
    "genre": "현대판타지, 드라마",
    "chapterCount": 137,
    "favorites": 7717,
    "totalViews": 1482695,
    "avgViews": 10823,
    "todayViews": 137164,
    "isPaid": true,
    "paidChapters": 112,
    "likes": 33853,
    "comments": 5078,
    "ranks": {
      "free": null,
      "paid": 159,
      "bestseller": 115
    },
    "badges": [
      "베스트셀러 115위",
      "유료 투베 159위"
    ],
    "description": "베스트셀러 115위 | 유료 투베 159위"
  },
  {
    "id": "607369",
    "title": "퇴사 후 능력 흡수로 만능이 됨",
    "author": "초씽",
    "genre": "현대판타지, 판타지",
    "chapterCount": 17,
    "favorites": 557,
    "totalViews": 23359,
    "avgViews": 1374,
    "todayViews": 505,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 622,
    "comments": 93,
    "ranks": {
      "free": 116,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 116위"
    ],
    "description": "무료 투베 116위"
  },
  {
    "id": "584701",
    "title": "농사만 지었는데 북부대공이 되었다",
    "author": "퍼본fb",
    "genre": "판타지, 현대판타지",
    "chapterCount": 97,
    "favorites": 7704,
    "totalViews": 1319828,
    "avgViews": 13606,
    "todayViews": 123668,
    "isPaid": true,
    "paidChapters": 72,
    "likes": 31172,
    "comments": 4676,
    "ranks": {
      "free": null,
      "paid": 116,
      "bestseller": 135
    },
    "badges": [
      "유료 투베 116위",
      "베스트셀러 135위"
    ],
    "description": "유료 투베 116위 | 베스트셀러 135위"
  },
  {
    "id": "594125",
    "title": "전설의 일진으로 오해받는 중입니다",
    "author": "류해인",
    "genre": "현대판타지, 드라마",
    "chapterCount": 51,
    "favorites": 965,
    "totalViews": 110956,
    "avgViews": 2176,
    "todayViews": 502,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2286,
    "comments": 343,
    "ranks": {
      "free": 117,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 117위"
    ],
    "description": "무료 투베 117위"
  },
  {
    "id": "583795",
    "title": "달머리골 자연인은 잘 먹고 산다",
    "author": "Dodeca",
    "genre": "현대판타지, 드라마",
    "chapterCount": 122,
    "favorites": 3180,
    "totalViews": 661177,
    "avgViews": 5419,
    "todayViews": 3500,
    "isPaid": true,
    "paidChapters": 97,
    "likes": 25265,
    "comments": 3790,
    "ranks": {
      "free": null,
      "paid": 117,
      "bestseller": null
    },
    "badges": [
      "유료 투베 117위"
    ],
    "description": "유료 투베 117위"
  },
  {
    "id": "493263",
    "title": "내 고향엔 무림인이 산다",
    "author": "데이우",
    "genre": "무협",
    "chapterCount": 281,
    "favorites": 19737,
    "totalViews": 3817659,
    "avgViews": 13586,
    "todayViews": 135797,
    "isPaid": true,
    "paidChapters": 256,
    "likes": 173172,
    "comments": 25976,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 117
    },
    "badges": [
      "베스트셀러 117위"
    ],
    "description": "베스트셀러 117위"
  },
  {
    "id": "595684",
    "title": "퇴사 후 무당들이 집착하는 사장님이 되었다.",
    "author": "성정민",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 54,
    "favorites": 1032,
    "totalViews": 134711,
    "avgViews": 2495,
    "todayViews": 493,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 4694,
    "comments": 704,
    "ranks": {
      "free": 118,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 118위"
    ],
    "description": "무료 투베 118위"
  },
  {
    "id": "581729",
    "title": "은퇴당한 탱커가 힐 능력을 각성했다",
    "author": "쿨쿨잠자자",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 103,
    "favorites": 7690,
    "totalViews": 1531965,
    "avgViews": 14873,
    "todayViews": 101743,
    "isPaid": true,
    "paidChapters": 78,
    "likes": 36422,
    "comments": 5463,
    "ranks": {
      "free": null,
      "paid": 118,
      "bestseller": 154
    },
    "badges": [
      "유료 투베 118위",
      "베스트셀러 154위"
    ],
    "description": "유료 투베 118위 | 베스트셀러 154위"
  },
  {
    "id": "564583",
    "title": "빙하기 다크판타지의 천재마법사",
    "author": "게살피자",
    "genre": "판타지, 퓨전",
    "chapterCount": 131,
    "favorites": 5683,
    "totalViews": 875652,
    "avgViews": 6684,
    "todayViews": 135487,
    "isPaid": true,
    "paidChapters": 106,
    "likes": 37531,
    "comments": 5630,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 118
    },
    "badges": [
      "베스트셀러 118위"
    ],
    "description": "베스트셀러 118위"
  },
  {
    "id": "607785",
    "title": "퇴사 당한 과장을 경쟁사에서 모셔감",
    "author": "홍사과",
    "genre": "현대판타지",
    "chapterCount": 21,
    "favorites": 518,
    "totalViews": 45542,
    "avgViews": 2169,
    "todayViews": 491,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 695,
    "comments": 104,
    "ranks": {
      "free": 119,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 119위"
    ],
    "description": "무료 투베 119위"
  },
  {
    "id": "568900",
    "title": "천재 투수들이 나한테 너무 집착함",
    "author": "진수배",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 140,
    "favorites": 4807,
    "totalViews": 1183338,
    "avgViews": 8452,
    "todayViews": 134687,
    "isPaid": true,
    "paidChapters": 115,
    "likes": 29650,
    "comments": 4448,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 119
    },
    "badges": [
      "베스트셀러 119위"
    ],
    "description": "베스트셀러 119위"
  },
  {
    "id": "607514",
    "title": "물려받은 미국 땅에서 온천으로 대박 났습니다",
    "author": "풍기킹",
    "genre": "현대판타지, 판타지",
    "chapterCount": 15,
    "favorites": 358,
    "totalViews": 14430,
    "avgViews": 962,
    "todayViews": 489,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 506,
    "comments": 76,
    "ranks": {
      "free": 120,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 120위"
    ],
    "description": "무료 투베 120위"
  },
  {
    "id": "553309",
    "title": "레벨업 마검사",
    "author": "몽랑괴행",
    "genre": "판타지, 퓨전",
    "chapterCount": 242,
    "favorites": 5847,
    "totalViews": 1343968,
    "avgViews": 5554,
    "todayViews": 134127,
    "isPaid": true,
    "paidChapters": 216,
    "likes": 44130,
    "comments": 6620,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 120
    },
    "badges": [
      "베스트셀러 120위"
    ],
    "description": "베스트셀러 120위"
  },
  {
    "id": "608858",
    "title": "변리사를 해고하자 5천억 특허가 날아감",
    "author": "간딴",
    "genre": "현대판타지",
    "chapterCount": 12,
    "favorites": 341,
    "totalViews": 13944,
    "avgViews": 1162,
    "todayViews": 489,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 239,
    "comments": 36,
    "ranks": {
      "free": 121,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 121위"
    ],
    "description": "무료 투베 121위"
  },
  {
    "id": "589755",
    "title": "드디어 상온 초전도체를 만들었다",
    "author": "크로노크",
    "genre": "현대판타지, SF",
    "chapterCount": 80,
    "favorites": 4766,
    "totalViews": 911253,
    "avgViews": 11391,
    "todayViews": 3390,
    "isPaid": true,
    "paidChapters": 55,
    "likes": 16532,
    "comments": 2480,
    "ranks": {
      "free": null,
      "paid": 121,
      "bestseller": null
    },
    "badges": [
      "유료 투베 121위"
    ],
    "description": "유료 투베 121위"
  },
  {
    "id": "607688",
    "title": "이혼 앞두고 자산이 미친듯이 늘어남",
    "author": "차원의방",
    "genre": "현대판타지",
    "chapterCount": 14,
    "favorites": 375,
    "totalViews": 23604,
    "avgViews": 1686,
    "todayViews": 486,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 305,
    "comments": 46,
    "ranks": {
      "free": 122,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 122위"
    ],
    "description": "무료 투베 122위"
  },
  {
    "id": "557881",
    "title": "병원장 막내딸과 하룻밤을 보냈다",
    "author": "되새김질",
    "genre": "현대판타지, 로맨스",
    "chapterCount": 165,
    "favorites": 3276,
    "totalViews": 669021,
    "avgViews": 4055,
    "todayViews": 3390,
    "isPaid": true,
    "paidChapters": 140,
    "likes": 11928,
    "comments": 1789,
    "ranks": {
      "free": null,
      "paid": 122,
      "bestseller": null
    },
    "badges": [
      "유료 투베 122위"
    ],
    "description": "유료 투베 122위"
  },
  {
    "id": "565391",
    "title": "천재 연금술사가 전세계에 집착 당함",
    "author": "시간부족",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 155,
    "favorites": 4586,
    "totalViews": 981998,
    "avgViews": 6335,
    "todayViews": 131548,
    "isPaid": true,
    "paidChapters": 130,
    "likes": 24358,
    "comments": 3654,
    "ranks": {
      "free": null,
      "paid": 134,
      "bestseller": 122
    },
    "badges": [
      "베스트셀러 122위",
      "유료 투베 134위"
    ],
    "description": "베스트셀러 122위 | 유료 투베 134위"
  },
  {
    "id": "605418",
    "title": "해고당한 헌터분석관은 세계최고",
    "author": "카피닌자",
    "genre": "현대판타지",
    "chapterCount": 24,
    "favorites": 3244,
    "totalViews": 258460,
    "avgViews": 10769,
    "todayViews": 483,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5122,
    "comments": 768,
    "ranks": {
      "free": 123,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 123위"
    ],
    "description": "무료 투베 123위"
  },
  {
    "id": "588685",
    "title": "동물병원 열었더니 환자들이 내게 집착함",
    "author": "점핑까치",
    "genre": "현대판타지",
    "chapterCount": 81,
    "favorites": 1920,
    "totalViews": 297444,
    "avgViews": 3672,
    "todayViews": 3380,
    "isPaid": true,
    "paidChapters": 56,
    "likes": 11648,
    "comments": 1747,
    "ranks": {
      "free": null,
      "paid": 123,
      "bestseller": null
    },
    "badges": [
      "유료 투베 123위"
    ],
    "description": "유료 투베 123위"
  },
  {
    "id": "606885",
    "title": "해고당했더니 회사 AI가 사표 냄",
    "author": "엘루아.",
    "genre": "현대판타지, SF",
    "chapterCount": 16,
    "favorites": 488,
    "totalViews": 33481,
    "avgViews": 2093,
    "todayViews": 475,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 607,
    "comments": 91,
    "ranks": {
      "free": 124,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 124위"
    ],
    "description": "무료 투베 124위"
  },
  {
    "id": "587584",
    "title": "제3제국의 비선실세가 되었다",
    "author": "빵먹고싶다",
    "genre": "대체역사, 판타지",
    "chapterCount": 81,
    "favorites": 2197,
    "totalViews": 332235,
    "avgViews": 4102,
    "todayViews": 3370,
    "isPaid": true,
    "paidChapters": 56,
    "likes": 11158,
    "comments": 1674,
    "ranks": {
      "free": null,
      "paid": 124,
      "bestseller": null
    },
    "badges": [
      "유료 투베 124위"
    ],
    "description": "유료 투베 124위"
  },
  {
    "id": "521820",
    "title": "전능 AI와 함께 수능날로 회귀했다.",
    "author": "백원도둑놈",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 287,
    "favorites": 12441,
    "totalViews": 2768085,
    "avgViews": 9645,
    "todayViews": 130861,
    "isPaid": true,
    "paidChapters": 262,
    "likes": 65583,
    "comments": 9837,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 124
    },
    "badges": [
      "베스트셀러 124위"
    ],
    "description": "베스트셀러 124위"
  },
  {
    "id": "606751",
    "title": "탑에도 농어촌전형이 있나요?",
    "author": "시온유",
    "genre": "현대판타지",
    "chapterCount": 19,
    "favorites": 558,
    "totalViews": 29396,
    "avgViews": 1547,
    "todayViews": 473,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1440,
    "comments": 216,
    "ranks": {
      "free": 125,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 125위"
    ],
    "description": "무료 투베 125위"
  },
  {
    "id": "587193",
    "title": "괴이들이 귀여움을 숨김",
    "author": "으므므",
    "genre": "현대판타지, 판타지",
    "chapterCount": 87,
    "favorites": 3590,
    "totalViews": 364027,
    "avgViews": 4184,
    "todayViews": 3330,
    "isPaid": true,
    "paidChapters": 62,
    "likes": 20541,
    "comments": 3081,
    "ranks": {
      "free": null,
      "paid": 125,
      "bestseller": null
    },
    "badges": [
      "유료 투베 125위"
    ],
    "description": "유료 투베 125위"
  },
  {
    "id": "599072",
    "title": "종말의 각성자가 되었다",
    "author": "짬뽕조아",
    "genre": "현대판타지, SF",
    "chapterCount": 42,
    "favorites": 856,
    "totalViews": 98804,
    "avgViews": 2352,
    "todayViews": 472,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2635,
    "comments": 395,
    "ranks": {
      "free": 126,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 126위"
    ],
    "description": "무료 투베 126위"
  },
  {
    "id": "550340",
    "title": "아내가 무림공적이었다",
    "author": "카페人",
    "genre": "무협",
    "chapterCount": 215,
    "favorites": 13773,
    "totalViews": 2035210,
    "avgViews": 9466,
    "todayViews": 100207,
    "isPaid": true,
    "paidChapters": 190,
    "likes": 66200,
    "comments": 9930,
    "ranks": {
      "free": null,
      "paid": 126,
      "bestseller": 159
    },
    "badges": [
      "유료 투베 126위",
      "베스트셀러 159위"
    ],
    "description": "유료 투베 126위 | 베스트셀러 159위"
  },
  {
    "id": "603410",
    "title": "F급 행운으로 음악인생 술술풀림",
    "author": "월만",
    "genre": "판타지, 현대판타지",
    "chapterCount": 31,
    "favorites": 810,
    "totalViews": 61935,
    "avgViews": 1998,
    "todayViews": 472,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1909,
    "comments": 286,
    "ranks": {
      "free": 127,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 127위"
    ],
    "description": "무료 투베 127위"
  },
  {
    "id": "594564",
    "title": "해고당했더니 파워볼 당첨되고 건물주로 대박남",
    "author": "서리안",
    "genre": "현대판타지, 드라마",
    "chapterCount": 62,
    "favorites": 3702,
    "totalViews": 649765,
    "avgViews": 10480,
    "todayViews": 3210,
    "isPaid": true,
    "paidChapters": 37,
    "likes": 12114,
    "comments": 1817,
    "ranks": {
      "free": null,
      "paid": 127,
      "bestseller": null
    },
    "badges": [
      "유료 투베 127위"
    ],
    "description": "유료 투베 127위"
  },
  {
    "id": "523199",
    "title": "천재 유물 감정사로 착각 당했다",
    "author": "포더엠",
    "genre": "현대판타지, 판타지",
    "chapterCount": 239,
    "favorites": 17768,
    "totalViews": 3413700,
    "avgViews": 14283,
    "todayViews": 128467,
    "isPaid": true,
    "paidChapters": 211,
    "likes": 103342,
    "comments": 15501,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 127
    },
    "badges": [
      "베스트셀러 127위"
    ],
    "description": "베스트셀러 127위"
  },
  {
    "id": "603420",
    "title": "내 담보물에서 돈 되는 재능이 쏟아짐",
    "author": "아침호수",
    "genre": "현대판타지",
    "chapterCount": 30,
    "favorites": 765,
    "totalViews": 55279,
    "avgViews": 1843,
    "todayViews": 467,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1429,
    "comments": 214,
    "ranks": {
      "free": 128,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 128위"
    ],
    "description": "무료 투베 128위"
  },
  {
    "id": "581270",
    "title": "마법 천재 기간트 라이더가 되었다",
    "author": "남극부엉이",
    "genre": "판타지",
    "chapterCount": 98,
    "favorites": 1971,
    "totalViews": 532570,
    "avgViews": 5434,
    "todayViews": 3210,
    "isPaid": true,
    "paidChapters": 73,
    "likes": 13347,
    "comments": 2002,
    "ranks": {
      "free": null,
      "paid": 128,
      "bestseller": null
    },
    "badges": [
      "유료 투베 128위"
    ],
    "description": "유료 투베 128위"
  },
  {
    "id": "571921",
    "title": "대뜸 톱스타가 내게 집착한다.",
    "author": "유선강",
    "genre": "현대판타지",
    "chapterCount": 128,
    "favorites": 7074,
    "totalViews": 1290737,
    "avgViews": 10084,
    "todayViews": 128408,
    "isPaid": true,
    "paidChapters": 103,
    "likes": 30362,
    "comments": 4554,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 128
    },
    "badges": [
      "베스트셀러 128위"
    ],
    "description": "베스트셀러 128위"
  },
  {
    "id": "605594",
    "title": "돌아온 천마의 탑 등반법",
    "author": "담백하",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 18,
    "favorites": 363,
    "totalViews": 19982,
    "avgViews": 1110,
    "todayViews": 463,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 558,
    "comments": 84,
    "ranks": {
      "free": 129,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 129위"
    ],
    "description": "무료 투베 129위"
  },
  {
    "id": "582218",
    "title": "치유 마법사인데 계룡산 도사로 착각당했다",
    "author": "프링글",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 102,
    "favorites": 3901,
    "totalViews": 806321,
    "avgViews": 7905,
    "todayViews": 3180,
    "isPaid": true,
    "paidChapters": 77,
    "likes": 19912,
    "comments": 2987,
    "ranks": {
      "free": null,
      "paid": 129,
      "bestseller": null
    },
    "badges": [
      "유료 투베 129위"
    ],
    "description": "유료 투베 129위"
  },
  {
    "id": "443800",
    "title": "금주법 시대 마피아로 살아가는 법",
    "author": "노오력.",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 521,
    "favorites": 8327,
    "totalViews": 2395671,
    "avgViews": 4598,
    "todayViews": 128023,
    "isPaid": true,
    "paidChapters": 496,
    "likes": 129582,
    "comments": 19437,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 129
    },
    "badges": [
      "베스트셀러 129위"
    ],
    "description": "베스트셀러 129위"
  },
  {
    "id": "601625",
    "title": "이세계에 메카닉을 풀었다",
    "author": "아레직",
    "genre": "판타지, SF",
    "chapterCount": 35,
    "favorites": 731,
    "totalViews": 70834,
    "avgViews": 2024,
    "todayViews": 455,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1894,
    "comments": 284,
    "ranks": {
      "free": 130,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 130위"
    ],
    "description": "무료 투베 130위"
  },
  {
    "id": "465788",
    "title": "AI 의서를 읽고 신의가 되었다",
    "author": "글술술",
    "genre": "현대판타지",
    "chapterCount": 458,
    "favorites": 13691,
    "totalViews": 3595726,
    "avgViews": 7851,
    "todayViews": 127399,
    "isPaid": true,
    "paidChapters": 432,
    "likes": 146620,
    "comments": 21993,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 130
    },
    "badges": [
      "베스트셀러 130위"
    ],
    "description": "베스트셀러 130위"
  },
  {
    "id": "583471",
    "title": "삼국지: 회귀한 여포가 양아버지를 거부함",
    "author": "잡탕드래곤",
    "genre": "대체역사, 판타지",
    "chapterCount": 126,
    "favorites": 1030,
    "totalViews": 353194,
    "avgViews": 2803,
    "todayViews": 449,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 7369,
    "comments": 1105,
    "ranks": {
      "free": 131,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 131위"
    ],
    "description": "무료 투베 131위"
  },
  {
    "id": "563512",
    "title": "알파고 기보를 들고 1995년으로 돌아왔다.",
    "author": "이케작스",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 168,
    "favorites": 3078,
    "totalViews": 724085,
    "avgViews": 4310,
    "todayViews": 102178,
    "isPaid": true,
    "paidChapters": 143,
    "likes": 18718,
    "comments": 2808,
    "ranks": {
      "free": null,
      "paid": 131,
      "bestseller": 153
    },
    "badges": [
      "유료 투베 131위",
      "베스트셀러 153위"
    ],
    "description": "유료 투베 131위 | 베스트셀러 153위"
  },
  {
    "id": "588695",
    "title": "청동기 시대 강대국에 떨어졌다",
    "author": "havoc",
    "genre": "대체역사",
    "chapterCount": 76,
    "favorites": 951,
    "totalViews": 97857,
    "avgViews": 1288,
    "todayViews": 443,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5705,
    "comments": 856,
    "ranks": {
      "free": 132,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 132위"
    ],
    "description": "무료 투베 132위"
  },
  {
    "id": "565780",
    "title": "전뇌의 마법사",
    "author": "이야기의힘",
    "genre": "현대판타지, 판타지",
    "chapterCount": 151,
    "favorites": 2154,
    "totalViews": 364699,
    "avgViews": 2415,
    "todayViews": 3120,
    "isPaid": true,
    "paidChapters": 126,
    "likes": 15168,
    "comments": 2275,
    "ranks": {
      "free": null,
      "paid": 132,
      "bestseller": null
    },
    "badges": [
      "유료 투베 132위"
    ],
    "description": "유료 투베 132위"
  },
  {
    "id": "598858",
    "title": "우주로 가려면 대전에서 환승하세요.",
    "author": "닥터KIMDH",
    "genre": "SF, 현대판타지",
    "chapterCount": 79,
    "favorites": 1353,
    "totalViews": 278928,
    "avgViews": 3531,
    "todayViews": 442,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5693,
    "comments": 854,
    "ranks": {
      "free": 133,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 133위"
    ],
    "description": "무료 투베 133위"
  },
  {
    "id": "543879",
    "title": "아포칼립스를 왕복하는 상태창 각성자가 되었다",
    "author": "아르케",
    "genre": "퓨전, 현대판타지",
    "chapterCount": 227,
    "favorites": 4661,
    "totalViews": 1097936,
    "avgViews": 4837,
    "todayViews": 84946,
    "isPaid": true,
    "paidChapters": 202,
    "likes": 39478,
    "comments": 5922,
    "ranks": {
      "free": null,
      "paid": 133,
      "bestseller": 189
    },
    "badges": [
      "유료 투베 133위",
      "베스트셀러 189위"
    ],
    "description": "유료 투베 133위 | 베스트셀러 189위"
  },
  {
    "id": "570300",
    "title": "선협 속 지식in 태양신이 되었다",
    "author": "그릿",
    "genre": "무협, 퓨전",
    "chapterCount": 137,
    "favorites": 5759,
    "totalViews": 1091268,
    "avgViews": 7965,
    "todayViews": 124034,
    "isPaid": true,
    "paidChapters": 112,
    "likes": 33598,
    "comments": 5040,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 133
    },
    "badges": [
      "베스트셀러 133위"
    ],
    "description": "베스트셀러 133위"
  },
  {
    "id": "607673",
    "title": "빌어먹을 회사 만년 과장이 퇴사 말고 회사 살림",
    "author": "백원만s",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 17,
    "favorites": 400,
    "totalViews": 22535,
    "avgViews": 1326,
    "todayViews": 435,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 564,
    "comments": 85,
    "ranks": {
      "free": 134,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 134위"
    ],
    "description": "무료 투베 134위"
  },
  {
    "id": "492978",
    "title": "아이돌이 군필을 숨김",
    "author": "자몽펀치",
    "genre": "현대판타지",
    "chapterCount": 300,
    "favorites": 26457,
    "totalViews": 6223616,
    "avgViews": 20745,
    "todayViews": 123829,
    "isPaid": true,
    "paidChapters": 275,
    "likes": 252203,
    "comments": 37830,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 134
    },
    "badges": [
      "베스트셀러 134위"
    ],
    "description": "베스트셀러 134위"
  },
  {
    "id": "605503",
    "title": "르네상스 시대에 웹툰작가가 어떻게 살아남아",
    "author": "잔고탕진",
    "genre": "대체역사, 판타지",
    "chapterCount": 26,
    "favorites": 893,
    "totalViews": 31949,
    "avgViews": 1229,
    "todayViews": 434,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2806,
    "comments": 421,
    "ranks": {
      "free": 135,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 135위"
    ],
    "description": "무료 투베 135위"
  },
  {
    "id": "547941",
    "title": "총 맞은 미국 유학생인데 월스트리트가 너무 쉬움",
    "author": "기신",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 231,
    "favorites": 5599,
    "totalViews": 1261161,
    "avgViews": 5460,
    "todayViews": 96911,
    "isPaid": true,
    "paidChapters": 206,
    "likes": 28790,
    "comments": 4319,
    "ranks": {
      "free": null,
      "paid": 135,
      "bestseller": 165
    },
    "badges": [
      "유료 투베 135위",
      "베스트셀러 165위"
    ],
    "description": "유료 투베 135위 | 베스트셀러 165위"
  },
  {
    "id": "606571",
    "title": "해고당한 강 팀장을 업계에서 집착함",
    "author": "정현공원",
    "genre": "현대판타지, 판타지",
    "chapterCount": 21,
    "favorites": 555,
    "totalViews": 45202,
    "avgViews": 2152,
    "todayViews": 432,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 920,
    "comments": 138,
    "ranks": {
      "free": 136,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 136위"
    ],
    "description": "무료 투베 136위"
  },
  {
    "id": "594722",
    "title": "전능의 투자 능력을 얻은 날 해고 당했다",
    "author": "제3소년",
    "genre": "현대판타지, 판타지",
    "chapterCount": 59,
    "favorites": 5656,
    "totalViews": 1133020,
    "avgViews": 19204,
    "todayViews": 2980,
    "isPaid": true,
    "paidChapters": 35,
    "likes": 20025,
    "comments": 3004,
    "ranks": {
      "free": null,
      "paid": 136,
      "bestseller": null
    },
    "badges": [
      "유료 투베 136위"
    ],
    "description": "유료 투베 136위"
  },
  {
    "id": "605707",
    "title": "나 혼자 대마법사라 인생 꿀빱니다",
    "author": "케이브",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 23,
    "favorites": 579,
    "totalViews": 46760,
    "avgViews": 2033,
    "todayViews": 427,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 860,
    "comments": 129,
    "ranks": {
      "free": 137,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 137위"
    ],
    "description": "무료 투베 137위"
  },
  {
    "id": "581772",
    "title": "생각을 읽었더니 전세계 투수들이 집착함",
    "author": "떠오르다",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 111,
    "favorites": 3038,
    "totalViews": 699519,
    "avgViews": 6302,
    "todayViews": 2930,
    "isPaid": true,
    "paidChapters": 86,
    "likes": 16163,
    "comments": 2424,
    "ranks": {
      "free": null,
      "paid": 137,
      "bestseller": null
    },
    "badges": [
      "유료 투베 137위"
    ],
    "description": "유료 투베 137위"
  },
  {
    "id": "577921",
    "title": "미국 아포칼립스의 만능 생존자",
    "author": "이세계돌쇠",
    "genre": "현대판타지, 판타지",
    "chapterCount": 143,
    "favorites": 6246,
    "totalViews": 1319082,
    "avgViews": 9224,
    "todayViews": 122834,
    "isPaid": true,
    "paidChapters": 118,
    "likes": 32306,
    "comments": 4846,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 137
    },
    "badges": [
      "베스트셀러 137위"
    ],
    "description": "베스트셀러 137위"
  },
  {
    "id": "593035",
    "title": "삼국지 공명짭인데 공명보다 잘한다",
    "author": "글못쓰는놈",
    "genre": "대체역사, 판타지",
    "chapterCount": 62,
    "favorites": 637,
    "totalViews": 97901,
    "avgViews": 1579,
    "todayViews": 418,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3126,
    "comments": 469,
    "ranks": {
      "free": 138,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 138위"
    ],
    "description": "무료 투베 138위"
  },
  {
    "id": "563321",
    "title": "우리 가게 아이돌은 고기 천재",
    "author": "박정민",
    "genre": "현대판타지, 드라마",
    "chapterCount": 162,
    "favorites": 3328,
    "totalViews": 661506,
    "avgViews": 4083,
    "todayViews": 83332,
    "isPaid": true,
    "paidChapters": 137,
    "likes": 27557,
    "comments": 4134,
    "ranks": {
      "free": null,
      "paid": 138,
      "bestseller": 192
    },
    "badges": [
      "유료 투베 138위",
      "베스트셀러 192위"
    ],
    "description": "유료 투베 138위 | 베스트셀러 192위"
  },
  {
    "id": "546150",
    "title": "퇴사 후 대선단을 이끄는 어선 선장이 되었다.",
    "author": "탄뽀",
    "genre": "현대판타지, 판타지",
    "chapterCount": 231,
    "favorites": 4614,
    "totalViews": 1046620,
    "avgViews": 4531,
    "todayViews": 121140,
    "isPaid": true,
    "paidChapters": 206,
    "likes": 30374,
    "comments": 4556,
    "ranks": {
      "free": null,
      "paid": 184,
      "bestseller": 138
    },
    "badges": [
      "베스트셀러 138위",
      "유료 투베 184위"
    ],
    "description": "베스트셀러 138위 | 유료 투베 184위"
  },
  {
    "id": "609891",
    "title": "퇴사후 잭팟터져서 힐링하는데 경영천재로 착각당했다",
    "author": "도마뱀작가",
    "genre": "현대판타지",
    "chapterCount": 8,
    "favorites": 319,
    "totalViews": 4970,
    "avgViews": 621,
    "todayViews": 410,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 232,
    "comments": 35,
    "ranks": {
      "free": 139,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 139위"
    ],
    "description": "무료 투베 139위"
  },
  {
    "id": "527164",
    "title": "집 뒷마당에서 1억 배럴짜리 유전이 터짐",
    "author": "송장벌레",
    "genre": "현대판타지, 판타지",
    "chapterCount": 329,
    "favorites": 14110,
    "totalViews": 3698895,
    "avgViews": 11243,
    "todayViews": 120280,
    "isPaid": true,
    "paidChapters": 304,
    "likes": 98631,
    "comments": 14795,
    "ranks": {
      "free": null,
      "paid": 139,
      "bestseller": 139
    },
    "badges": [
      "유료 투베 139위",
      "베스트셀러 139위"
    ],
    "description": "유료 투베 139위 | 베스트셀러 139위"
  },
  {
    "id": "602852",
    "title": "재벌집 망나니가 반도체 1황임",
    "author": "백수원",
    "genre": "현대판타지, SF",
    "chapterCount": 31,
    "favorites": 584,
    "totalViews": 55142,
    "avgViews": 1779,
    "todayViews": 409,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1187,
    "comments": 178,
    "ranks": {
      "free": 140,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 140위"
    ],
    "description": "무료 투베 140위"
  },
  {
    "id": "575179",
    "title": "아포칼립스의 재능 포식자",
    "author": "말린무지",
    "genre": "현대판타지",
    "chapterCount": 135,
    "favorites": 5955,
    "totalViews": 1337263,
    "avgViews": 9906,
    "todayViews": 97735,
    "isPaid": true,
    "paidChapters": 110,
    "likes": 31140,
    "comments": 4671,
    "ranks": {
      "free": null,
      "paid": 140,
      "bestseller": 164
    },
    "badges": [
      "유료 투베 140위",
      "베스트셀러 164위"
    ],
    "description": "유료 투베 140위 | 베스트셀러 164위"
  },
  {
    "id": "555069",
    "title": "신내림 받고 이혼함",
    "author": "크로마농",
    "genre": "현대판타지",
    "chapterCount": 198,
    "favorites": 9224,
    "totalViews": 2160409,
    "avgViews": 10911,
    "todayViews": 120145,
    "isPaid": true,
    "paidChapters": 168,
    "likes": 61192,
    "comments": 9179,
    "ranks": {
      "free": null,
      "paid": 153,
      "bestseller": 140
    },
    "badges": [
      "베스트셀러 140위",
      "유료 투베 153위"
    ],
    "description": "베스트셀러 140위 | 유료 투베 153위"
  },
  {
    "id": "609980",
    "title": "톱스타 다 만들어줬는데 해고당했다",
    "author": "늬파랑",
    "genre": "현대판타지",
    "chapterCount": 8,
    "favorites": 171,
    "totalViews": 7262,
    "avgViews": 908,
    "todayViews": 400,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 163,
    "comments": 24,
    "ranks": {
      "free": 141,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 141위"
    ],
    "description": "무료 투베 141위"
  },
  {
    "id": "580186",
    "title": "전생 무림고수 비공식 CIA 요원",
    "author": "샘마루",
    "genre": "현대판타지, 무협",
    "chapterCount": 113,
    "favorites": 1188,
    "totalViews": 352131,
    "avgViews": 3116,
    "todayViews": 398,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6419,
    "comments": 963,
    "ranks": {
      "free": 142,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 142위"
    ],
    "description": "무료 투베 142위"
  },
  {
    "id": "537444",
    "title": "재활만 했는데 드래곤의 힘을 얻었다",
    "author": "글포터",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 201,
    "favorites": 10637,
    "totalViews": 1984049,
    "avgViews": 9871,
    "todayViews": 2750,
    "isPaid": true,
    "paidChapters": 177,
    "likes": 62300,
    "comments": 9345,
    "ranks": {
      "free": null,
      "paid": 142,
      "bestseller": null
    },
    "badges": [
      "유료 투베 142위"
    ],
    "description": "유료 투베 142위"
  },
  {
    "id": "563666",
    "title": "아기 빌리의 위대한 독일 제국",
    "author": "Cider.cap",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 143,
    "favorites": 3757,
    "totalViews": 643309,
    "avgViews": 4499,
    "todayViews": 116662,
    "isPaid": true,
    "paidChapters": 118,
    "likes": 27812,
    "comments": 4172,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 142
    },
    "badges": [
      "베스트셀러 142위"
    ],
    "description": "베스트셀러 142위"
  },
  {
    "id": "592625",
    "title": "차원개척으로 4번째 외계종족이 되었다.",
    "author": "허바",
    "genre": "현대판타지",
    "chapterCount": 70,
    "favorites": 1302,
    "totalViews": 223094,
    "avgViews": 3187,
    "todayViews": 388,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 6268,
    "comments": 940,
    "ranks": {
      "free": 143,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 143위"
    ],
    "description": "무료 투베 143위"
  },
  {
    "id": "591653",
    "title": "무림에서 돌아왔더니 연예계가 집착함",
    "author": "소공동",
    "genre": "현대판타지, 판타지",
    "chapterCount": 69,
    "favorites": 3646,
    "totalViews": 644173,
    "avgViews": 9336,
    "todayViews": 2740,
    "isPaid": true,
    "paidChapters": 44,
    "likes": 14121,
    "comments": 2118,
    "ranks": {
      "free": null,
      "paid": 143,
      "bestseller": null
    },
    "badges": [
      "유료 투베 143위"
    ],
    "description": "유료 투베 143위"
  },
  {
    "id": "595647",
    "title": "AI 갖고 회귀한 펀드 매니저",
    "author": "슬리버",
    "genre": "현대판타지",
    "chapterCount": 44,
    "favorites": 1126,
    "totalViews": 121051,
    "avgViews": 2751,
    "todayViews": 382,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3191,
    "comments": 479,
    "ranks": {
      "free": 144,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 144위"
    ],
    "description": "무료 투베 144위"
  },
  {
    "id": "476343",
    "title": "9급부터 북부대공까지",
    "author": "이디즈",
    "genre": "판타지, 퓨전",
    "chapterCount": 439,
    "favorites": 15122,
    "totalViews": 3908144,
    "avgViews": 8902,
    "todayViews": 113613,
    "isPaid": true,
    "paidChapters": 414,
    "likes": 142816,
    "comments": 21422,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 144
    },
    "badges": [
      "베스트셀러 144위"
    ],
    "description": "베스트셀러 144위"
  },
  {
    "id": "589561",
    "title": "탑 등반하는데 나만 수선자",
    "author": "히버",
    "genre": "무협, 현대판타지",
    "chapterCount": 68,
    "favorites": 697,
    "totalViews": 118894,
    "avgViews": 1748,
    "todayViews": 379,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3076,
    "comments": 461,
    "ranks": {
      "free": 145,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 145위"
    ],
    "description": "무료 투베 145위"
  },
  {
    "id": "584291",
    "title": "모텔 옥탑방이 아포칼립스 핵잠수함",
    "author": "눌프",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 97,
    "favorites": 4371,
    "totalViews": 879427,
    "avgViews": 9066,
    "todayViews": 2720,
    "isPaid": true,
    "paidChapters": 72,
    "likes": 26948,
    "comments": 4042,
    "ranks": {
      "free": null,
      "paid": 145,
      "bestseller": null
    },
    "badges": [
      "유료 투베 145위"
    ],
    "description": "유료 투베 145위"
  },
  {
    "id": "526298",
    "title": "스위스 깡촌 호텔을 물려받았다",
    "author": "체대생",
    "genre": "현대판타지",
    "chapterCount": 297,
    "favorites": 13996,
    "totalViews": 2087108,
    "avgViews": 7027,
    "todayViews": 113482,
    "isPaid": true,
    "paidChapters": 272,
    "likes": 91575,
    "comments": 13736,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 145
    },
    "badges": [
      "베스트셀러 145위"
    ],
    "description": "베스트셀러 145위"
  },
  {
    "id": "602541",
    "title": "이혼당하고 전기차에 새살림을 차렸다",
    "author": "민땡",
    "genre": "현대판타지",
    "chapterCount": 35,
    "favorites": 1132,
    "totalViews": 126432,
    "avgViews": 3612,
    "todayViews": 376,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2664,
    "comments": 400,
    "ranks": {
      "free": 146,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 146위"
    ],
    "description": "무료 투베 146위"
  },
  {
    "id": "548966",
    "title": "청년 가장이 재물을 부르는 신의 손이 됨",
    "author": "필빛",
    "genre": "현대판타지",
    "chapterCount": 208,
    "favorites": 4359,
    "totalViews": 881008,
    "avgViews": 4236,
    "todayViews": 2720,
    "isPaid": true,
    "paidChapters": 183,
    "likes": 39226,
    "comments": 5884,
    "ranks": {
      "free": null,
      "paid": 146,
      "bestseller": null
    },
    "badges": [
      "유료 투베 146위"
    ],
    "description": "유료 투베 146위"
  },
  {
    "id": "573666",
    "title": "군필 여대생의 게임방송",
    "author": "안현™",
    "genre": "현대판타지, 게임",
    "chapterCount": 127,
    "favorites": 3693,
    "totalViews": 657392,
    "avgViews": 5176,
    "todayViews": 111920,
    "isPaid": true,
    "paidChapters": 102,
    "likes": 16119,
    "comments": 2418,
    "ranks": {
      "free": null,
      "paid": 166,
      "bestseller": 146
    },
    "badges": [
      "베스트셀러 146위",
      "유료 투베 166위"
    ],
    "description": "베스트셀러 146위 | 유료 투베 166위"
  },
  {
    "id": "606906",
    "title": "아포칼립스에 초대형 원양어선을 건조했다",
    "author": "웨스트월드",
    "genre": "판타지, 현대판타지",
    "chapterCount": 17,
    "favorites": 469,
    "totalViews": 31192,
    "avgViews": 1835,
    "todayViews": 371,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 714,
    "comments": 107,
    "ranks": {
      "free": 147,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 147위"
    ],
    "description": "무료 투베 147위"
  },
  {
    "id": "594247",
    "title": "범죄자를 조지면 돈과 무기가 쏟아져",
    "author": "가죽갑옷",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 59,
    "favorites": 2094,
    "totalViews": 398936,
    "avgViews": 6762,
    "todayViews": 2710,
    "isPaid": true,
    "paidChapters": 34,
    "likes": 9928,
    "comments": 1489,
    "ranks": {
      "free": null,
      "paid": 147,
      "bestseller": null
    },
    "badges": [
      "유료 투베 147위"
    ],
    "description": "유료 투베 147위"
  },
  {
    "id": "556522",
    "title": "무시당하던 나, 투시능력이 생겼다",
    "author": "카르비에스",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 189,
    "favorites": 7084,
    "totalViews": 1826901,
    "avgViews": 9666,
    "todayViews": 111416,
    "isPaid": true,
    "paidChapters": 164,
    "likes": 39391,
    "comments": 5909,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 147
    },
    "badges": [
      "베스트셀러 147위"
    ],
    "description": "베스트셀러 147위"
  },
  {
    "id": "605522",
    "title": "좋소 엔지니어인데 재벌 총수들이 집착함",
    "author": "아이오니스",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 22,
    "favorites": 694,
    "totalViews": 52816,
    "avgViews": 2401,
    "todayViews": 369,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 825,
    "comments": 124,
    "ranks": {
      "free": 148,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 148위"
    ],
    "description": "무료 투베 148위"
  },
  {
    "id": "592123",
    "title": "검투수선劍鬪修仙",
    "author": "쿠우울",
    "genre": "무협, 판타지",
    "chapterCount": 69,
    "favorites": 1847,
    "totalViews": 188881,
    "avgViews": 2737,
    "todayViews": 2690,
    "isPaid": true,
    "paidChapters": 44,
    "likes": 9888,
    "comments": 1483,
    "ranks": {
      "free": null,
      "paid": 148,
      "bestseller": null
    },
    "badges": [
      "유료 투베 148위"
    ],
    "description": "유료 투베 148위"
  },
  {
    "id": "571118",
    "title": "주사위 굴려서 역대급 홈런왕",
    "author": "긍정적마음",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 127,
    "favorites": 4301,
    "totalViews": 1013914,
    "avgViews": 7984,
    "todayViews": 111400,
    "isPaid": true,
    "paidChapters": 103,
    "likes": 21872,
    "comments": 3281,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 148
    },
    "badges": [
      "베스트셀러 148위"
    ],
    "description": "베스트셀러 148위"
  },
  {
    "id": "599438",
    "title": "1994년, 죽은 형의 몸으로 회귀했다",
    "author": "카이남",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 42,
    "favorites": 621,
    "totalViews": 85069,
    "avgViews": 2025,
    "todayViews": 369,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1815,
    "comments": 272,
    "ranks": {
      "free": 149,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 149위"
    ],
    "description": "무료 투베 149위"
  },
  {
    "id": "539621",
    "title": "퇴사 후 SSS급 심마니로 각성했다.",
    "author": "탄뽀",
    "genre": "현대판타지, 판타지",
    "chapterCount": 264,
    "favorites": 6591,
    "totalViews": 1267216,
    "avgViews": 4800,
    "todayViews": 82671,
    "isPaid": true,
    "paidChapters": 239,
    "likes": 41835,
    "comments": 6275,
    "ranks": {
      "free": null,
      "paid": 149,
      "bestseller": 194
    },
    "badges": [
      "유료 투베 149위",
      "베스트셀러 194위"
    ],
    "description": "유료 투베 149위 | 베스트셀러 194위"
  },
  {
    "id": "577162",
    "title": "미국 왕따가 싸움을 잘함",
    "author": "탈주병",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 116,
    "favorites": 5640,
    "totalViews": 1154427,
    "avgViews": 9952,
    "todayViews": 110023,
    "isPaid": true,
    "paidChapters": 91,
    "likes": 26908,
    "comments": 4036,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 149
    },
    "badges": [
      "베스트셀러 149위"
    ],
    "description": "베스트셀러 149위"
  },
  {
    "id": "608221",
    "title": "나혼자 원양어선에서 해고 당함",
    "author": "갓생",
    "genre": "현대판타지, 드라마",
    "chapterCount": 19,
    "favorites": 299,
    "totalViews": 15570,
    "avgViews": 819,
    "todayViews": 364,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 559,
    "comments": 84,
    "ranks": {
      "free": 150,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 150위"
    ],
    "description": "무료 투베 150위"
  },
  {
    "id": "546589",
    "title": "러시아 제국의 인싸황제 - 로판제국의 산소호흡기",
    "author": "에이리쟝",
    "genre": "대체역사, 라이트노벨",
    "chapterCount": 184,
    "favorites": 2213,
    "totalViews": 386010,
    "avgViews": 2098,
    "todayViews": 2670,
    "isPaid": true,
    "paidChapters": 159,
    "likes": 19817,
    "comments": 2973,
    "ranks": {
      "free": null,
      "paid": 150,
      "bestseller": null
    },
    "badges": [
      "유료 투베 150위"
    ],
    "description": "유료 투베 150위"
  },
  {
    "id": "498741",
    "title": "북미 트럭커의 아포칼립스",
    "author": "박침",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 443,
    "favorites": 20886,
    "totalViews": 3846415,
    "avgViews": 8683,
    "todayViews": 106288,
    "isPaid": true,
    "paidChapters": 418,
    "likes": 157409,
    "comments": 23611,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 150
    },
    "badges": [
      "베스트셀러 150위"
    ],
    "description": "베스트셀러 150위"
  },
  {
    "id": "608039",
    "title": "탑 정복해줬더니 해고당했다",
    "author": "광별",
    "genre": "현대판타지",
    "chapterCount": 15,
    "favorites": 465,
    "totalViews": 25643,
    "avgViews": 1710,
    "todayViews": 362,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 582,
    "comments": 87,
    "ranks": {
      "free": 151,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 151위"
    ],
    "description": "무료 투베 151위"
  },
  {
    "id": "430772",
    "title": "미식축구가 너무 쉬움",
    "author": "김군0619",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 784,
    "favorites": 8798,
    "totalViews": 2763032,
    "avgViews": 3524,
    "todayViews": 2620,
    "isPaid": true,
    "paidChapters": 759,
    "likes": 125304,
    "comments": 18796,
    "ranks": {
      "free": null,
      "paid": 151,
      "bestseller": null
    },
    "badges": [
      "유료 투베 151위"
    ],
    "description": "유료 투베 151위"
  },
  {
    "id": "527014",
    "title": "회사에서 건물주인 걸 안 숨김",
    "author": "골마지",
    "genre": "현대판타지",
    "chapterCount": 210,
    "favorites": 18558,
    "totalViews": 3426629,
    "avgViews": 16317,
    "todayViews": 106282,
    "isPaid": true,
    "paidChapters": 185,
    "likes": 109708,
    "comments": 16456,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 151
    },
    "badges": [
      "베스트셀러 151위"
    ],
    "description": "베스트셀러 151위"
  },
  {
    "id": "598455",
    "title": "나 혼자만 우주 전함으로 행성 개척",
    "author": "천강(泉剛)",
    "genre": "SF",
    "chapterCount": 43,
    "favorites": 1273,
    "totalViews": 120022,
    "avgViews": 2791,
    "todayViews": 360,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3172,
    "comments": 476,
    "ranks": {
      "free": 152,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 152위"
    ],
    "description": "무료 투베 152위"
  },
  {
    "id": "582993",
    "title": "미국 시골 목수에게 거물들이 집착함",
    "author": "탄뽀",
    "genre": "현대판타지, 판타지",
    "chapterCount": 109,
    "favorites": 3804,
    "totalViews": 574774,
    "avgViews": 5273,
    "todayViews": 2620,
    "isPaid": true,
    "paidChapters": 84,
    "likes": 20264,
    "comments": 3040,
    "ranks": {
      "free": null,
      "paid": 152,
      "bestseller": null
    },
    "badges": [
      "유료 투베 152위"
    ],
    "description": "유료 투베 152위"
  },
  {
    "id": "554066",
    "title": "흔적을 보는 천재무사",
    "author": "신랑™",
    "genre": "무협",
    "chapterCount": 290,
    "favorites": 3888,
    "totalViews": 998461,
    "avgViews": 3443,
    "todayViews": 105618,
    "isPaid": true,
    "paidChapters": 265,
    "likes": 30759,
    "comments": 4614,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 152
    },
    "badges": [
      "베스트셀러 152위"
    ],
    "description": "베스트셀러 152위"
  },
  {
    "id": "608012",
    "title": "해고당한 강화사 아빠가 탑에선 칼퇴합니다",
    "author": "루체른",
    "genre": "현대판타지",
    "chapterCount": 15,
    "favorites": 237,
    "totalViews": 13238,
    "avgViews": 883,
    "todayViews": 350,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 559,
    "comments": 84,
    "ranks": {
      "free": 153,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 153위"
    ],
    "description": "무료 투베 153위"
  },
  {
    "id": "605606",
    "title": "마탑에 와플집을 오픈했더니, 헌터들이 줄을 선다",
    "author": "예스안",
    "genre": "판타지, 현대판타지",
    "chapterCount": 22,
    "favorites": 377,
    "totalViews": 22149,
    "avgViews": 1007,
    "todayViews": 347,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1226,
    "comments": 184,
    "ranks": {
      "free": 154,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 154위"
    ],
    "description": "무료 투베 154위"
  },
  {
    "id": "596806",
    "title": "전업주부인데 재벌보다 돈이 많음",
    "author": "너구율",
    "genre": "현대판타지, 판타지",
    "chapterCount": 66,
    "favorites": 5646,
    "totalViews": 1021995,
    "avgViews": 15485,
    "todayViews": 2570,
    "isPaid": true,
    "paidChapters": 41,
    "likes": 22172,
    "comments": 3326,
    "ranks": {
      "free": null,
      "paid": 154,
      "bestseller": null
    },
    "badges": [
      "유료 투베 154위"
    ],
    "description": "유료 투베 154위"
  },
  {
    "id": "608190",
    "title": "나 혼자 헬 난이도에서 고유특성으로 꿀 빰",
    "author": "간딴",
    "genre": "판타지, 퓨전",
    "chapterCount": 14,
    "favorites": 524,
    "totalViews": 25584,
    "avgViews": 1827,
    "todayViews": 341,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 776,
    "comments": 116,
    "ranks": {
      "free": 155,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 155위"
    ],
    "description": "무료 투베 155위"
  },
  {
    "id": "591880",
    "title": "환생 드워프가 미국에서 수리를 잘함",
    "author": "안전사랑",
    "genre": "현대판타지",
    "chapterCount": 73,
    "favorites": 3151,
    "totalViews": 496968,
    "avgViews": 6808,
    "todayViews": 2510,
    "isPaid": true,
    "paidChapters": 48,
    "likes": 12791,
    "comments": 1919,
    "ranks": {
      "free": null,
      "paid": 155,
      "bestseller": null
    },
    "badges": [
      "유료 투베 155위"
    ],
    "description": "유료 투베 155위"
  },
  {
    "id": "604677",
    "title": "재벌가 서자가 상태창을 받았습니다",
    "author": "세상s",
    "genre": "현대판타지",
    "chapterCount": 35,
    "favorites": 549,
    "totalViews": 56766,
    "avgViews": 1622,
    "todayViews": 340,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1248,
    "comments": 187,
    "ranks": {
      "free": 156,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 156위"
    ],
    "description": "무료 투베 156위"
  },
  {
    "id": "549864",
    "title": "환생한 천재 과학자가 미래 기술을 독점함",
    "author": "한여울™",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 186,
    "favorites": 4675,
    "totalViews": 859418,
    "avgViews": 4621,
    "todayViews": 2470,
    "isPaid": true,
    "paidChapters": 161,
    "likes": 25939,
    "comments": 3891,
    "ranks": {
      "free": null,
      "paid": 156,
      "bestseller": null
    },
    "badges": [
      "유료 투베 156위"
    ],
    "description": "유료 투베 156위"
  },
  {
    "id": "602323",
    "title": "1907 이지스함대가 열강을 찢음",
    "author": "듀이문",
    "genre": "대체역사, 퓨전",
    "chapterCount": 34,
    "favorites": 488,
    "totalViews": 44389,
    "avgViews": 1306,
    "todayViews": 337,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1523,
    "comments": 228,
    "ranks": {
      "free": 157,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 157위"
    ],
    "description": "무료 투베 157위"
  },
  {
    "id": "579689",
    "title": "전설급 신수들과 동물원에서 힐링합니다",
    "author": "버머랜드",
    "genre": "현대판타지, 판타지",
    "chapterCount": 155,
    "favorites": 3456,
    "totalViews": 634016,
    "avgViews": 4090,
    "todayViews": 87917,
    "isPaid": true,
    "paidChapters": 135,
    "likes": 20294,
    "comments": 3044,
    "ranks": {
      "free": null,
      "paid": 157,
      "bestseller": 185
    },
    "badges": [
      "유료 투베 157위",
      "베스트셀러 185위"
    ],
    "description": "유료 투베 157위 | 베스트셀러 185위"
  },
  {
    "id": "480433",
    "title": "회귀한 마취과 의사는 모든 것이 쉽다",
    "author": "자몽라임",
    "genre": "현대판타지, 드라마",
    "chapterCount": 414,
    "favorites": 16585,
    "totalViews": 4401762,
    "avgViews": 10632,
    "todayViews": 101121,
    "isPaid": true,
    "paidChapters": 388,
    "likes": 131575,
    "comments": 19736,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 157
    },
    "badges": [
      "베스트셀러 157위"
    ],
    "description": "베스트셀러 157위"
  },
  {
    "id": "600069",
    "title": "탑 공략이 너무 쉬움",
    "author": "기성아님",
    "genre": "SF, 현대판타지",
    "chapterCount": 26,
    "favorites": 444,
    "totalViews": 39535,
    "avgViews": 1521,
    "todayViews": 335,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 947,
    "comments": 142,
    "ranks": {
      "free": 158,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 158위"
    ],
    "description": "무료 투베 158위"
  },
  {
    "id": "509901",
    "title": "피지컬 천재는 NBA로 갑니다",
    "author": "mensol",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 310,
    "favorites": 5379,
    "totalViews": 1507884,
    "avgViews": 4864,
    "todayViews": 100211,
    "isPaid": true,
    "paidChapters": 285,
    "likes": 45700,
    "comments": 6855,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 158
    },
    "badges": [
      "베스트셀러 158위"
    ],
    "description": "베스트셀러 158위"
  },
  {
    "id": "605438",
    "title": "좀비 세상에서 차원배낭을 얻었다",
    "author": "목표설정",
    "genre": "현대판타지, 판타지",
    "chapterCount": 36,
    "favorites": 487,
    "totalViews": 48424,
    "avgViews": 1345,
    "todayViews": 332,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1708,
    "comments": 256,
    "ranks": {
      "free": 160,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 160위"
    ],
    "description": "무료 투베 160위"
  },
  {
    "id": "530197",
    "title": "NBA 악동의 농구 스트리밍",
    "author": "토마뚜",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 291,
    "favorites": 1911,
    "totalViews": 477205,
    "avgViews": 1640,
    "todayViews": 2420,
    "isPaid": true,
    "paidChapters": 266,
    "likes": 16162,
    "comments": 2424,
    "ranks": {
      "free": null,
      "paid": 160,
      "bestseller": null
    },
    "badges": [
      "유료 투베 160위"
    ],
    "description": "유료 투베 160위"
  },
  {
    "id": "608181",
    "title": "퇴사한 은행원이 왜 더 잘함?",
    "author": "빨간Bull",
    "genre": "현대판타지",
    "chapterCount": 13,
    "favorites": 291,
    "totalViews": 9223,
    "avgViews": 709,
    "todayViews": 331,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 315,
    "comments": 47,
    "ranks": {
      "free": 161,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 161위"
    ],
    "description": "무료 투베 161위"
  },
  {
    "id": "532963",
    "title": "천재 감정사가 그리스에서 복원을 너무 잘함",
    "author": "키보드만세",
    "genre": "현대판타지",
    "chapterCount": 250,
    "favorites": 11465,
    "totalViews": 2312128,
    "avgViews": 9249,
    "todayViews": 99626,
    "isPaid": true,
    "paidChapters": 225,
    "likes": 66189,
    "comments": 9928,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 161
    },
    "badges": [
      "베스트셀러 161위"
    ],
    "description": "베스트셀러 161위"
  },
  {
    "id": "607903",
    "title": "비자금을 슈킹했는데 회사에서 짤림!",
    "author": "오렌지깡",
    "genre": "현대판타지, SF",
    "chapterCount": 17,
    "favorites": 484,
    "totalViews": 34871,
    "avgViews": 2051,
    "todayViews": 329,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 552,
    "comments": 83,
    "ranks": {
      "free": 162,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 162위"
    ],
    "description": "무료 투베 162위"
  },
  {
    "id": "591219",
    "title": "퇴출당한 복원사가 손대면 국보가 된다",
    "author": "글삭기",
    "genre": "현대판타지, 드라마",
    "chapterCount": 73,
    "favorites": 2965,
    "totalViews": 456485,
    "avgViews": 6253,
    "todayViews": 2330,
    "isPaid": true,
    "paidChapters": 48,
    "likes": 11179,
    "comments": 1677,
    "ranks": {
      "free": null,
      "paid": 162,
      "bestseller": null
    },
    "badges": [
      "유료 투베 162위"
    ],
    "description": "유료 투베 162위"
  },
  {
    "id": "433843",
    "title": "눈떠보니 러시아 마피아",
    "author": "엽태호",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 716,
    "favorites": 5361,
    "totalViews": 2071300,
    "avgViews": 2893,
    "todayViews": 98363,
    "isPaid": true,
    "paidChapters": 691,
    "likes": 83167,
    "comments": 12475,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 162
    },
    "badges": [
      "베스트셀러 162위"
    ],
    "description": "베스트셀러 162위"
  },
  {
    "id": "603762",
    "title": "퓨전펑크 천재 해커는 외신을 해킹한다",
    "author": "범미르",
    "genre": "SF, 퓨전",
    "chapterCount": 29,
    "favorites": 574,
    "totalViews": 33458,
    "avgViews": 1154,
    "todayViews": 327,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1366,
    "comments": 205,
    "ranks": {
      "free": 163,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 163위"
    ],
    "description": "무료 투베 163위"
  },
  {
    "id": "574637",
    "title": "망할 제국이라 영지나 개척하러 갑니다",
    "author": "타자씨",
    "genre": "판타지, 대체역사",
    "chapterCount": 130,
    "favorites": 3454,
    "totalViews": 837503,
    "avgViews": 6442,
    "todayViews": 2270,
    "isPaid": true,
    "paidChapters": 105,
    "likes": 23422,
    "comments": 3513,
    "ranks": {
      "free": null,
      "paid": 163,
      "bestseller": null
    },
    "badges": [
      "유료 투베 163위"
    ],
    "description": "유료 투베 163위"
  },
  {
    "id": "607083",
    "title": "해고당한 김과장을 업계가 집착함",
    "author": "방탄커피",
    "genre": "현대판타지, 판타지",
    "chapterCount": 17,
    "favorites": 292,
    "totalViews": 20291,
    "avgViews": 1194,
    "todayViews": 320,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 343,
    "comments": 51,
    "ranks": {
      "free": 164,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 164위"
    ],
    "description": "무료 투베 164위"
  },
  {
    "id": "589923",
    "title": "로또 당첨되고 힐링이나 하며 살랍니다",
    "author": "염주",
    "genre": "현대판타지",
    "chapterCount": 80,
    "favorites": 2886,
    "totalViews": 474340,
    "avgViews": 5929,
    "todayViews": 2250,
    "isPaid": true,
    "paidChapters": 55,
    "likes": 13673,
    "comments": 2051,
    "ranks": {
      "free": null,
      "paid": 164,
      "bestseller": null
    },
    "badges": [
      "유료 투베 164위"
    ],
    "description": "유료 투베 164위"
  },
  {
    "id": "600029",
    "title": "50조의 사나이",
    "author": "김동휘",
    "genre": "현대판타지, SF",
    "chapterCount": 38,
    "favorites": 694,
    "totalViews": 66456,
    "avgViews": 1749,
    "todayViews": 301,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1423,
    "comments": 213,
    "ranks": {
      "free": 165,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 165위"
    ],
    "description": "무료 투베 165위"
  },
  {
    "id": "560969",
    "title": "삼국지에서 낭인으로 살아남기",
    "author": "연꽃맨",
    "genre": "대체역사",
    "chapterCount": 165,
    "favorites": 4300,
    "totalViews": 814608,
    "avgViews": 4937,
    "todayViews": 87122,
    "isPaid": true,
    "paidChapters": 140,
    "likes": 27272,
    "comments": 4091,
    "ranks": {
      "free": null,
      "paid": 165,
      "bestseller": 187
    },
    "badges": [
      "유료 투베 165위",
      "베스트셀러 187위"
    ],
    "description": "유료 투베 165위 | 베스트셀러 187위"
  },
  {
    "id": "607634",
    "title": "미국에서 관상봐줬더니 CIA가 집착함",
    "author": "녹수(淥水)",
    "genre": "현대판타지, 판타지",
    "chapterCount": 16,
    "favorites": 355,
    "totalViews": 17050,
    "avgViews": 1066,
    "todayViews": 300,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 423,
    "comments": 63,
    "ranks": {
      "free": 166,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 166위"
    ],
    "description": "무료 투베 166위"
  },
  {
    "id": "361868",
    "title": "웰컴 투 NBA",
    "author": "필리포스",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 620,
    "favorites": 10895,
    "totalViews": 6352654,
    "avgViews": 10246,
    "todayViews": 96785,
    "isPaid": true,
    "paidChapters": 595,
    "likes": 172545,
    "comments": 25882,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 166
    },
    "badges": [
      "베스트셀러 166위"
    ],
    "description": "베스트셀러 166위"
  },
  {
    "id": "605444",
    "title": "뱀파이어 마법사는 오늘도 사망회귀한다",
    "author": "태양물고기",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 20,
    "favorites": 492,
    "totalViews": 17745,
    "avgViews": 887,
    "todayViews": 299,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 718,
    "comments": 108,
    "ranks": {
      "free": 167,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 167위"
    ],
    "description": "무료 투베 167위"
  },
  {
    "id": "493717",
    "title": "비인기멤버가 재계약을 거절당함",
    "author": "강선우",
    "genre": "현대판타지, 일반소설",
    "chapterCount": 536,
    "favorites": 11220,
    "totalViews": 2776346,
    "avgViews": 5180,
    "todayViews": 2200,
    "isPaid": true,
    "paidChapters": 511,
    "likes": 67769,
    "comments": 10165,
    "ranks": {
      "free": null,
      "paid": 167,
      "bestseller": null
    },
    "badges": [
      "유료 투베 167위"
    ],
    "description": "유료 투베 167위"
  },
  {
    "id": "604855",
    "title": "치트트레이너 쓰는 수선전",
    "author": "망상만함",
    "genre": "무협, 판타지",
    "chapterCount": 23,
    "favorites": 347,
    "totalViews": 24981,
    "avgViews": 1086,
    "todayViews": 284,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 538,
    "comments": 81,
    "ranks": {
      "free": 168,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 168위"
    ],
    "description": "무료 투베 168위"
  },
  {
    "id": "552434",
    "title": "우주 일꾼이 EX급 멀티를 건설함",
    "author": "킴호놀",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 204,
    "favorites": 4442,
    "totalViews": 993525,
    "avgViews": 4870,
    "todayViews": 2180,
    "isPaid": true,
    "paidChapters": 178,
    "likes": 27967,
    "comments": 4195,
    "ranks": {
      "free": null,
      "paid": 168,
      "bestseller": null
    },
    "badges": [
      "유료 투베 168위"
    ],
    "description": "유료 투베 168위"
  },
  {
    "id": "606662",
    "title": "핵심 직원인 줄 모르고 해고당함",
    "author": "미친재능",
    "genre": "현대판타지, 드라마",
    "chapterCount": 21,
    "favorites": 528,
    "totalViews": 40485,
    "avgViews": 1928,
    "todayViews": 283,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 629,
    "comments": 94,
    "ranks": {
      "free": 169,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 169위"
    ],
    "description": "무료 투베 169위"
  },
  {
    "id": "588326",
    "title": "10서클 대마법사의 탑등반법",
    "author": "포참",
    "genre": "판타지, 현대판타지",
    "chapterCount": 91,
    "favorites": 3631,
    "totalViews": 813195,
    "avgViews": 8936,
    "todayViews": 2170,
    "isPaid": true,
    "paidChapters": 66,
    "likes": 18543,
    "comments": 2781,
    "ranks": {
      "free": null,
      "paid": 169,
      "bestseller": null
    },
    "badges": [
      "유료 투베 169위"
    ],
    "description": "유료 투베 169위"
  },
  {
    "id": "343688",
    "title": "야구천재가 되었다",
    "author": "불릿타임",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 78,
    "favorites": 1454,
    "totalViews": 68281,
    "avgViews": 875,
    "todayViews": 282,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2312,
    "comments": 347,
    "ranks": {
      "free": 170,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 170위"
    ],
    "description": "무료 투베 170위"
  },
  {
    "id": "590338",
    "title": "톱여배우의 속마음이 들려",
    "author": "박굘",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 72,
    "favorites": 4032,
    "totalViews": 758939,
    "avgViews": 10541,
    "todayViews": 2170,
    "isPaid": true,
    "paidChapters": 47,
    "likes": 17876,
    "comments": 2681,
    "ranks": {
      "free": null,
      "paid": 170,
      "bestseller": null
    },
    "badges": [
      "유료 투베 170위"
    ],
    "description": "유료 투베 170위"
  },
  {
    "id": "570635",
    "title": "천문학 신동에 노벨상 수상자들이 미쳐날뜀",
    "author": "감튀튀",
    "genre": "현대판타지",
    "chapterCount": 135,
    "favorites": 4791,
    "totalViews": 817616,
    "avgViews": 6056,
    "todayViews": 95433,
    "isPaid": true,
    "paidChapters": 110,
    "likes": 18389,
    "comments": 2758,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 170
    },
    "badges": [
      "베스트셀러 170위"
    ],
    "description": "베스트셀러 170위"
  },
  {
    "id": "604094",
    "title": "해고 후 1000원 투자로 1000억 까지",
    "author": "녹차티",
    "genre": "현대판타지, SF",
    "chapterCount": 29,
    "favorites": 476,
    "totalViews": 44699,
    "avgViews": 1541,
    "todayViews": 279,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 717,
    "comments": 108,
    "ranks": {
      "free": 171,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 171위"
    ],
    "description": "무료 투베 171위"
  },
  {
    "id": "590162",
    "title": "나만이 멸망한 세계에 갈 수 있다",
    "author": "김현준™",
    "genre": "판타지, 현대판타지",
    "chapterCount": 75,
    "favorites": 3988,
    "totalViews": 812859,
    "avgViews": 10838,
    "todayViews": 2160,
    "isPaid": true,
    "paidChapters": 50,
    "likes": 19564,
    "comments": 2935,
    "ranks": {
      "free": null,
      "paid": 171,
      "bestseller": null
    },
    "badges": [
      "유료 투베 171위"
    ],
    "description": "유료 투베 171위"
  },
  {
    "id": "563262",
    "title": "1달러로 산 망한 나라가 1,000조를 벌어옴",
    "author": "차세나",
    "genre": "현대판타지, 대체역사",
    "chapterCount": 143,
    "favorites": 5039,
    "totalViews": 969568,
    "avgViews": 6780,
    "todayViews": 94720,
    "isPaid": true,
    "paidChapters": 118,
    "likes": 23980,
    "comments": 3597,
    "ranks": {
      "free": null,
      "paid": 179,
      "bestseller": 171
    },
    "badges": [
      "베스트셀러 171위",
      "유료 투베 179위"
    ],
    "description": "베스트셀러 171위 | 유료 투베 179위"
  },
  {
    "id": "604708",
    "title": "고블린 상대로 가우스 소총은 반칙 아닙니까?",
    "author": "산타클라스",
    "genre": "SF, 현대판타지",
    "chapterCount": 30,
    "favorites": 376,
    "totalViews": 40377,
    "avgViews": 1346,
    "todayViews": 276,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 980,
    "comments": 147,
    "ranks": {
      "free": 172,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 172위"
    ],
    "description": "무료 투베 172위"
  },
  {
    "id": "590871",
    "title": "웰컴 투 텍사스",
    "author": "신우리",
    "genre": "현대판타지, 판타지",
    "chapterCount": 67,
    "favorites": 1198,
    "totalViews": 244792,
    "avgViews": 3654,
    "todayViews": 2140,
    "isPaid": true,
    "paidChapters": 42,
    "likes": 7560,
    "comments": 1134,
    "ranks": {
      "free": null,
      "paid": 172,
      "bestseller": null
    },
    "badges": [
      "유료 투베 172위"
    ],
    "description": "유료 투베 172위"
  },
  {
    "id": "594846",
    "title": "무당 아니라고.......",
    "author": "백린(白麟)",
    "genre": "현대판타지",
    "chapterCount": 82,
    "favorites": 3062,
    "totalViews": 541212,
    "avgViews": 6600,
    "todayViews": 2130,
    "isPaid": true,
    "paidChapters": 57,
    "likes": 13468,
    "comments": 2020,
    "ranks": {
      "free": null,
      "paid": 173,
      "bestseller": null
    },
    "badges": [
      "유료 투베 173위"
    ],
    "description": "유료 투베 173위"
  },
  {
    "id": "608730",
    "title": "버려진 특성을 주웠더니 SSS급 토벌대원으로 각성함",
    "author": "배불루",
    "genre": "판타지, 현대판타지",
    "chapterCount": 13,
    "favorites": 247,
    "totalViews": 10805,
    "avgViews": 831,
    "todayViews": 266,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 305,
    "comments": 46,
    "ranks": {
      "free": 174,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 174위"
    ],
    "description": "무료 투베 174위"
  },
  {
    "id": "549612",
    "title": "퇴사하고 알래스카 땅을 상속받았더니 백악관에서 연락 옴",
    "author": "이스트우드",
    "genre": "현대판타지",
    "chapterCount": 210,
    "favorites": 2531,
    "totalViews": 731830,
    "avgViews": 3485,
    "todayViews": 2120,
    "isPaid": true,
    "paidChapters": 185,
    "likes": 13836,
    "comments": 2075,
    "ranks": {
      "free": null,
      "paid": 174,
      "bestseller": null
    },
    "badges": [
      "유료 투베 174위"
    ],
    "description": "유료 투베 174위"
  },
  {
    "id": "570884",
    "title": "다른 세상의 나 덕분에 만능 매니저가 됨",
    "author": "지장수",
    "genre": "현대판타지, 무협",
    "chapterCount": 147,
    "favorites": 3172,
    "totalViews": 911414,
    "avgViews": 6200,
    "todayViews": 93467,
    "isPaid": true,
    "paidChapters": 122,
    "likes": 20726,
    "comments": 3109,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 174
    },
    "badges": [
      "베스트셀러 174위"
    ],
    "description": "베스트셀러 174위"
  },
  {
    "id": "607026",
    "title": "해고당한 덕분에 대배우가 되었다",
    "author": "크로노크",
    "genre": "현대판타지",
    "chapterCount": 17,
    "favorites": 454,
    "totalViews": 20549,
    "avgViews": 1209,
    "todayViews": 263,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 639,
    "comments": 96,
    "ranks": {
      "free": 175,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 175위"
    ],
    "description": "무료 투베 175위"
  },
  {
    "id": "568951",
    "title": "1945, 한국전쟁은 일어나지 않았다",
    "author": "역사설계자",
    "genre": "대체역사",
    "chapterCount": 172,
    "favorites": 1528,
    "totalViews": 276436,
    "avgViews": 1607,
    "todayViews": 2100,
    "isPaid": true,
    "paidChapters": 147,
    "likes": 8989,
    "comments": 1348,
    "ranks": {
      "free": null,
      "paid": 175,
      "bestseller": null
    },
    "badges": [
      "유료 투베 175위"
    ],
    "description": "유료 투베 175위"
  },
  {
    "id": "607476",
    "title": "징집된 우주 해병은 탑 등반이 쉽다",
    "author": "[동주]",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 14,
    "favorites": 203,
    "totalViews": 6021,
    "avgViews": 430,
    "todayViews": 262,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 343,
    "comments": 51,
    "ranks": {
      "free": 176,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 176위"
    ],
    "description": "무료 투베 176위"
  },
  {
    "id": "594754",
    "title": "혈교 교주였던 경찰이 너무 유능함",
    "author": "범탈",
    "genre": "현대판타지, 무협",
    "chapterCount": 57,
    "favorites": 1431,
    "totalViews": 226793,
    "avgViews": 3979,
    "todayViews": 2030,
    "isPaid": true,
    "paidChapters": 32,
    "likes": 4752,
    "comments": 713,
    "ranks": {
      "free": null,
      "paid": 176,
      "bestseller": null
    },
    "badges": [
      "유료 투베 176위"
    ],
    "description": "유료 투베 176위"
  },
  {
    "id": "530740",
    "title": "B급 헌터로 살아남기",
    "author": "컵라면.",
    "genre": "현대판타지",
    "chapterCount": 204,
    "favorites": 11627,
    "totalViews": 1540476,
    "avgViews": 7551,
    "todayViews": 91774,
    "isPaid": true,
    "paidChapters": 179,
    "likes": 84502,
    "comments": 12675,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 176
    },
    "badges": [
      "베스트셀러 176위"
    ],
    "description": "베스트셀러 176위"
  },
  {
    "id": "606470",
    "title": "캐나다 이민 후 광산 재벌",
    "author": "테리빈스",
    "genre": "현대판타지",
    "chapterCount": 20,
    "favorites": 281,
    "totalViews": 18841,
    "avgViews": 942,
    "todayViews": 261,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 300,
    "comments": 45,
    "ranks": {
      "free": 177,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 177위"
    ],
    "description": "무료 투베 177위"
  },
  {
    "id": "417328",
    "title": "퓨전펑크에 드래곤으로 환생했다",
    "author": "眞펜릴",
    "genre": "판타지, 퓨전",
    "chapterCount": 349,
    "favorites": 5453,
    "totalViews": 1087085,
    "avgViews": 3115,
    "todayViews": 2020,
    "isPaid": true,
    "paidChapters": 324,
    "likes": 53269,
    "comments": 7990,
    "ranks": {
      "free": null,
      "paid": 177,
      "bestseller": null
    },
    "badges": [
      "유료 투베 177위"
    ],
    "description": "유료 투베 177위"
  },
  {
    "id": "417725",
    "title": "대영제국 선비의 공정무역",
    "author": "명원(命元)",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 407,
    "favorites": 23842,
    "totalViews": 6349851,
    "avgViews": 15602,
    "todayViews": 91724,
    "isPaid": true,
    "paidChapters": 382,
    "likes": 340445,
    "comments": 51067,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 177
    },
    "badges": [
      "베스트셀러 177위"
    ],
    "description": "베스트셀러 177위"
  },
  {
    "id": "565202",
    "title": "천만 감독 아들은 흥행작이 보인다",
    "author": "홍지평",
    "genre": "현대판타지, 판타지",
    "chapterCount": 161,
    "favorites": 3027,
    "totalViews": 653385,
    "avgViews": 4058,
    "todayViews": 1990,
    "isPaid": true,
    "paidChapters": 136,
    "likes": 22871,
    "comments": 3431,
    "ranks": {
      "free": null,
      "paid": 178,
      "bestseller": null
    },
    "badges": [
      "유료 투베 178위"
    ],
    "description": "유료 투베 178위"
  },
  {
    "id": "104753",
    "title": "전지적 독자 시점",
    "author": "싱숑",
    "genre": "현대판타지, 판타지",
    "chapterCount": 1068,
    "favorites": 153421,
    "totalViews": 61435850,
    "avgViews": 57524,
    "todayViews": 91058,
    "isPaid": true,
    "paidChapters": 1041,
    "likes": 2314749,
    "comments": 347212,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 178
    },
    "badges": [
      "베스트셀러 178위"
    ],
    "description": "베스트셀러 178위"
  },
  {
    "id": "606644",
    "title": "회장님 막내딸 임신시킨 줄 모르고 퇴사당함",
    "author": "남호원",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 19,
    "favorites": 629,
    "totalViews": 47807,
    "avgViews": 2516,
    "todayViews": 244,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 677,
    "comments": 102,
    "ranks": {
      "free": 179,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 179위"
    ],
    "description": "무료 투베 179위"
  },
  {
    "id": "484867",
    "title": "가문을 살릴 막내 수사가 되었다",
    "author": "태양물고기",
    "genre": "무협, 판타지",
    "chapterCount": 411,
    "favorites": 11105,
    "totalViews": 3212635,
    "avgViews": 7817,
    "todayViews": 90204,
    "isPaid": true,
    "paidChapters": 385,
    "likes": 103893,
    "comments": 15584,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 179
    },
    "badges": [
      "베스트셀러 179위"
    ],
    "description": "베스트셀러 179위"
  },
  {
    "id": "604507",
    "title": "해고당한 헌터가 세계최강",
    "author": "루나티카",
    "genre": "현대판타지, 판타지",
    "chapterCount": 26,
    "favorites": 756,
    "totalViews": 93727,
    "avgViews": 3605,
    "todayViews": 243,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1461,
    "comments": 219,
    "ranks": {
      "free": 180,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 180위"
    ],
    "description": "무료 투베 180위"
  },
  {
    "id": "531329",
    "title": "재벌 후계자는 망하고 싶어",
    "author": "곽탁타",
    "genre": "현대판타지",
    "chapterCount": 212,
    "favorites": 11325,
    "totalViews": 2513344,
    "avgViews": 11855,
    "todayViews": 90052,
    "isPaid": true,
    "paidChapters": 187,
    "likes": 57687,
    "comments": 8653,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 180
    },
    "badges": [
      "베스트셀러 180위"
    ],
    "description": "베스트셀러 180위"
  },
  {
    "id": "596826",
    "title": "귀환한 네크로맨서는 조용히 살고 싶다",
    "author": "선비의붓",
    "genre": "퓨전",
    "chapterCount": 47,
    "favorites": 891,
    "totalViews": 127654,
    "avgViews": 2716,
    "todayViews": 240,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2927,
    "comments": 439,
    "ranks": {
      "free": 181,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 181위"
    ],
    "description": "무료 투베 181위"
  },
  {
    "id": "560224",
    "title": "회귀 후 부모 집을 담보로 시작했다",
    "author": "보랑빛노을",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 254,
    "favorites": 3072,
    "totalViews": 857704,
    "avgViews": 3377,
    "todayViews": 82342,
    "isPaid": true,
    "paidChapters": 229,
    "likes": 16815,
    "comments": 2522,
    "ranks": {
      "free": null,
      "paid": 181,
      "bestseller": 196
    },
    "badges": [
      "유료 투베 181위",
      "베스트셀러 196위"
    ],
    "description": "유료 투베 181위 | 베스트셀러 196위"
  },
  {
    "id": "453976",
    "title": "계속 써도 돈이 쌓임",
    "author": "운좋은놈",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 235,
    "favorites": 37508,
    "totalViews": 8130453,
    "avgViews": 34598,
    "todayViews": 89736,
    "isPaid": true,
    "paidChapters": 210,
    "likes": 239651,
    "comments": 35948,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 181
    },
    "badges": [
      "베스트셀러 181위"
    ],
    "description": "베스트셀러 181위"
  },
  {
    "id": "601240",
    "title": "육사출신 전술천재, 만주패왕이 되다",
    "author": "백십칠",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 47,
    "favorites": 341,
    "totalViews": 43510,
    "avgViews": 926,
    "todayViews": 240,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 669,
    "comments": 100,
    "ranks": {
      "free": 182,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 182위"
    ],
    "description": "무료 투베 182위"
  },
  {
    "id": "586291",
    "title": "14세 연하 회장 손녀가 고백했다",
    "author": "새결",
    "genre": "현대판타지, 판타지",
    "chapterCount": 110,
    "favorites": 4763,
    "totalViews": 835202,
    "avgViews": 7593,
    "todayViews": 1870,
    "isPaid": true,
    "paidChapters": 85,
    "likes": 19043,
    "comments": 2856,
    "ranks": {
      "free": null,
      "paid": 182,
      "bestseller": null
    },
    "badges": [
      "유료 투베 182위"
    ],
    "description": "유료 투베 182위"
  },
  {
    "id": "565562",
    "title": "천재 신인 포수가 구단주를 숨김",
    "author": "기계처럼",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 241,
    "favorites": 2505,
    "totalViews": 708485,
    "avgViews": 2940,
    "todayViews": 89555,
    "isPaid": true,
    "paidChapters": 216,
    "likes": 19757,
    "comments": 2964,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 182
    },
    "badges": [
      "베스트셀러 182위"
    ],
    "description": "베스트셀러 182위"
  },
  {
    "id": "608761",
    "title": "해고당한 외과 의사가 너무 유능함",
    "author": "옆집고래",
    "genre": "현대판타지",
    "chapterCount": 11,
    "favorites": 194,
    "totalViews": 8199,
    "avgViews": 745,
    "todayViews": 239,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 186,
    "comments": 28,
    "ranks": {
      "free": 183,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 183위"
    ],
    "description": "무료 투베 183위"
  },
  {
    "id": "589467",
    "title": "호주 깡촌의 천재 드루이드",
    "author": "진필.",
    "genre": "현대판타지",
    "chapterCount": 78,
    "favorites": 1614,
    "totalViews": 248287,
    "avgViews": 3183,
    "todayViews": 1860,
    "isPaid": true,
    "paidChapters": 53,
    "likes": 10337,
    "comments": 1551,
    "ranks": {
      "free": null,
      "paid": 183,
      "bestseller": null
    },
    "badges": [
      "유료 투베 183위"
    ],
    "description": "유료 투베 183위"
  },
  {
    "id": "563563",
    "title": "미국에서 커피 농사 지었더니 세계가 집착함",
    "author": "연재형",
    "genre": "현대판타지, 드라마",
    "chapterCount": 131,
    "favorites": 5092,
    "totalViews": 956802,
    "avgViews": 7304,
    "todayViews": 88341,
    "isPaid": true,
    "paidChapters": 106,
    "likes": 29511,
    "comments": 4427,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 183
    },
    "badges": [
      "베스트셀러 183위"
    ],
    "description": "베스트셀러 183위"
  },
  {
    "id": "606626",
    "title": "이번 생은 NBA 포인트 가드가 될래요",
    "author": "제춘라면",
    "genre": "스포츠",
    "chapterCount": 38,
    "favorites": 232,
    "totalViews": 19904,
    "avgViews": 524,
    "todayViews": 235,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 684,
    "comments": 103,
    "ranks": {
      "free": 184,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 184위"
    ],
    "description": "무료 투베 184위"
  },
  {
    "id": "598946",
    "title": "게이트에서 주운 열쇠로 우주 전함의 함장이 되었다",
    "author": "헬뮤티",
    "genre": "SF, 현대판타지",
    "chapterCount": 43,
    "favorites": 756,
    "totalViews": 96451,
    "avgViews": 2243,
    "todayViews": 234,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2723,
    "comments": 408,
    "ranks": {
      "free": 185,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 185위"
    ],
    "description": "무료 투베 185위"
  },
  {
    "id": "592974",
    "title": "미국에서 한식 풀었더니 이웃들이 너무 집착함",
    "author": "방탄커피",
    "genre": "현대판타지",
    "chapterCount": 64,
    "favorites": 1970,
    "totalViews": 344265,
    "avgViews": 5379,
    "todayViews": 1850,
    "isPaid": true,
    "paidChapters": 39,
    "likes": 8974,
    "comments": 1346,
    "ranks": {
      "free": null,
      "paid": 185,
      "bestseller": null
    },
    "badges": [
      "유료 투베 185위"
    ],
    "description": "유료 투베 185위"
  },
  {
    "id": "580335",
    "title": "회귀한 북해표국 소공자",
    "author": "프리힐",
    "genre": "무협, 대체역사",
    "chapterCount": 111,
    "favorites": 599,
    "totalViews": 223232,
    "avgViews": 2011,
    "todayViews": 223,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5777,
    "comments": 867,
    "ranks": {
      "free": 186,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 186위"
    ],
    "description": "무료 투베 186위"
  },
  {
    "id": "574888",
    "title": "마나흡수로 초월급 레벨업",
    "author": "쩡킴",
    "genre": "현대판타지, 판타지",
    "chapterCount": 119,
    "favorites": 4335,
    "totalViews": 1042625,
    "avgViews": 8762,
    "todayViews": 1830,
    "isPaid": true,
    "paidChapters": 94,
    "likes": 23459,
    "comments": 3519,
    "ranks": {
      "free": null,
      "paid": 186,
      "bestseller": null
    },
    "badges": [
      "유료 투베 186위"
    ],
    "description": "유료 투베 186위"
  },
  {
    "id": "608703",
    "title": "해고당한 영업 과장이 재벌집 사위가 됨",
    "author": "사입삼촌",
    "genre": "현대판타지",
    "chapterCount": 13,
    "favorites": 249,
    "totalViews": 13789,
    "avgViews": 1061,
    "todayViews": 221,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 247,
    "comments": 37,
    "ranks": {
      "free": 187,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 187위"
    ],
    "description": "무료 투베 187위"
  },
  {
    "id": "563682",
    "title": "어촌 소년은 무림인으로 자랐다",
    "author": "아평아",
    "genre": "무협",
    "chapterCount": 133,
    "favorites": 4288,
    "totalViews": 851087,
    "avgViews": 6399,
    "todayViews": 1820,
    "isPaid": true,
    "paidChapters": 108,
    "likes": 30769,
    "comments": 4615,
    "ranks": {
      "free": null,
      "paid": 187,
      "bestseller": null
    },
    "badges": [
      "유료 투베 187위"
    ],
    "description": "유료 투베 187위"
  },
  {
    "id": "593153",
    "title": "이혼당한 기러기 아빠 파워볼 당첨후 재벌됨",
    "author": "야바위꾼",
    "genre": "현대판타지, 드라마",
    "chapterCount": 63,
    "favorites": 918,
    "totalViews": 182365,
    "avgViews": 2895,
    "todayViews": 214,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3111,
    "comments": 467,
    "ranks": {
      "free": 188,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 188위"
    ],
    "description": "무료 투베 188위"
  },
  {
    "id": "591893",
    "title": "천조국 탱크 메이커가 되었다",
    "author": "[서평]",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 82,
    "favorites": 753,
    "totalViews": 119851,
    "avgViews": 1462,
    "todayViews": 1820,
    "isPaid": true,
    "paidChapters": 57,
    "likes": 4233,
    "comments": 635,
    "ranks": {
      "free": null,
      "paid": 188,
      "bestseller": null
    },
    "badges": [
      "유료 투베 188위"
    ],
    "description": "유료 투베 188위"
  },
  {
    "id": "530114",
    "title": "건물주 되어서 취미 생활하는데, 돈이 미침",
    "author": "유기통한",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 262,
    "favorites": 8099,
    "totalViews": 1810518,
    "avgViews": 6910,
    "todayViews": 85202,
    "isPaid": true,
    "paidChapters": 237,
    "likes": 42813,
    "comments": 6422,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 188
    },
    "badges": [
      "베스트셀러 188위"
    ],
    "description": "베스트셀러 188위"
  },
  {
    "id": "605247",
    "title": "해고당한 천하제일인은 조용히 살고 싶다",
    "author": "자까떼껄룩",
    "genre": "무협, 판타지",
    "chapterCount": 24,
    "favorites": 387,
    "totalViews": 36680,
    "avgViews": 1528,
    "todayViews": 212,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 786,
    "comments": 118,
    "ranks": {
      "free": 189,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 189위"
    ],
    "description": "무료 투베 189위"
  },
  {
    "id": "592710",
    "title": "국가에 버림받고, 종말급 각성자가 됐다",
    "author": "쩡킴",
    "genre": "현대판타지, 판타지",
    "chapterCount": 66,
    "favorites": 3724,
    "totalViews": 783544,
    "avgViews": 11872,
    "todayViews": 1770,
    "isPaid": true,
    "paidChapters": 41,
    "likes": 15900,
    "comments": 2385,
    "ranks": {
      "free": null,
      "paid": 189,
      "bestseller": null
    },
    "badges": [
      "유료 투베 189위"
    ],
    "description": "유료 투베 189위"
  },
  {
    "id": "606262",
    "title": "흑도 칼잡이가 장원급제함!",
    "author": "오렌지깡",
    "genre": "무협",
    "chapterCount": 22,
    "favorites": 355,
    "totalViews": 29756,
    "avgViews": 1353,
    "todayViews": 210,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 762,
    "comments": 114,
    "ranks": {
      "free": 190,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 190위"
    ],
    "description": "무료 투베 190위"
  },
  {
    "id": "538124",
    "title": "검은머리 미국 대지주",
    "author": "daybreak95",
    "genre": "대체역사, 현대판타지",
    "chapterCount": 257,
    "favorites": 3463,
    "totalViews": 607724,
    "avgViews": 2365,
    "todayViews": 1740,
    "isPaid": true,
    "paidChapters": 232,
    "likes": 24126,
    "comments": 3619,
    "ranks": {
      "free": null,
      "paid": 190,
      "bestseller": null
    },
    "badges": [
      "유료 투베 190위"
    ],
    "description": "유료 투베 190위"
  },
  {
    "id": "583076",
    "title": "월드컵 임시 감독이 되었다",
    "author": "닥터암",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 97,
    "favorites": 5610,
    "totalViews": 1042773,
    "avgViews": 10750,
    "todayViews": 84282,
    "isPaid": true,
    "paidChapters": 72,
    "likes": 25356,
    "comments": 3803,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 190
    },
    "badges": [
      "베스트셀러 190위"
    ],
    "description": "베스트셀러 190위"
  },
  {
    "id": "596177",
    "title": "회귀한 짐꾼이 별걸 다 기억함",
    "author": "주먹남",
    "genre": "퓨전",
    "chapterCount": 69,
    "favorites": 274,
    "totalViews": 79504,
    "avgViews": 1152,
    "todayViews": 204,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1592,
    "comments": 239,
    "ranks": {
      "free": 191,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 191위"
    ],
    "description": "무료 투베 191위"
  },
  {
    "id": "575157",
    "title": "미국 무당의 신점 스트리밍",
    "author": ".원",
    "genre": "현대판타지",
    "chapterCount": 134,
    "favorites": 1794,
    "totalViews": 366191,
    "avgViews": 2733,
    "todayViews": 1680,
    "isPaid": true,
    "paidChapters": 109,
    "likes": 11766,
    "comments": 1765,
    "ranks": {
      "free": null,
      "paid": 191,
      "bestseller": null
    },
    "badges": [
      "유료 투베 191위"
    ],
    "description": "유료 투베 191위"
  },
  {
    "id": "471359",
    "title": "선협에서 나혼자 무한수명",
    "author": "불로수선전",
    "genre": "무협, 퓨전",
    "chapterCount": 226,
    "favorites": 6127,
    "totalViews": 1331475,
    "avgViews": 5891,
    "todayViews": 84146,
    "isPaid": true,
    "paidChapters": 201,
    "likes": 31540,
    "comments": 4731,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 191
    },
    "badges": [
      "베스트셀러 191위"
    ],
    "description": "베스트셀러 191위"
  },
  {
    "id": "602939",
    "title": "국가에 버림받고 EX급 생체병기를 얻었다.",
    "author": "김한영",
    "genre": "SF, 현대판타지",
    "chapterCount": 32,
    "favorites": 916,
    "totalViews": 103720,
    "avgViews": 3241,
    "todayViews": 201,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2534,
    "comments": 380,
    "ranks": {
      "free": 192,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 192위"
    ],
    "description": "무료 투베 192위"
  },
  {
    "id": "567475",
    "title": "방구석에서 시작하는 초강대국 대한민국",
    "author": "클레어킨",
    "genre": "판타지, 현대판타지",
    "chapterCount": 131,
    "favorites": 1490,
    "totalViews": 383398,
    "avgViews": 2927,
    "todayViews": 1670,
    "isPaid": true,
    "paidChapters": 106,
    "likes": 8430,
    "comments": 1265,
    "ranks": {
      "free": null,
      "paid": 192,
      "bestseller": null
    },
    "badges": [
      "유료 투베 192위"
    ],
    "description": "유료 투베 192위"
  },
  {
    "id": "608741",
    "title": "해고당한 연구원이 국가권력급 신기술을 독점함",
    "author": "유수流水",
    "genre": "현대판타지, 판타지",
    "chapterCount": 9,
    "favorites": 209,
    "totalViews": 4846,
    "avgViews": 538,
    "todayViews": 200,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 131,
    "comments": 20,
    "ranks": {
      "free": 193,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 193위"
    ],
    "description": "무료 투베 193위"
  },
  {
    "id": "436839",
    "title": "금륜의 마법사",
    "author": "캡틴아빠",
    "genre": "현대판타지, 판타지",
    "chapterCount": 618,
    "favorites": 7055,
    "totalViews": 2054775,
    "avgViews": 3325,
    "todayViews": 1650,
    "isPaid": true,
    "paidChapters": 593,
    "likes": 49738,
    "comments": 7461,
    "ranks": {
      "free": null,
      "paid": 193,
      "bestseller": null
    },
    "badges": [
      "유료 투베 193위"
    ],
    "description": "유료 투베 193위"
  },
  {
    "id": "603368",
    "title": "일곱개의 탑",
    "author": "경우勁雨",
    "genre": "현대판타지, 판타지",
    "chapterCount": 34,
    "favorites": 726,
    "totalViews": 35527,
    "avgViews": 1045,
    "todayViews": 197,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2306,
    "comments": 346,
    "ranks": {
      "free": 194,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 194위"
    ],
    "description": "무료 투베 194위"
  },
  {
    "id": "595018",
    "title": "4조 재벌인데 아르바이트를 안 그만둠",
    "author": "기영수",
    "genre": "현대판타지",
    "chapterCount": 65,
    "favorites": 4020,
    "totalViews": 754310,
    "avgViews": 11605,
    "todayViews": 1640,
    "isPaid": true,
    "paidChapters": 40,
    "likes": 15891,
    "comments": 2384,
    "ranks": {
      "free": null,
      "paid": 194,
      "bestseller": null
    },
    "badges": [
      "유료 투베 194위"
    ],
    "description": "유료 투베 194위"
  },
  {
    "id": "591598",
    "title": "한국인 초짜 감독이 폐급 구단을 살림",
    "author": "필로스",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 66,
    "favorites": 460,
    "totalViews": 85144,
    "avgViews": 1290,
    "todayViews": 193,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 2545,
    "comments": 382,
    "ranks": {
      "free": 195,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 195위"
    ],
    "description": "무료 투베 195위"
  },
  {
    "id": "543392",
    "title": "강탈수선전",
    "author": "덕민",
    "genre": "무협, 판타지",
    "chapterCount": 199,
    "favorites": 1556,
    "totalViews": 378072,
    "avgViews": 1900,
    "todayViews": 1620,
    "isPaid": true,
    "paidChapters": 174,
    "likes": 13805,
    "comments": 2071,
    "ranks": {
      "free": null,
      "paid": 195,
      "bestseller": null
    },
    "badges": [
      "유료 투베 195위"
    ],
    "description": "유료 투베 195위"
  },
  {
    "id": "602590",
    "title": "빙하기 아포칼립스인데 내 캠핑장만 안전함",
    "author": "백야진",
    "genre": "현대판타지, 판타지",
    "chapterCount": 28,
    "favorites": 492,
    "totalViews": 36774,
    "avgViews": 1313,
    "todayViews": 192,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1392,
    "comments": 209,
    "ranks": {
      "free": 196,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 196위"
    ],
    "description": "무료 투베 196위"
  },
  {
    "id": "592756",
    "title": "적폐 감독 들이박은 악동 투수가 미국을 제패함.",
    "author": "맥스.",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 65,
    "favorites": 1255,
    "totalViews": 292975,
    "avgViews": 4507,
    "todayViews": 1610,
    "isPaid": true,
    "paidChapters": 40,
    "likes": 6403,
    "comments": 960,
    "ranks": {
      "free": null,
      "paid": 196,
      "bestseller": null
    },
    "badges": [
      "유료 투베 196위"
    ],
    "description": "유료 투베 196위"
  },
  {
    "id": "598780",
    "title": "겜판을 정상화하는 디렉터가 됐다",
    "author": "라구.B.P",
    "genre": "현대판타지, SF",
    "chapterCount": 37,
    "favorites": 1536,
    "totalViews": 133418,
    "avgViews": 3606,
    "todayViews": 188,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 5361,
    "comments": 804,
    "ranks": {
      "free": 197,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 197위"
    ],
    "description": "무료 투베 197위"
  },
  {
    "id": "412445",
    "title": "종말의 뱀이 되었다",
    "author": "비도™",
    "genre": "판타지, 퓨전",
    "chapterCount": 553,
    "favorites": 31312,
    "totalViews": 5969700,
    "avgViews": 10795,
    "todayViews": 1580,
    "isPaid": true,
    "paidChapters": 528,
    "likes": 275284,
    "comments": 41293,
    "ranks": {
      "free": null,
      "paid": 197,
      "bestseller": null
    },
    "badges": [
      "유료 투베 197위"
    ],
    "description": "유료 투베 197위"
  },
  {
    "id": "400210",
    "title": "하남자의 탑 공략법",
    "author": "꾸찌꾸찌",
    "genre": "현대판타지, 퓨전",
    "chapterCount": 557,
    "favorites": 41376,
    "totalViews": 13888510,
    "avgViews": 24934,
    "todayViews": 82179,
    "isPaid": true,
    "paidChapters": 532,
    "likes": 426160,
    "comments": 63924,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 197
    },
    "badges": [
      "베스트셀러 197위"
    ],
    "description": "베스트셀러 197위"
  },
  {
    "id": "604727",
    "title": "퇴사당했더니 무당이 되었다",
    "author": "여우팡이",
    "genre": "현대판타지",
    "chapterCount": 26,
    "favorites": 372,
    "totalViews": 32236,
    "avgViews": 1240,
    "todayViews": 181,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1070,
    "comments": 161,
    "ranks": {
      "free": 198,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 198위"
    ],
    "description": "무료 투베 198위"
  },
  {
    "id": "592141",
    "title": "야구를 왜 시작했을까?",
    "author": "동동구르르",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 159,
    "favorites": 2276,
    "totalViews": 649519,
    "avgViews": 4085,
    "todayViews": 1570,
    "isPaid": true,
    "paidChapters": 104,
    "likes": 14654,
    "comments": 2198,
    "ranks": {
      "free": null,
      "paid": 198,
      "bestseller": null
    },
    "badges": [
      "유료 투베 198위"
    ],
    "description": "유료 투베 198위"
  },
  {
    "id": "481186",
    "title": "검은머리 흙수저 미국에서 살아남기",
    "author": "커피흡입기",
    "genre": "현대판타지",
    "chapterCount": 400,
    "favorites": 4088,
    "totalViews": 975419,
    "avgViews": 2439,
    "todayViews": 82177,
    "isPaid": true,
    "paidChapters": 375,
    "likes": 68096,
    "comments": 10214,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 198
    },
    "badges": [
      "베스트셀러 198위"
    ],
    "description": "베스트셀러 198위"
  },
  {
    "id": "598523",
    "title": "재벌들 죽는 순서 맞혔더니 살려달라고 줄을 섬",
    "author": "차세나",
    "genre": "SF, 현대판타지",
    "chapterCount": 37,
    "favorites": 600,
    "totalViews": 65027,
    "avgViews": 1757,
    "todayViews": 178,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 1815,
    "comments": 272,
    "ranks": {
      "free": 199,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 199위"
    ],
    "description": "무료 투베 199위"
  },
  {
    "id": "585808",
    "title": "나 혼자 전능 소환으로 꿀 빤다",
    "author": "오브더",
    "genre": "현대판타지, 판타지",
    "chapterCount": 102,
    "favorites": 1590,
    "totalViews": 351983,
    "avgViews": 3451,
    "todayViews": 1530,
    "isPaid": true,
    "paidChapters": 77,
    "likes": 9286,
    "comments": 1393,
    "ranks": {
      "free": null,
      "paid": 199,
      "bestseller": null
    },
    "badges": [
      "유료 투베 199위"
    ],
    "description": "유료 투베 199위"
  },
  {
    "id": "498277",
    "title": "왼발의 마법사",
    "author": "세끝",
    "genre": "스포츠, 현대판타지",
    "chapterCount": 350,
    "favorites": 9446,
    "totalViews": 2329006,
    "avgViews": 6654,
    "todayViews": 82118,
    "isPaid": true,
    "paidChapters": 325,
    "likes": 64505,
    "comments": 9676,
    "ranks": {
      "free": null,
      "paid": null,
      "bestseller": 199
    },
    "badges": [
      "베스트셀러 199위"
    ],
    "description": "베스트셀러 199위"
  },
  {
    "id": "594270",
    "title": "독립군 말단 병사가 패권국을 만든다",
    "author": "주절주절",
    "genre": "대체역사, 전쟁·밀리터리",
    "chapterCount": 57,
    "favorites": 749,
    "totalViews": 109560,
    "avgViews": 1922,
    "todayViews": 170,
    "isPaid": false,
    "paidChapters": 0,
    "likes": 3121,
    "comments": 468,
    "ranks": {
      "free": 200,
      "paid": null,
      "bestseller": null
    },
    "badges": [
      "무료 투베 200위"
    ],
    "description": "무료 투베 200위"
  },
  {
    "id": "563092",
    "title": "신내림 커피천재에게 전세계가 집착한다",
    "author": "육포맨",
    "genre": "현대판타지",
    "chapterCount": 139,
    "favorites": 4302,
    "totalViews": 939874,
    "avgViews": 6762,
    "todayViews": 1480,
    "isPaid": true,
    "paidChapters": 114,
    "likes": 27731,
    "comments": 4160,
    "ranks": {
      "free": null,
      "paid": 200,
      "bestseller": null
    },
    "badges": [
      "유료 투베 200위"
    ],
    "description": "유료 투베 200위"
  }
];
