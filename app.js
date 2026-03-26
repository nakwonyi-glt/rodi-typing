// ================================================================
// 손가락 타자 연습 - 모바일 자판 타자 연습기
// ================================================================

// ================================================================
// 자판 데이터
// ================================================================
const KEYBOARDS = {
  cheonjiin: {
    id: 'cheonjiin',
    name: '천지인',
    icon: '🌤',
    subSide: true,
    tagline: '삼성 갤럭시 기본 자판',
    tagline_en: 'Samsung Galaxy Default Keyboard',
    description: '하늘(·), 땅(ㅡ), 사람(ㅣ)으로\n모음을 만드는 자판이에요',
    description_en: 'Build vowels by combining\nHeavens(·), Earth(ㅡ), Human(ㅣ)',
    color: '#3B82F6',
    bgLight: '#EFF6FF',
    badgeText: '가장 많이 써요',
    badgeText_en: 'Most Popular',
    rows: [
      [
        { key: 'ㅣ', sub: '' },
        { key: '·', sub: '' },
        { key: 'ㅡ', sub: '' },
      ],
      [
        { key: 'ㄱ', sub: 'ㅋ' },
        { key: 'ㄴ', sub: 'ㄹ' },
        { key: 'ㄷ', sub: 'ㅌ' },
      ],
      [
        { key: 'ㅂ', sub: 'ㅍ' },
        { key: 'ㅅ', sub: 'ㅎ' },
        { key: 'ㅈ', sub: 'ㅊ' },
      ],
      [
        { key: 'ㅇ', sub: 'ㅁ' },
      ],
    ],
    learnSteps: [
      { keys: [[0,0]], title: 'ㅣ (사람)', desc: '모음의 기본 키! 사람을 뜻해요 🙋\nㅣ 하나로 "이" 소리가 나요' },
      { keys: [[0,1]], title: '· (하늘)', desc: '모음의 핵심 키! 하늘을 뜻해요 ☁\n점(·)을 다른 키와 조합해서 모음을 만들어요' },
      { keys: [[0,2]], title: 'ㅡ (땅)', desc: '모음의 기본 키! 땅을 뜻해요 🌍\nㅡ 하나로 "으" 소리가 나요' },
      { keys: [[0,0],[0,1]], title: 'ㅏ 만들기', desc: 'ㅣ 누른 후 · 누르면 "ㅏ"\n예: 아버지 → ㅣ+· = ㅏ' },
      { keys: [[0,1],[0,0]], title: 'ㅓ 만들기', desc: '· 누른 후 ㅣ 누르면 "ㅓ"\n예: 어머니 → ·+ㅣ = ㅓ' },
      { keys: [[0,1],[0,2]], title: 'ㅗ 만들기', desc: '· 누른 후 ㅡ 누르면 "ㅗ"\n예: 오빠 → ·+ㅡ = ㅗ' },
      { keys: [[0,2],[0,1]], title: 'ㅜ 만들기', desc: 'ㅡ 누른 후 · 누르면 "ㅜ"\n예: 우유 → ㅡ+· = ㅜ' },
      { keys: [[1,0]], title: 'ㄱ / ㅋ', desc: '한 번 → ㄱ\n두 번 빠르게 → ㅋ\n예: 가족, 학교, 커피' },
      { keys: [[1,1]], title: 'ㄴ / ㄹ', desc: '한 번 → ㄴ\n두 번 빠르게 → ㄹ\n예: 나무, 라디오' },
      { keys: [[1,2]], title: 'ㄷ / ㅌ', desc: '한 번 → ㄷ\n두 번 빠르게 → ㅌ\n예: 다리, 타다' },
      { keys: [[2,0]], title: 'ㅂ / ㅍ', desc: '한 번 → ㅂ\n두 번 빠르게 → ㅍ\n예: 바다, 파도' },
      { keys: [[2,1]], title: 'ㅅ / ㅎ', desc: '한 번 → ㅅ\n두 번 빠르게 → ㅎ\n예: 사랑, 하늘' },
      { keys: [[2,2]], title: 'ㅈ / ㅊ', desc: '한 번 → ㅈ\n두 번 빠르게 → ㅊ\n예: 자연, 차도' },
      { keys: [[3,0]], title: 'ㅇ / ㅁ', desc: '한 번 → ㅇ (이응)\n두 번 빠르게 → ㅁ (미음)\n예: 아이, 마음' },
    ],
    learnSteps_en: [
      { keys: [[0,0]], title: 'ㅣ (Human)', desc: 'Basic vowel key! Represents "human" 🙋\nPress ㅣ alone → makes "ee" sound (이)' },
      { keys: [[0,1]], title: '· (Heavens)', desc: 'Core vowel key! Represents the sky ☁\nCombine · with other keys to make vowels' },
      { keys: [[0,2]], title: 'ㅡ (Earth)', desc: 'Basic vowel key! Represents the ground 🌍\nPress ㅡ alone → makes "eu" sound (으)' },
      { keys: [[0,0],[0,1]], title: 'Making ㅏ', desc: 'Press ㅣ then · → ㅏ ("ah" sound)\nExample: 아버지 (father)' },
      { keys: [[0,1],[0,0]], title: 'Making ㅓ', desc: 'Press · then ㅣ → ㅓ ("uh" sound)\nExample: 어머니 (mother)' },
      { keys: [[0,1],[0,2]], title: 'Making ㅗ', desc: 'Press · then ㅡ → ㅗ ("oh" sound)\nExample: 오빠 (older brother)' },
      { keys: [[0,2],[0,1]], title: 'Making ㅜ', desc: 'Press ㅡ then · → ㅜ ("oo" sound)\nExample: 우유 (milk)' },
      { keys: [[1,0]], title: 'ㄱ / ㅋ', desc: 'Tap once → ㄱ (g/k sound)\nDouble-tap fast → ㅋ (k sound)\nExample: 가족 (family), 커피 (coffee)' },
      { keys: [[1,1]], title: 'ㄴ / ㄹ', desc: 'Tap once → ㄴ (n sound)\nDouble-tap fast → ㄹ (r/l sound)\nExample: 나무 (tree), 라디오 (radio)' },
      { keys: [[1,2]], title: 'ㄷ / ㅌ', desc: 'Tap once → ㄷ (d/t sound)\nDouble-tap fast → ㅌ (t sound)\nExample: 다리 (bridge), 타다 (to ride)' },
      { keys: [[2,0]], title: 'ㅂ / ㅍ', desc: 'Tap once → ㅂ (b/p sound)\nDouble-tap fast → ㅍ (p sound)\nExample: 바다 (sea), 파도 (wave)' },
      { keys: [[2,1]], title: 'ㅅ / ㅎ', desc: 'Tap once → ㅅ (s sound)\nDouble-tap fast → ㅎ (h sound)\nExample: 사랑 (love), 하늘 (sky)' },
      { keys: [[2,2]], title: 'ㅈ / ㅊ', desc: 'Tap once → ㅈ (j sound)\nDouble-tap fast → ㅊ (ch sound)\nExample: 자연 (nature), 차도 (road)' },
      { keys: [[3,0]], title: 'ㅇ / ㅁ', desc: 'Tap once → ㅇ (silent/ng)\nDouble-tap fast → ㅁ (m sound)\nExample: 아이 (child), 마음 (heart)' },
    ],
    combos: [
      { result: 'ㅏ', how: 'ㅣ+·' },
      { result: 'ㅓ', how: '·+ㅣ' },
      { result: 'ㅗ', how: '·+ㅡ' },
      { result: 'ㅜ', how: 'ㅡ+·' },
      { result: 'ㅡ', how: 'ㅡ' },
      { result: 'ㅣ', how: 'ㅣ' },
      { result: 'ㅑ', how: 'ㅣ+··' },
      { result: 'ㅕ', how: '··+ㅣ' },
      { result: 'ㅛ', how: '··+ㅡ' },
      { result: 'ㅠ', how: 'ㅡ+··' },
      { result: 'ㅐ', how: 'ㅣ+·+ㅣ' },
      { result: 'ㅔ', how: 'ㅣ+·+ㅣ' },
    ]
  },

  naratgeul: {
    id: 'naratgeul',
    name: '나랏글',
    icon: '📱',
    tagline: 'LG 폰 자판',
    tagline_en: 'LG Phone Keyboard',
    description: '자음과 모음이 분리된 자판\nLG 스마트폰에서 사용했어요',
    description_en: 'Consonants and vowels on separate sides\nUsed on LG smartphones',
    color: '#EF4444',
    bgLight: '#FEF2F2',
    badgeText: 'LG 폰 자판',
    badgeText_en: 'LG Phone',
    rows: [
      [
        { key: 'ㄱ', sub: '' },
        { key: 'ㄴ', sub: '' },
        { key: 'ㅏ', sub: 'ㅓ' },
      ],
      [
        { key: 'ㄹ', sub: '' },
        { key: 'ㅁ', sub: '' },
        { key: 'ㅗ', sub: 'ㅜ' },
      ],
      [
        { key: 'ㅅ', sub: '' },
        { key: 'ㅇ', sub: '' },
        { key: 'ㅣ', sub: '' },
      ],
      [
        { key: '획추가', sub: '' },
        { key: 'ㅡ', sub: '' },
        { key: '쌍자음', sub: '' },
      ],
    ],
    learnSteps: [
      { keys: [[0,0]], title: 'ㄱ', desc: 'ㄱ 자음\n획추가 누르면 → ㅋ' },
      { keys: [[0,1]], title: 'ㄴ', desc: 'ㄴ 자음\n획추가 → ㄷ, 한 번 더 → ㅌ' },
      { keys: [[0,2]], title: 'ㅏ / ㅓ', desc: '한 번 누르면 → ㅏ\n한 번 더 누르면 → ㅓ' },
      { keys: [[1,0]], title: 'ㄹ', desc: 'ㄹ 자음\n예: 라면, 라디오' },
      { keys: [[1,1]], title: 'ㅁ', desc: 'ㅁ 자음\n획추가 → ㅂ, 한 번 더 → ㅍ' },
      { keys: [[1,2]], title: 'ㅗ / ㅜ', desc: '한 번 누르면 → ㅗ\n한 번 더 누르면 → ㅜ' },
      { keys: [[2,0]], title: 'ㅅ', desc: 'ㅅ 자음\n획추가 → ㅈ, 한 번 더 → ㅊ' },
      { keys: [[2,1]], title: 'ㅇ', desc: 'ㅇ 자음 (이응)\n획추가 누르면 → ㅎ' },
      { keys: [[2,2]], title: 'ㅣ', desc: 'ㅣ 모음\n예: 이, 기린' },
      { keys: [[3,0]], title: '획추가', desc: '자음에 획을 추가해요!\nㄱ→ㅋ, ㄴ→ㄷ→ㅌ, ㅁ→ㅂ→ㅍ\nㅅ→ㅈ→ㅊ, ㅇ→ㅎ' },
      { keys: [[3,1]], title: 'ㅡ', desc: 'ㅡ 모음\n예: 으, 그림' },
      { keys: [[3,2]], title: '쌍자음', desc: '쌍자음을 만들어요!\nㄱ→ㄲ, ㄷ→ㄸ, ㅂ→ㅃ, ㅅ→ㅆ, ㅈ→ㅉ' },
    ],
    learnSteps_en: [
      { keys: [[0,0]], title: 'ㄱ (g/k)', desc: 'Basic consonant ㄱ\nTap "Stroke+" → ㅋ (k sound)' },
      { keys: [[0,1]], title: 'ㄴ (n)', desc: 'Basic consonant ㄴ\nStroke+ → ㄷ, once more → ㅌ' },
      { keys: [[0,2]], title: 'ㅏ / ㅓ', desc: 'Tap once → ㅏ ("ah")\nTap again → ㅓ ("uh")' },
      { keys: [[1,0]], title: 'ㄹ (r/l)', desc: 'Consonant ㄹ\nExample: 라면 (ramen)' },
      { keys: [[1,1]], title: 'ㅁ (m)', desc: 'Consonant ㅁ\nStroke+ → ㅂ, once more → ㅍ' },
      { keys: [[1,2]], title: 'ㅗ / ㅜ', desc: 'Tap once → ㅗ ("oh")\nTap again → ㅜ ("oo")' },
      { keys: [[2,0]], title: 'ㅅ (s)', desc: 'Consonant ㅅ\nStroke+ → ㅈ, once more → ㅊ' },
      { keys: [[2,1]], title: 'ㅇ (ng/silent)', desc: 'Silent consonant ㅇ\nStroke+ → ㅎ (h sound)' },
      { keys: [[2,2]], title: 'ㅣ (ee)', desc: 'Vowel ㅣ — "ee" sound\nExample: 이 (tooth/two)' },
      { keys: [[3,0]], title: 'Stroke+ (획추가)', desc: 'Adds a stroke to the last consonant!\nㄱ→ㅋ, ㄴ→ㄷ→ㅌ, ㅁ→ㅂ→ㅍ\nㅅ→ㅈ→ㅊ, ㅇ→ㅎ' },
      { keys: [[3,1]], title: 'ㅡ (eu)', desc: 'Vowel ㅡ — "eu" sound\nExample: 으, 그림 (drawing)' },
      { keys: [[3,2]], title: 'Double (쌍자음)', desc: 'Makes double consonants!\nㄱ→ㄲ, ㄷ→ㄸ, ㅂ→ㅃ, ㅅ→ㅆ, ㅈ→ㅉ' },
    ],
    combos: []
  },

  bega: {
    id: 'bega',
    name: '베가',
    icon: '⭐',
    subSide: true,
    tagline: '팬택 베가 자판',
    tagline_en: 'Pantech Vega Keyboard',
    description: '팬택 베가 스마트폰 자판\n직관적인 배열이 특징이에요',
    description_en: 'Pantech Vega smartphone keyboard\nIntuitive 4×3 layout with double-tap',
    color: '#8B5CF6',
    bgLight: '#F5F3FF',
    badgeText: '팬택 자판',
    badgeText_en: 'Pantech Vega',
    rows: [
      [
        { key: 'ㄱ', sub: 'ㅋ' },
        { key: 'ㅣ', sub: 'ㅡ' },
        { key: 'ㅏ', sub: 'ㅑ' },
      ],
      [
        { key: 'ㄷ', sub: 'ㅌ' },
        { key: 'ㄴ', sub: 'ㄹ' },
        { key: 'ㅓ', sub: 'ㅕ' },
      ],
      [
        { key: 'ㅁ', sub: 'ㅅ' },
        { key: 'ㅂ', sub: 'ㅍ' },
        { key: 'ㅗ', sub: 'ㅛ' },
      ],
      [
        { key: 'ㅈ', sub: 'ㅊ' },
        { key: 'ㅇ', sub: 'ㅎ' },
        { key: 'ㅜ', sub: 'ㅠ' },
      ],
    ],
    learnSteps: [
      { keys: [[0,0]], title: 'ㄱ / ㅋ', desc: '한 번 → ㄱ\n두 번 빠르게 → ㅋ\n예: 가족, 커피' },
      { keys: [[0,1]], title: 'ㅣ / ㅡ', desc: '한 번 → ㅣ\n두 번 빠르게 → ㅡ\n예: 이, 그림' },
      { keys: [[0,2]], title: 'ㅏ / ㅑ', desc: '한 번 → ㅏ\n두 번 빠르게 → ㅑ\n예: 아버지, 야구' },
      { keys: [[1,0]], title: 'ㄷ / ㅌ', desc: '한 번 → ㄷ\n두 번 빠르게 → ㅌ\n예: 다리, 타다' },
      { keys: [[1,1]], title: 'ㄴ / ㄹ', desc: '한 번 → ㄴ\n두 번 빠르게 → ㄹ\n예: 나무, 라디오' },
      { keys: [[1,2]], title: 'ㅓ / ㅕ', desc: '한 번 → ㅓ\n두 번 빠르게 → ㅕ\n예: 어머니, 여행' },
      { keys: [[2,0]], title: 'ㅁ / ㅅ', desc: '한 번 → ㅁ\n두 번 빠르게 → ㅅ\n예: 마음, 사랑' },
      { keys: [[2,1]], title: 'ㅂ / ㅍ', desc: '한 번 → ㅂ\n두 번 빠르게 → ㅍ\n예: 바다, 파도' },
      { keys: [[2,2]], title: 'ㅗ / ㅛ', desc: '한 번 → ㅗ\n두 번 빠르게 → ㅛ\n예: 오빠, 요리' },
      { keys: [[3,0]], title: 'ㅈ / ㅊ', desc: '한 번 → ㅈ\n두 번 빠르게 → ㅊ\n예: 자연, 차도' },
      { keys: [[3,1]], title: 'ㅇ / ㅎ', desc: '한 번 → ㅇ\n두 번 빠르게 → ㅎ\n예: 아이, 하늘' },
      { keys: [[3,2]], title: 'ㅜ / ㅠ', desc: '한 번 → ㅜ\n두 번 빠르게 → ㅠ\n예: 우유, 유리' },
    ],
    learnSteps_en: [
      { keys: [[0,0]], title: 'ㄱ / ㅋ', desc: 'Tap once → ㄱ (g/k sound)\nDouble-tap fast → ㅋ (k sound)' },
      { keys: [[0,1]], title: 'ㅣ / ㅡ', desc: 'Tap once → ㅣ ("ee")\nDouble-tap fast → ㅡ ("eu")' },
      { keys: [[0,2]], title: 'ㅏ / ㅑ', desc: 'Tap once → ㅏ ("ah")\nDouble-tap fast → ㅑ ("yah")' },
      { keys: [[1,0]], title: 'ㄷ / ㅌ', desc: 'Tap once → ㄷ (d/t sound)\nDouble-tap fast → ㅌ (t sound)' },
      { keys: [[1,1]], title: 'ㄴ / ㄹ', desc: 'Tap once → ㄴ (n sound)\nDouble-tap fast → ㄹ (r/l sound)' },
      { keys: [[1,2]], title: 'ㅓ / ㅕ', desc: 'Tap once → ㅓ ("uh")\nDouble-tap fast → ㅕ ("yuh")' },
      { keys: [[2,0]], title: 'ㅁ / ㅅ', desc: 'Tap once → ㅁ (m sound)\nDouble-tap fast → ㅅ (s sound)' },
      { keys: [[2,1]], title: 'ㅂ / ㅍ', desc: 'Tap once → ㅂ (b/p sound)\nDouble-tap fast → ㅍ (p sound)' },
      { keys: [[2,2]], title: 'ㅗ / ㅛ', desc: 'Tap once → ㅗ ("oh")\nDouble-tap fast → ㅛ ("yoh")' },
      { keys: [[3,0]], title: 'ㅈ / ㅊ', desc: 'Tap once → ㅈ (j sound)\nDouble-tap fast → ㅊ (ch sound)' },
      { keys: [[3,1]], title: 'ㅇ / ㅎ', desc: 'Tap once → ㅇ (silent/ng)\nDouble-tap fast → ㅎ (h sound)' },
      { keys: [[3,2]], title: 'ㅜ / ㅠ', desc: 'Tap once → ㅜ ("oo")\nDouble-tap fast → ㅠ ("yoo")' },
    ],
    combos: []
  },

  qwerty: {
    id: 'qwerty',
    name: 'Qwerty',
    icon: '⌨️',
    tagline: '영문 QWERTY 자판',
    tagline_en: 'Korean QWERTY Layout',
    description: '컴퓨터와 동일한 자판 배열\n각 키에 한글이 매핑돼요',
    description_en: 'Same layout as a PC keyboard\nEach key maps to a Korean character',
    color: '#10B981',
    bgLight: '#ECFDF5',
    badgeText: '컴퓨터와 동일',
    badgeText_en: 'Same as PC',
    rows: [
      [
        { key: 'ㅂ', sub: 'Q' }, { key: 'ㅈ', sub: 'W' }, { key: 'ㄷ', sub: 'E' },
        { key: 'ㄱ', sub: 'R' }, { key: 'ㅅ', sub: 'T' }, { key: 'ㅛ', sub: 'Y' },
        { key: 'ㅕ', sub: 'U' }, { key: 'ㅑ', sub: 'I' }, { key: 'ㅐ', sub: 'O' },
        { key: 'ㅔ', sub: 'P' },
      ],
      [
        { key: 'ㅁ', sub: 'A' }, { key: 'ㄴ', sub: 'S' }, { key: 'ㅇ', sub: 'D' },
        { key: 'ㄹ', sub: 'F' }, { key: 'ㅎ', sub: 'G' }, { key: 'ㅗ', sub: 'H' },
        { key: 'ㅓ', sub: 'J' }, { key: 'ㅏ', sub: 'K' }, { key: 'ㅣ', sub: 'L' },
      ],
      [
        { key: 'ㅋ', sub: 'Z' }, { key: 'ㅌ', sub: 'X' }, { key: 'ㅊ', sub: 'C' },
        { key: 'ㅍ', sub: 'V' }, { key: 'ㅠ', sub: 'B' }, { key: 'ㅜ', sub: 'N' },
        { key: 'ㅡ', sub: 'M' },
      ],
    ],
    learnSteps: [
      { keys: [[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[2,0]], title: '자음 키', desc: 'ㄱ(R), ㅅ(T), ㅁ(A), ㄴ(S), ㅇ(D)\nㄹ(F), ㅋ(Z) ... 자음이 왼쪽에 있어요' },
      { keys: [[0,5],[0,6],[0,7],[1,7],[1,8]], title: '모음 키', desc: 'ㅛ(Y), ㅕ(U), ㅑ(I), ㅏ(K), ㅣ(L)\n모음이 오른쪽에 있어요' },
      { keys: [[0,0],[0,1],[0,2]], title: 'ㅂ ㅈ ㄷ (Q W E)', desc: 'ㅂ(Q), ㅈ(W), ㄷ(E)\n외워두면 편해요!' },
      { keys: [[0,3],[0,4]], title: 'ㄱ ㅅ (R T)', desc: 'ㄱ(R), ㅅ(T)\n가장 많이 쓰는 자음이에요' },
      { keys: [[1,4],[1,5],[1,6]], title: 'ㅎ ㅗ ㅓ (G H J)', desc: 'ㅎ(G), ㅗ(H), ㅓ(J)\nH와 J는 가장 많이 쓰는 모음!' },
      { keys: [[1,7],[1,8]], title: 'ㅏ ㅣ (K L)', desc: 'ㅏ(K), ㅣ(L)\nㅏ와 ㅣ는 정말 자주 나와요' },
      { keys: [[0,8],[0,9]], title: 'ㅐ ㅔ (O P)', desc: 'ㅐ(O), ㅔ(P)\n이중모음이에요' },
    ],
    combos: []
  },

  english: {
    id: 'english',
    name: 'English',
    icon: '🔤',
    tagline: 'English QWERTY Typing',
    description: 'Practice English typing\nwith 5 vocabulary levels',
    color: '#10B981',
    bgLight: '#ECFDF5',
    badgeText: 'English',
    rows: [
      [
        { key: 'Q', sub: '' }, { key: 'W', sub: '' }, { key: 'E', sub: '' },
        { key: 'R', sub: '' }, { key: 'T', sub: '' }, { key: 'Y', sub: '' },
        { key: 'U', sub: '' }, { key: 'I', sub: '' }, { key: 'O', sub: '' },
        { key: 'P', sub: '' },
      ],
      [
        { key: 'A', sub: '' }, { key: 'S', sub: '' }, { key: 'D', sub: '' },
        { key: 'F', sub: '' }, { key: 'G', sub: '' }, { key: 'H', sub: '' },
        { key: 'J', sub: '' }, { key: 'K', sub: '' }, { key: 'L', sub: '' },
      ],
      [
        { key: 'Z', sub: '' }, { key: 'X', sub: '' }, { key: 'C', sub: '' },
        { key: 'V', sub: '' }, { key: 'B', sub: '' }, { key: 'N', sub: '' },
        { key: 'M', sub: '' },
      ],
    ],
    learnSteps: [
      { keys: [[1,0],[1,1],[1,2],[1,3]], title: 'Home Row Left (ASDF)', desc: 'Place your left hand fingers here:\nA = pinky, S = ring, D = middle, F = index' },
      { keys: [[1,4],[1,5],[1,6],[1,7],[1,8]], title: 'Home Row Right (HJKL)', desc: 'Place your right hand fingers here:\nJ = index, K = middle, L = ring\nH is also on the home row!' },
      { keys: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8]], title: 'Full Home Row', desc: 'The home row is A S D F G H J K L\nThis is where your fingers rest naturally!' },
      { keys: [[0,0],[0,1],[0,2],[0,3],[0,4]], title: 'Top Row Left (QWERT)', desc: 'Top row left side: Q W E R T\nReach up from your left hand home position' },
      { keys: [[0,5],[0,6],[0,7],[0,8],[0,9]], title: 'Top Row Right (YUIOP)', desc: 'Top row right side: Y U I O P\nReach up from your right hand home position' },
      { keys: [[2,0],[2,1],[2,2],[2,3]], title: 'Bottom Row Left (ZXCV)', desc: 'Bottom row left: Z X C V\nReach down from your left hand' },
      { keys: [[2,4],[2,5],[2,6]], title: 'Bottom Row Right (BNM)', desc: 'Bottom row right: B N M\nReach down from your right hand' },
      { keys: [[0,4],[0,5]], title: 'T and Y Keys', desc: 'T is typed with left index finger\nY is typed with right index finger\nBoth are reached from the home row!' },
      { keys: [[0,2],[0,3]], title: 'E and R Keys', desc: 'E is one of the most common letters!\nR is also very frequently used.\nLeft hand middle and index fingers.' },
      { keys: [[0,7],[0,8],[0,9]], title: 'I, O, P Keys', desc: 'I, O, P are on the top row right side\nUse right hand ring and pinky fingers\nThese letters appear very often in English!' },
    ],
    learnSteps_en: [
      { keys: [[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[2,0]], title: 'Consonant Keys', desc: 'ㄱ(R), ㅅ(T), ㅁ(A), ㄴ(S), ㅇ(D)\nㄹ(F), ㅋ(Z) — consonants on the left side' },
      { keys: [[0,5],[0,6],[0,7],[1,7],[1,8]], title: 'Vowel Keys', desc: 'ㅛ(Y), ㅕ(U), ㅑ(I), ㅏ(K), ㅣ(L)\nVowels are on the right side' },
      { keys: [[0,0],[0,1],[0,2]], title: 'ㅂ ㅈ ㄷ (Q W E)', desc: 'ㅂ(Q), ㅈ(W), ㄷ(E)\nMemorize these top-left keys!' },
      { keys: [[0,3],[0,4]], title: 'ㄱ ㅅ (R T)', desc: 'ㄱ(R), ㅅ(T)\nMost frequently used consonants' },
      { keys: [[1,4],[1,5],[1,6]], title: 'ㅎ ㅗ ㅓ (G H J)', desc: 'ㅎ(G), ㅗ(H), ㅓ(J)\nH and J are the most common vowels!' },
      { keys: [[1,7],[1,8]], title: 'ㅏ ㅣ (K L)', desc: 'ㅏ(K), ㅣ(L)\nㅏ and ㅣ are extremely common vowels' },
      { keys: [[0,8],[0,9]], title: 'ㅐ ㅔ (O P)', desc: 'ㅐ(O), ㅔ(P)\nThese are compound vowels' },
    ],
    combos: []
  }
};

// ================================================================
// 영어 레벨 데이터
// ================================================================
const ENGLISH_LEVELS = [
  { level:1, name:'기초', emoji:'⭐', desc:'짧고 쉬운 단어',
    words:['go','do','cat','dog','run','eat','sit','see','sun','love','life','time','hand','food','home','play','tree','bird','fish','rain','joy','sky','sea','air','day','boy','girl','book','ball','ship'],
    sentences:['i am happy.','the cat runs.','she eats rice.','we play games.','he reads books.','i love food.','the sun is hot.','dogs are kind.'] },
  { level:2, name:'초급', emoji:'⭐⭐', desc:'일상적인 단어',
    words:['happy','sorry','hello','water','apple','music','dance','sleep','dream','smile','think','learn','study','phone','house','school','friend','today','night','sunny','cloudy','windy','light','young','smart','brave','clean','fresh','funny','sweet'],
    sentences:['i like music.','she smiles every day.','we study english.','my friend is kind.','the weather is nice.','i dream of travel.','he helps his family.','we share our lunch.'] },
  { level:3, name:'중급', emoji:'⭐⭐⭐', desc:'조금 어려운 단어',
    words:['beautiful','important','wonderful','practice','remember','together','discover','adventure','challenge','exciting','peaceful','creative','natural','special','perfect','popular','success','journey','amazing','grateful','freedom','inspire','balance','courage','patient','healthy','culture','history','science','learning'],
    sentences:['practice makes perfect.','life is beautiful.','we discover new things.','every day is special.','she is very creative.','together we are strong.','knowledge is power.','stay positive always.'] },
  { level:4, name:'고급', emoji:'⭐⭐⭐⭐', desc:'고급 영어 단어',
    words:['extraordinary','sophisticated','determination','achievement','opportunity','inspiration','responsibility','perseverance','imagination','communication','environment','enthusiasm','magnificent','accomplish','collaborate','innovative','perspective','appreciate','understand','celebration'],
    sentences:['actions speak louder than words.','every cloud has a silver lining.','the early bird catches the worm.','a friend in need is a friend indeed.','where there is a will there is a way.'] },
  { level:5, name:'문장', emoji:'⭐⭐⭐⭐⭐', desc:'영어 문장 연습',
    words:[],
    sentences:['the quick brown fox jumps over the lazy dog.','to be or not to be that is the question.','all that glitters is not gold.','practice makes perfect in everything we do.','happiness comes from within the heart.','the sky is the limit when you believe in yourself.','a journey of a thousand miles begins with a single step.','in the middle of every difficulty lies opportunity.'] }
];

// ================================================================
// 연습 문장 데이터
// ================================================================
// 한국어 → 영어 번역 (외국인 학습자용)
const KO_EN = {
  '아이': 'child', '어머니': 'mother', '아버지': 'father',
  '사랑': 'love', '행복': 'happiness', '건강': 'health',
  '감사': 'gratitude', '안녕': 'hi / bye', '바람': 'wind',
  '구름': 'cloud', '하늘': 'sky', '바다': 'sea',
  '산길': 'mountain path', '봄날': 'spring day', '여름': 'summer', '겨울': 'winter',
  '안녕하세요': 'Hello!', '감사합니다': 'Thank you!',
  '오늘 날씨가 좋아요': 'The weather is nice today',
  '밥은 드셨나요': 'Have you eaten yet?',
  '잘 부탁드립니다': 'Please take care of me',
  '오늘도 건강하세요': 'Stay healthy today too',
  '사랑합니다': 'I love you', '행복한 하루 되세요': 'Have a happy day',
  '가족이 소중해요': 'Family is precious',
  '즐거운 하루 보내세요': 'Have a wonderful day',
};
const KO_JA = {
  '아이': 'こども（子供）', '어머니': 'おかあさん（お母さん）', '아버지': 'おとうさん（お父さん）',
  '사랑': 'あい（愛）', '행복': 'しあわせ（幸せ）', '건강': 'けんこう（健康）',
  '감사': 'かんしゃ（感謝）', '안녕': 'こんにちは／さようなら', '바람': 'かぜ（風）',
  '구름': 'くも（雲）', '하늘': 'そら（空）', '바다': 'うみ（海）',
  '산길': 'やまみち（山道）', '봄날': 'はるのひ（春の日）', '여름': 'なつ（夏）', '겨울': 'ふゆ（冬）',
  '안녕하세요': 'こんにちは！', '감사합니다': 'ありがとうございます！',
  '오늘 날씨가 좋아요': '今日はいい天気ですね',
  '밥은 드셨나요': 'ご飯はもう食べましたか',
  '잘 부탁드립니다': 'どうぞよろしくお願いします',
  '오늘도 건강하세요': '今日も健康でいてください',
  '사랑합니다': '愛しています', '행복한 하루 되세요': '幸せな一日を！',
  '가족이 소중해요': '家族は大切です',
  '즐거운 하루 보내세요': '素敵な一日をお過ごしください',
};
function getTranslation(word) {
  if (state.lang === 'en') return KO_EN[word] || '';
  if (state.lang === 'ja') return KO_JA[word] || '';
  return '';
}

const PRACTICE_DATA = {
  cheonjiin: {
    words: ['아이', '어머니', '아버지', '사랑', '행복', '건강', '감사', '안녕', '바람', '구름', '하늘', '바다', '산길', '봄날', '여름', '겨울'],
    sentences: [
      '안녕하세요',
      '감사합니다',
      '오늘 날씨가 좋아요',
      '밥은 드셨나요',
      '잘 부탁드립니다',
      '오늘도 건강하세요',
      '사랑합니다',
      '행복한 하루 되세요',
      '가족이 소중해요',
      '즐거운 하루 보내세요',
    ]
  },
  naratgeul: {
    words: ['아이', '어머니', '아버지', '사랑', '행복', '건강', '감사', '안녕', '바람', '구름', '하늘', '바다', '산길', '봄날', '여름', '겨울'],
    sentences: [
      '안녕하세요',
      '감사합니다',
      '오늘 날씨가 좋아요',
      '밥은 드셨나요',
      '잘 부탁드립니다',
      '오늘도 건강하세요',
      '사랑합니다',
      '행복한 하루 되세요',
      '가족이 소중해요',
      '즐거운 하루 보내세요',
    ]
  },
  bega: {
    words: ['아이', '어머니', '아버지', '사랑', '행복', '건강', '감사', '안녕', '바람', '구름', '하늘', '바다', '산길', '봄날', '여름', '겨울'],
    sentences: [
      '안녕하세요',
      '감사합니다',
      '오늘 날씨가 좋아요',
      '밥은 드셨나요',
      '잘 부탁드립니다',
      '오늘도 건강하세요',
      '사랑합니다',
      '행복한 하루 되세요',
      '가족이 소중해요',
      '즐거운 하루 보내세요',
    ]
  },
  qwerty: {
    words: ['apple', 'hello', 'thank', 'happy', 'love', 'smile', '사랑', '행복', '안녕', '감사', '건강', '아이', '어머니', '아버지', '하늘', '바람'],
    sentences: [
      '안녕하세요',
      '감사합니다',
      '오늘 날씨가 좋아요',
      '밥은 드셨나요',
      'Hello World',
      '행복한 하루 되세요',
      'Good morning',
      '즐거운 하루 보내세요',
    ]
  }
};

// ================================================================
// 번역 (Translations)
// ================================================================
const T = {
  ko: {
    appTitle: '손가락 타자 연습', appSub: '자판을 배우고, 연습하고, 실력을 키워요!',
    points: '포인트', myLevel: '내 등급',
    selectKeyboard: '📱 자판 선택', englishSection: '🔤 영어 타자 연습',
    englishSub: '5단계 어휘 학습 + 산성비 게임',
    levels: ['입문','초급','중급','고급','달인'],
    modeLearn: '자판 익히기', modeLearnDesc: '자판 위치를 하나씩 배워봐요',
    modePractice: '따라치기', modePracticeDesc: '화면 글자를 보고 따라 입력해요',
    modeTest: '실력 테스트', modeTestDesc: '60초 동안 얼마나 칠 수 있나요?',
    modeGame: '산성비 게임', modeGameDesc: '떨어지는 단어를 빠르게 쳐서 없애요!',
    practiceLabel: (i,n) => `따라 입력하세요 (${i}/${n})`,
    wpm: '타수', accuracy: '정확도', done: '완료', nextSentence: '✅ 다음 문장 →', space: '스페이스',
    timeLeft: '남은 시간 (초)', typeBelow: '아래 자판으로 입력하세요',
    correct: '맞은 단어', tried: '시도',
    typing: '입력 중:', quit: '✕ 나가기',
    difficulty: '난이도 선택', startGame: '🌧 게임 시작!',
    noRecord: '기록 없음', bestRecord: '🏆 최고 기록 (현재 난이도)',
    diffNames: { easy:'쉬움', normal:'보통', hard:'어려움' },
    diffDescs: { easy:'천천히 떨어지는 단어, 긴 생성 간격', normal:'기본 속도, 적당한 난이도', hard:'빠른 속도, 짧은 생성 간격' },
    prev: '← 이전', next: '다음 →', complete: '완료! 🎉',
    newRecord: '🏆 새 최고 기록!',
    pointsEarned: (n,t) => `포인트 획득! (누적: ${t.toLocaleString()}점)`,
    tryAgain: '다시 하기 🔄', otherMode: '다른 모드 선택', goHome: '홈으로 🏠',
    headerLearn: '자판 익히기', headerPractice: '따라치기',
    headerTest: '실력 테스트', headerGame: '산성비 게임',
    headerKeyboard: '자판 선택', headerEnglish: '🔤 영어 타자 연습',
    completedSentences: '완료 문장',
    learnComplete: '자판 익히기 완료!', learnMsg: '자판 위치를 모두 익혔어요!\n이제 따라치기로 연습해 보세요',
    practiceComplete: '따라치기 완료!',
    practiceMsg: (acc) => acc>=80 ? '훌륭해요! 정확도가 높아요' : '꾸준히 연습하면 실력이 늘어요!',
    testComplete: '테스트 완료!',
    testMsg: (score) => score>=10 ? '대단해요! 실력이 많이 늘었어요!' : '꾸준히 연습하면 금방 늘어요!',
    gameComplete: '산성비 종료!',
    gameMsg: (rec,score) => (rec?'🏆 최고 기록! ':'')+(score>=10?'훌륭해요! 타자 실력이 좋은데요!':'조금 더 연습하면 금방 늘어요!'),
    processedWords: '처리한 단어',
  },
  en: {
    appTitle: 'Korean Typing Trainer', appSub: 'Learn, practice, and master Korean mobile keyboards!',
    points: 'Points', myLevel: 'My Level',
    selectKeyboard: '📱 Select Keyboard', englishSection: '🔤 English Typing',
    englishSub: '5 vocabulary levels + Acid Rain game',
    levels: ['Novice','Basic','Intermediate','Advanced','Master'],
    modeLearn: 'Learn Keys', modeLearnDesc: 'Learn each key position step by step',
    modePractice: 'Copy Typing', modePracticeDesc: 'Type what you see on screen',
    modeTest: 'Speed Test', modeTestDesc: 'How much can you type in 60 seconds?',
    modeGame: 'Acid Rain', modeGameDesc: 'Type falling words before they hit the ground!',
    practiceLabel: (i,n) => `Type the text below (${i}/${n})`,
    wpm: 'Speed', accuracy: 'Accuracy', done: 'Done', nextSentence: '✅ Next →', space: 'Space',
    timeLeft: 'Time Left (sec)', typeBelow: 'Type using the keyboard below',
    correct: 'Correct', tried: 'Tried',
    typing: 'Typing:', quit: '✕ Quit',
    difficulty: 'Select Difficulty', startGame: '🌧 Start Game!',
    noRecord: 'No record yet', bestRecord: '🏆 Best Score (current difficulty)',
    diffNames: { easy:'Easy', normal:'Normal', hard:'Hard' },
    diffDescs: { easy:'Slow words, long spawn interval', normal:'Default speed, balanced', hard:'Fast speed, short spawn interval' },
    prev: '← Prev', next: 'Next →', complete: 'Done! 🎉',
    newRecord: '🏆 New Record!',
    pointsEarned: (n,t) => `Points earned! (Total: ${t.toLocaleString()})`,
    tryAgain: 'Try Again 🔄', otherMode: 'Other Modes', goHome: 'Home 🏠',
    headerLearn: 'Learn Keys', headerPractice: 'Copy Typing',
    headerTest: 'Speed Test', headerGame: 'Acid Rain',
    headerKeyboard: 'Select Keyboard', headerEnglish: '🔤 English Typing',
    completedSentences: 'Sentences',
    learnComplete: 'Key Learning Complete!', learnMsg: "You've learned all key positions!\nNow try Copy Typing to practice!",
    practiceComplete: 'Copy Typing Done!',
    practiceMsg: (acc) => acc>=80 ? 'Excellent accuracy!' : 'Keep practicing to improve!',
    testComplete: 'Speed Test Done!',
    testMsg: (score) => score>=10 ? 'Amazing! Your skills have improved!' : 'Keep practicing, you\'ll get better fast!',
    gameComplete: 'Acid Rain Over!',
    gameMsg: (rec,score) => (rec?'🏆 New Record! ':'')+(score>=10?'Great job! Excellent typing skills!':'A bit more practice and you\'ll fly!'),
    processedWords: 'Words Cleared',
  }
  ,ja: {
    appTitle: '指タイピング練習', appSub: 'キーボードを学び、練習し、上達しよう！',
    points: 'ポイント', myLevel: '自分のレベル',
    selectKeyboard: '📱 キーボード選択', englishSection: '🔤 英語タイピング',
    englishSub: '5段階語彙学習 + 酸性雨ゲーム',
    levels: ['初心者','初級','中級','上級','達人'],
    modeLearn: 'キー学習', modeLearnDesc: 'キーの位置を一つずつ覚えましょう',
    modePractice: '写し打ち', modePracticeDesc: '画面の文字を見て入力しましょう',
    modeTest: '実力テスト', modeTestDesc: '60秒間どれだけ打てるか？',
    modeGame: '酸性雨ゲーム', modeGameDesc: '落ちてくる単語を素早く打って消そう！',
    practiceLabel: (i,n) => `入力してください (${i}/${n})`,
    wpm: '打数', accuracy: '正確度', done: '完了', nextSentence: '✅ 次の文 →', space: 'スペース',
    timeLeft: '残り時間（秒）', typeBelow: '下のキーボードで入力してください',
    correct: '正解', tried: '試行',
    typing: '入力中：', quit: '✕ 終了',
    difficulty: '難易度選択', startGame: '🌧 ゲーム開始！',
    noRecord: '記録なし', bestRecord: '🏆 最高記録（現在の難易度）',
    diffNames: { easy:'簡単', normal:'普通', hard:'難しい' },
    diffDescs: { easy:'ゆっくりな単語、長い生成間隔', normal:'デフォルト速度、バランス良し', hard:'速い速度、短い生成間隔' },
    prev: '← 前へ', next: '次へ →', complete: '完了！🎉',
    newRecord: '🏆 新記録！',
    pointsEarned: (n,t) => `ポイント獲得！（合計：${t.toLocaleString()}点）`,
    tryAgain: 'もう一度 🔄', otherMode: '他のモード', goHome: 'ホームへ 🏠',
    headerLearn: 'キー学習', headerPractice: '写し打ち',
    headerTest: '実力テスト', headerGame: '酸性雨ゲーム',
    headerKeyboard: 'キーボード選択', headerEnglish: '🔤 英語タイピング',
    completedSentences: '完了文',
    learnComplete: 'キー学習完了！', learnMsg: 'すべてのキー位置を覚えました！\n次は写し打ちで練習しましょう',
    practiceComplete: '写し打ち完了！',
    practiceMsg: (acc) => acc>=80 ? '素晴らしい！正確度が高いです' : '継続して練習すれば上達します！',
    testComplete: 'テスト完了！',
    testMsg: (score) => score>=10 ? 'すごい！実力がついています！' : '練習を続ければすぐに上達します！',
    gameComplete: '酸性雨終了！',
    gameMsg: (rec,score) => (rec?'🏆 新記録！ ':'')+(score>=10?'素晴らしい！タイピングが上手ですね！':'もう少し練習すればすぐに上達します！'),
    processedWords: '処理した単語',
  }
};
function tl() { return T[state.lang] || T.ko; }

// ================================================================
// 상태 (State)
// ================================================================
const state = {
  screen: 'home',
  selectedKeyboard: null,
  selectedMode: null,
  lang: localStorage.getItem('rodi_lang') || 'ko',
  points: parseInt(localStorage.getItem('rodi_points') || '0'),
  level: parseInt(localStorage.getItem('rodi_level') || '1'),

  // Practice
  practiceTexts: [],
  practiceIndex: 0,
  practiceInput: '',
  practiceStartTime: null,
  practiceCorrect: 0,
  practiceTotal: 0,

  // Test
  testWords: [],
  testWordIndex: 0,
  testScore: 0,
  testTimer: 60,
  testTimerInterval: null,
  testInput: '',

  // Learn
  learnStep: 0,

  // Result
  resultData: {},

  // Game (산성비)
  gameActive: false,
  gameWords: [],
  gameScore: 0,
  gameLives: 3,
  gameLevel: 1,
  gameWordIdCounter: 0,
  gameLastSpawn: 0,
  gameLastFrame: 0,
  gameAnimFrame: null,
  gameSpawnInterval: 2500,
  gameFallSpeed: 0.025,
  gameDifficulty: 'normal',

  // English
  englishInput: '',
  englishLevel: 1,
};

function savePoints() {
  localStorage.setItem('rodi_points', state.points);
  localStorage.setItem('rodi_level', state.level);
}

// ================================================================
// 사운드 시스템
// ================================================================
let audioCtx = null;
let bgmInterval = null;
let soundOn = true;

function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, dur, type, vol) {
  type = type || 'sine';
  vol = vol !== undefined ? vol : 0.3;
  if (!soundOn) return;
  try {
    const ctx = getAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(); osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}

function playSound(type) {
  switch(type) {
    case 'pop':
      playTone(880, 0.08, 'sine', 0.3);
      setTimeout(function(){ playTone(1320, 0.06, 'sine', 0.2); }, 60);
      break;
    case 'miss':
      playTone(150, 0.3, 'sawtooth', 0.4);
      break;
    case 'over':
      [392, 330, 294, 220].forEach(function(f, i){ setTimeout(function(){ playTone(f, 0.25, 'sawtooth', 0.2); }, i*200); });
      break;
    case 'tap':
      playTone(800, 0.04, 'sine', 0.1);
      break;
    case 'correct':
      playTone(660, 0.1, 'sine', 0.2);
      setTimeout(function(){ playTone(880, 0.1, 'sine', 0.15); }, 80);
      break;
  }
}

const BGM_PATTERN = [330, 294, 262, 294, 330, 330, 330, 294, 294, 294, 330, 392, 392];
let bgmStep = 0;

function startBGM() {
  if (bgmInterval) return;
  bgmStep = 0;
  bgmInterval = setInterval(function(){
    if (soundOn) playTone(BGM_PATTERN[bgmStep % BGM_PATTERN.length], 0.2, 'square', 0.07);
    bgmStep++;
  }, 300);
}

function stopBGM() {
  if (bgmInterval) { clearInterval(bgmInterval); bgmInterval = null; }
}

function toggleSound() {
  soundOn = !soundOn;
  var btn = document.getElementById('sound-btn');
  if (btn) btn.textContent = soundOn ? '🔊' : '🔇';
  if (!soundOn) stopBGM();
  else if (state.screen === 'game' && state.gameActive) startBGM();
}

// ================================================================
// 하이 스코어
// ================================================================
function getHighScores(kbId, difficulty) {
  return JSON.parse(localStorage.getItem('hs_' + kbId + '_' + difficulty) || '[]');
}

function addHighScore(kbId, difficulty, score) {
  var scores = getHighScores(kbId, difficulty);
  scores.push(score);
  scores.sort(function(a, b){ return b - a; });
  localStorage.setItem('hs_' + kbId + '_' + difficulty, JSON.stringify(scores.slice(0, 5)));
}

function isNewHighScore(kbId, difficulty, score) {
  var scores = getHighScores(kbId, difficulty);
  return scores.length === 0 || score > scores[0];
}

// ================================================================
// 렌더링 메인
// ================================================================
function render() {
  const app = document.getElementById('app');
  const screens = {
    home: renderHome,
    menu: renderMenu,
    learn: renderLearn,
    practice: renderPractice,
    test: renderTest,
    game: renderGame,
    result: renderResult,
    englishMenu: renderEnglishMenu,
    gameDifficulty: renderGameDifficulty,
  };
  app.innerHTML = (screens[state.screen] || renderHome)();
  attachListeners();
}

// ================================================================
// 홈 화면
// ================================================================
function renderHome() {
  const L = tl();
  const isEn = state.lang === 'en';
  const kbCards = Object.values(KEYBOARDS).filter(kb => kb.id !== 'english').map(kb => `
    <button class="keyboard-card" onclick="selectKeyboard('${kb.id}')"
      style="background: linear-gradient(145deg, ${kb.color}CC, ${kb.color}88);
             box-shadow: 0 8px 24px ${kb.color}44;">
      <div class="card-icon">${kb.icon}</div>
      <div class="card-name">${kb.name}</div>
      <div class="card-tagline">${isEn ? (kb.tagline_en||kb.tagline) : kb.tagline}</div>
      <span class="card-badge">${isEn ? (kb.badgeText_en||kb.badgeText) : kb.badgeText}</span>
    </button>
  `).join('');

  const levelName = getLevelName(state.level);

  return `
    <div class="screen home-screen">
      <div class="home-hero">
        <button class="lang-toggle-btn" onclick="toggleLang()">${state.lang==='ko'?'🇺🇸 English':state.lang==='en'?'🇯🇵 日本語':'🇰🇷 한국어'}</button>
        <div class="home-logo">👆</div>
        <div class="home-title">${state.lang==='en'?'Korean <span>Typing Trainer</span>':state.lang==='ja'?'指 <span>タイピング練習</span>':'손가락 <span>타자 연습</span>'}</div>
        <div class="home-sub">${L.appSub}</div>
        <div class="home-stats">
          <div class="stat-box">
            <div class="stat-value">${state.points.toLocaleString()}</div>
            <div class="stat-label">${L.points}</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${levelName}</div>
            <div class="stat-label">${L.myLevel}</div>
          </div>
        </div>
      </div>
      <div class="home-section-title">${L.selectKeyboard}</div>
      <div class="keyboard-grid">${kbCards}</div>
      <div class="home-english-section">
        <div class="home-section-title">${L.englishSection}</div>
        <button class="english-card" onclick="goEnglish()">
          <div class="english-card-left">
            <div class="english-card-icon">🔤</div>
            <div>
              <div class="english-card-title">English Typing</div>
              <div class="english-card-sub">${L.englishSub}</div>
            </div>
          </div>
          <span style="color:#10B981">→</span>
        </button>
      </div>
    </div>
  `;
}

function getLevelName(level) {
  const L = tl();
  return L.levels[Math.min(level - 1, L.levels.length - 1)];
}

function selectKeyboard(kbId) {
  state.selectedKeyboard = kbId;
  state.screen = 'menu';
  render();
}

function goEnglish() {
  state.screen = 'englishMenu';
  render();
}

// ================================================================
// 영어 메뉴 화면
// ================================================================
function renderEnglishMenu() {
  const levelCards = ENGLISH_LEVELS.map(lv => {
    const isActive = state.englishLevel === lv.level;
    const wordCount = lv.level === 5 ? lv.sentences.length + ' 문장' : lv.words.length + ' 단어';
    return `
      <div class="level-card ${isActive ? 'active' : ''}" onclick="selectEnglishLevel(${lv.level})">
        <div class="level-card-emoji">${lv.emoji}</div>
        <div class="level-card-info">
          <div class="level-name">Level ${lv.level} · ${lv.name}</div>
          <div class="level-desc">${lv.desc}</div>
        </div>
        <div class="level-card-count">${wordCount}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="screen english-menu-screen">
      <div class="header">
        <button class="btn-back" onclick="goHome()">←</button>
        <span class="header-title">🔤 영어 타자 연습</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="level-cards">
        ${levelCards}
      </div>

      <div class="menu-modes" style="padding: 0 16px 20px;">
        <button class="mode-btn" onclick="startEnglishMode('practice')" style="border-left: 4px solid #10B981;">
          <span class="mode-icon">✏️</span>
          <div class="mode-text">
            <div class="mode-title">따라치기</div>
            <div class="mode-desc">문장을 보고 따라 입력해요</div>
          </div>
          <span class="mode-arrow" style="color:#10B981">→</span>
        </button>

        <button class="mode-btn" onclick="startEnglishMode('test')" style="border-left: 4px solid #10B981;">
          <span class="mode-icon">🏆</span>
          <div class="mode-text">
            <div class="mode-title">실력 테스트</div>
            <div class="mode-desc">60초 동안 얼마나 칠 수 있나요?</div>
          </div>
          <span class="mode-arrow" style="color:#10B981">→</span>
        </button>

        <button class="mode-btn mode-btn-game" onclick="startEnglishMode('game')" style="border-left: 4px solid #FF6B35;">
          <span class="mode-icon">🌧</span>
          <div class="mode-text">
            <div class="mode-title">산성비 게임</div>
            <div class="mode-desc">떨어지는 단어를 빠르게 쳐서 없애요!</div>
          </div>
          <span class="mode-arrow" style="color:#FF6B35">→</span>
        </button>
      </div>
    </div>
  `;
}

function selectEnglishLevel(level) {
  state.englishLevel = level;
  render();
}

function startEnglishMode(mode) {
  state.selectedKeyboard = 'english';
  state.selectedMode = mode;
  const lvData = ENGLISH_LEVELS[state.englishLevel - 1];

  if (mode === 'practice') {
    const sentences = lvData.level === 5 ? [...lvData.sentences] : [...lvData.sentences];
    state.practiceTexts = shuffleArray(sentences);
    state.practiceIndex = 0;
    state.practiceInput = '';
    state.practiceStartTime = null;
    state.practiceCorrect = 0;
    state.practiceTotal = 0;
    imeReset();
    state.screen = 'practice';
  } else if (mode === 'test') {
    const words = lvData.level === 5 ? [...lvData.sentences] : [...lvData.words, ...lvData.words];
    state.testWords = shuffleArray(words);
    state.testWordIndex = 0;
    state.testScore = 0;
    state.testTimer = 60;
    state.testInput = '';
    if (state.testTimerInterval) clearInterval(state.testTimerInterval);
    state.testTimerInterval = null;
    imeReset();
    state.screen = 'test';
  } else if (mode === 'game') {
    state.screen = 'gameDifficulty';
  }
  render();
}

// ================================================================
// 난이도 선택 화면
// ================================================================
function renderGameDifficulty() {
  const kbId = state.selectedKeyboard || 'cheonjiin';
  const L = tl();
  const difficulties = [
    { id: 'easy', icon: '🌱' },
    { id: 'normal', icon: '⚡' },
    { id: 'hard', icon: '🔥' },
  ];

  const diffCards = difficulties.map(d => `
    <div class="difficulty-card ${state.gameDifficulty === d.id ? 'selected' : ''}" onclick="selectDifficulty('${d.id}')">
      <div class="diff-icon">${d.icon}</div>
      <div>
        <div class="diff-name">${L.diffNames[d.id]}</div>
        <div class="diff-desc">${L.diffDescs[d.id]}</div>
      </div>
    </div>
  `).join('');

  const scores = getHighScores(kbId, state.gameDifficulty);
  const topScores = scores.slice(0, 3);
  const scoresHtml = topScores.length > 0
    ? topScores.map((s, i) => `<div class="hs-item">${['🥇','🥈','🥉'][i]} ${s}</div>`).join('')
    : `<div style="color:rgba(255,255,255,0.4);font-size:13px;">${L.noRecord}</div>`;

  return `
    <div class="difficulty-screen">
      <div class="header">
        <button class="btn-back" onclick="goMenuFromDifficulty()">←</button>
        <span class="header-title">${L.difficulty}</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="difficulty-cards">
        ${diffCards}
      </div>

      <div class="highscore-section">
        <div class="highscore-title">${L.bestRecord}</div>
        <div class="highscore-list">${scoresHtml}</div>
      </div>

      <button class="btn-start-game" onclick="startGameFromDifficulty()">
        ${L.startGame}
      </button>
    </div>
  `;
}

function selectDifficulty(diff) {
  state.gameDifficulty = diff;
  render();
}

function goMenuFromDifficulty() {
  if (state.selectedKeyboard === 'english') {
    state.screen = 'englishMenu';
  } else {
    state.screen = 'menu';
  }
  render();
}

function startGameFromDifficulty() {
  const kbId = state.selectedKeyboard;
  state.gameActive = false;
  state.gameWords = [];
  state.gameScore = 0;
  state.gameLives = 3;
  state.gameLevel = 1;
  state.gameWordIdCounter = 0;
  state.gameLastSpawn = 0;
  state.gameLastFrame = 0;
  if (state.gameAnimFrame) { cancelAnimationFrame(state.gameAnimFrame); state.gameAnimFrame = null; }
  imeReset();
  state.screen = 'game';
  render();
}

// ================================================================
// 메뉴 화면 (모드 선택)
// ================================================================
function renderMenu() {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const L = tl();
  const isEn = state.lang === 'en';
  const kbSuffix = isEn ? '' : ' 자판';
  return `
    <div class="screen menu-screen">
      <div class="header">
        <button class="btn-back" onclick="goHome()">←</button>
        <span class="header-title">${L.headerKeyboard}</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="menu-keyboard-info"
        style="background: linear-gradient(145deg, ${kb.color}33, ${kb.color}11);
               border: 1px solid ${kb.color}44;">
        <div class="menu-kb-icon">${kb.icon}</div>
        <div class="menu-kb-name" style="color:${kb.color}">${kb.name}${kbSuffix}</div>
        <div class="menu-kb-desc">${isEn ? (kb.description_en||kb.description) : kb.description}</div>
      </div>

      <div class="menu-modes">
        <button class="mode-btn" onclick="startMode('learn')"
          style="border-left: 4px solid ${kb.color};">
          <span class="mode-icon">📖</span>
          <div class="mode-text">
            <div class="mode-title">${L.modeLearn}</div>
            <div class="mode-desc">${L.modeLearnDesc}</div>
          </div>
          <span class="mode-arrow" style="color:${kb.color}">→</span>
        </button>

        <button class="mode-btn" onclick="startMode('practice')"
          style="border-left: 4px solid ${kb.color};">
          <span class="mode-icon">✏️</span>
          <div class="mode-text">
            <div class="mode-title">${L.modePractice}</div>
            <div class="mode-desc">${L.modePracticeDesc}</div>
          </div>
          <span class="mode-arrow" style="color:${kb.color}">→</span>
        </button>

        <button class="mode-btn" onclick="startMode('test')"
          style="border-left: 4px solid ${kb.color};">
          <span class="mode-icon">🏆</span>
          <div class="mode-text">
            <div class="mode-title">${L.modeTest}</div>
            <div class="mode-desc">${L.modeTestDesc}</div>
          </div>
          <span class="mode-arrow" style="color:${kb.color}">→</span>
        </button>

        <button class="mode-btn mode-btn-game" onclick="startMode('game')"
          style="border-left: 4px solid #FF6B35;">
          <span class="mode-icon">🌧</span>
          <div class="mode-text">
            <div class="mode-title">${L.modeGame}</div>
            <div class="mode-desc">${L.modeGameDesc}</div>
          </div>
          <span class="mode-arrow" style="color:#FF6B35">→</span>
        </button>
      </div>
    </div>
  `;
}

function startMode(mode) {
  state.selectedMode = mode;
  const kb = KEYBOARDS[state.selectedKeyboard];

  if (mode === 'learn') {
    state.learnStep = 0;
    state.screen = mode;
  } else if (mode === 'practice') {
    const data = PRACTICE_DATA[state.selectedKeyboard];
    state.practiceTexts = shuffleArray([...data.sentences]);
    state.practiceIndex = 0;
    state.practiceInput = '';
    state.practiceStartTime = null;
    state.practiceCorrect = 0;
    state.practiceTotal = 0;
    imeReset();
    state.screen = mode;
  } else if (mode === 'test') {
    const data = PRACTICE_DATA[state.selectedKeyboard];
    state.testWords = shuffleArray([...data.words, ...data.words]);
    state.testWordIndex = 0;
    state.testScore = 0;
    state.testTimer = 60;
    state.testInput = '';
    if (state.testTimerInterval) clearInterval(state.testTimerInterval);
    state.testTimerInterval = null;
    imeReset();
    state.screen = mode;
  } else if (mode === 'game') {
    // Go to difficulty selection screen
    state.screen = 'gameDifficulty';
  }
  render();
}

// ================================================================
// 자판 익히기 화면
// ================================================================
function renderLearn() {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const L = tl();
  const isEn = state.lang === 'en';
  const steps = (isEn && kb.learnSteps_en) ? kb.learnSteps_en : kb.learnSteps;
  const step = steps[state.learnStep];
  const progress = Math.round(((state.learnStep + 1) / steps.length) * 100);
  const isLast = state.learnStep >= steps.length - 1;
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';

  return `
    <div class="screen learn-screen">
      <div class="header">
        <button class="btn-back" onclick="goMenu()">←</button>
        <span class="header-title">${kb.icon} ${L.headerLearn}</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="progress-bar-wrap">
        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%;background:${kb.color}"></div>
        </div>
        <div class="progress-text">${state.learnStep + 1} / ${steps.length}</div>
      </div>

      <div class="learn-info-box">
        <div class="learn-key-display" style="color:${kb.color}">${step.title.split('(')[0].trim()}</div>
        <div class="learn-key-title">${step.title}</div>
        <div class="learn-key-desc">${step.desc}</div>
      </div>

      <div class="keyboard-visual ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, step.keys)}
      </div>

      ${kb.combos.length > 0 && state.learnStep >= kb.learnSteps.length - 6 ? renderCombos(kb) : ''}

      <div class="learn-nav">
        ${state.learnStep > 0 ? `<button class="btn-nav secondary" onclick="learnPrev()">${L.prev}</button>` : '<div style="flex:1"></div>'}
        ${isLast
          ? `<button class="btn-nav primary" style="background:${kb.color}" onclick="learnFinish()">${L.complete}</button>`
          : `<button class="btn-nav primary" style="background:${kb.color}" onclick="learnNext()">${L.next}</button>`
        }
      </div>
    </div>
  `;
}

function renderKeyboard(kb, highlightKeys, mode) {
  return kb.rows.map((row, ri) => `
    <div class="kb-row">
      ${row.map((key, ci) => {
        const isHighlighted = highlightKeys && highlightKeys.some(h => h[0] === ri && h[1] === ci);
        const hlStyle = isHighlighted
          ? `style="background: linear-gradient(135deg, ${kb.color}EE, ${kb.color}99); --kb-color: ${kb.color}88; border-color: transparent;"`
          : '';
        const attr = mode === 'input'
          ? `data-vkey="${key.key}"`
          : `data-row="${ri}" data-col="${ci}"`;
        const innerHtml = (kb.subSide && key.sub)
          ? `<span class="key-main">${key.key}</span><span class="key-sep">·</span><span class="key-sub-side">${key.sub}</span>`
          : `${key.key}${key.sub ? `<span class="key-sub">${key.sub}</span>` : ''}`;
        return `<button class="kb-key ${isHighlighted ? 'highlight' : ''} ${kb.subSide && key.sub ? 'key-side' : ''}" ${attr} ${hlStyle}>${innerHtml}</button>`;
      }).join('')}
    </div>
  `).join('');
}

function renderCombos(kb) {
  if (!kb.combos || kb.combos.length === 0) return '';
  return `
    <div class="combo-guide">
      <div class="combo-title">💡 모음 조합 정리</div>
      <div class="combo-grid">
        ${kb.combos.map(c => `
          <div class="combo-item">
            <div class="combo-result">${c.result}</div>
            <div class="combo-how">${c.how}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function keyTap(row, col) {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const step = kb.learnSteps[state.learnStep];
  const isTarget = step.keys && step.keys.some(h => h[0] === row && h[1] === col);
  if (isTarget) {
    state.points += 1;
    savePoints();
    if (state.learnStep >= kb.learnSteps.length - 1) {
      learnFinish();
    } else {
      state.learnStep++;
      render();
    }
  }
}

function learnNext() {
  const kb = KEYBOARDS[state.selectedKeyboard];
  if (state.learnStep < kb.learnSteps.length - 1) {
    state.learnStep++;
    render();
  }
}

function learnPrev() {
  if (state.learnStep > 0) {
    state.learnStep--;
    render();
  }
}

function learnFinish() {
  const earned = 20;
  state.points += earned;
  savePoints();
  const L = tl();
  state.resultData = {
    mode: 'learn',
    earned,
    title: L.learnComplete,
    emoji: '🎓',
    grade: '수료',
    msg: L.learnMsg,
    stats: []
  };
  state.screen = 'result';
  render();
}

// ================================================================
// 한글 입력기 (Korean IME)
// ================================================================

const CHO_LIST  = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JUNG_LIST = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const JONG_LIST = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

const CHO_IDX  = {}; CHO_LIST.forEach((c,i) => { CHO_IDX[c]=i; });
const JUNG_IDX = {}; JUNG_LIST.forEach((c,i) => { JUNG_IDX[c]=i; });
const JONG_IDX = {}; JONG_LIST.forEach((c,i) => { if(c) JONG_IDX[c]=i; });

const JONG_SPLIT = {
  'ㄳ':['ㄱ','ㅅ'],'ㄵ':['ㄴ','ㅈ'],'ㄶ':['ㄴ','ㅎ'],
  'ㄺ':['ㄹ','ㄱ'],'ㄻ':['ㄹ','ㅁ'],'ㄼ':['ㄹ','ㅂ'],
  'ㄽ':['ㄹ','ㅅ'],'ㄾ':['ㄹ','ㅌ'],'ㄿ':['ㄹ','ㅍ'],
  'ㅀ':['ㄹ','ㅎ'],'ㅄ':['ㅂ','ㅅ']
};
const JONG_MERGE = {
  'ㄱ+ㅅ':'ㄳ','ㄴ+ㅈ':'ㄵ','ㄴ+ㅎ':'ㄶ',
  'ㄹ+ㄱ':'ㄺ','ㄹ+ㅁ':'ㄻ','ㄹ+ㅂ':'ㄼ',
  'ㄹ+ㅅ':'ㄽ','ㄹ+ㅌ':'ㄾ','ㄹ+ㅍ':'ㄿ',
  'ㄹ+ㅎ':'ㅀ','ㅂ+ㅅ':'ㅄ'
};
const VOWEL_COMBINE = {
  'ㅗ+ㅏ':'ㅘ','ㅗ+ㅐ':'ㅙ','ㅗ+ㅣ':'ㅚ',
  'ㅜ+ㅓ':'ㅝ','ㅜ+ㅔ':'ㅞ','ㅜ+ㅣ':'ㅟ',
  'ㅡ+ㅣ':'ㅢ',
  'ㅏ+ㅣ':'ㅐ',  // 천지인: ㅣ+·+ㅣ = ㅐ
  'ㅓ+ㅣ':'ㅔ',  // 천지인/베가: ·+ㅣ+ㅣ = ㅔ
};
// 천지인 더블탭 → 보조 자음
const DOUBLE_CON = { 'ㄱ':'ㅋ','ㄴ':'ㄹ','ㄷ':'ㅌ','ㅂ':'ㅍ','ㅅ':'ㅎ','ㅈ':'ㅊ','ㅇ':'ㅁ' };
// 베가 더블탭 → 보조 키
const BEGA_SECONDARY = {
  'ㄱ':'ㅋ','ㄴ':'ㄹ','ㄷ':'ㅌ','ㅁ':'ㅅ','ㅂ':'ㅍ','ㅈ':'ㅊ',
  'ㅣ':'ㅡ','ㅏ':'ㅑ','ㅓ':'ㅕ','ㅗ':'ㅛ','ㅜ':'ㅠ','ㅇ':'ㅎ'
};
// 나랏글 획추가 맵 (순환)
const HOEK_CHUGA_MAP = {
  'ㄱ':'ㅋ','ㅋ':'ㄱ',
  'ㄴ':'ㄷ','ㄷ':'ㅌ','ㅌ':'ㄴ',
  'ㅁ':'ㅂ','ㅂ':'ㅍ','ㅍ':'ㅁ',
  'ㅅ':'ㅈ','ㅈ':'ㅊ','ㅊ':'ㅅ',
  'ㅇ':'ㅎ','ㅎ':'ㅇ'
};
// 나랏글 쌍자음 맵
const SSANG_MAP = { 'ㄱ':'ㄲ','ㄷ':'ㄸ','ㅂ':'ㅃ','ㅅ':'ㅆ','ㅈ':'ㅉ' };
// 나랏글 모음 토글 (같은 키 재탭)
const NARATGEUL_VOWEL_TOGGLE = { 'ㅏ':'ㅓ','ㅓ':'ㅏ','ㅗ':'ㅜ','ㅜ':'ㅗ' };
const VOWEL_SET  = new Set(JUNG_LIST);

function makeSyllable(cho, jung, jong) {
  if (!jung) return cho || '';
  const c = CHO_IDX[cho] != null ? CHO_IDX[cho] : 11;
  const j = JUNG_IDX[jung];
  if (j === undefined) return (cho||'') + jung;
  const jj = jong ? (JONG_IDX[jong] || 0) : 0;
  return String.fromCharCode(0xAC00 + (c * 21 + j) * 28 + jj);
}

let ime = { committed:'', cho:null, jung:null, jong:null, jongFirst:null };

function imeReset() {
  ime = { committed:'', cho:null, jung:null, jong:null, jongFirst:null };
  cjState = 'empty';
  lastTap = { key:null, time:0 };
  state.englishInput = '';
}

function imeCurrent() {
  if (!ime.cho && !ime.jung) return '';
  if (!ime.jung) return ime.cho;
  return makeSyllable(ime.cho || 'ㅇ', ime.jung, ime.jong);
}

function imeText() { return ime.committed + imeCurrent(); }

function imeCommit() {
  const cur = imeCurrent();
  if (cur) ime.committed += cur;
  ime.cho = null; ime.jung = null; ime.jong = null; ime.jongFirst = null;
}

function imeInputVowel(v) {
  if (!ime.cho && !ime.jung) {
    ime.cho = 'ㅇ'; ime.jung = v;
  } else if (ime.cho && !ime.jung) {
    ime.jung = v;
  } else if (ime.cho && ime.jung && !ime.jong) {
    const combined = VOWEL_COMBINE[ime.jung + '+' + v];
    if (combined) { ime.jung = combined; }
    else { imeCommit(); ime.cho = 'ㅇ'; ime.jung = v; }
  } else if (ime.jong) {
    const split = JONG_SPLIT[ime.jong];
    if (split) {
      ime.jong = split[0];
      imeCommit();
      ime.cho = split[1]; ime.jung = v;
    } else {
      const prevJong = ime.jong;
      ime.jong = null;
      imeCommit();
      ime.cho = prevJong; ime.jung = v;
    }
  }
}

function imeInputConsonant(c) {
  if (!ime.cho && !ime.jung) {
    ime.cho = c;
  } else if (ime.cho && !ime.jung) {
    imeCommit(); ime.cho = c;
  } else if (ime.cho && ime.jung && !ime.jong) {
    if (JONG_IDX[c] !== undefined) {
      ime.jong = c; ime.jongFirst = c;
    } else { imeCommit(); ime.cho = c; }
  } else if (ime.jong) {
    const merged = JONG_MERGE[(ime.jongFirst||ime.jong) + '+' + c];
    if (merged) { ime.jong = merged; }
    else { imeCommit(); ime.cho = c; }
  }
}

function imeBackspace() {
  if (cjState !== 'empty') {
    const prev = { dot2:'dot1', dot1:'empty', ho_dot:'ho', i_dot:'i_pend' };
    cjState = prev[cjState] || 'empty';
    return;
  }
  if (ime.jong) {
    if (JONG_SPLIT[ime.jong]) { ime.jong = ime.jongFirst; }
    else { ime.jong = null; ime.jongFirst = null; }
  } else if (ime.jung) {
    ime.jung = null;
  } else if (ime.cho) {
    ime.cho = null;
  } else if (ime.committed.length > 0) {
    ime.committed = ime.committed.slice(0, -1);
  }
}

function imeSpace() {
  const v = cjFlush(); if (v) imeInputVowel(v);
  imeCommit(); ime.committed += ' ';
}

// ── 천지인 모음 상태 머신 ───────────────────────────
let cjState = 'empty';

function cjFlush() {
  // ㅏ = ㅣ+·, ㅓ = ·+ㅣ (점의 방향: 오른쪽→ㅏ, 왼쪽→ㅓ)
  const map = { ho:'ㅡ', ho_dot:'ㅜ', i_pend:'ㅣ', i_dot:'ㅏ' };
  const v = map[cjState] || null;
  cjState = 'empty';
  return v;
}

// 천지인 pending 상태를 화면에 표시할 임시 문자 반환
function cjPendingChar() {
  switch(cjState) {
    case 'dot1':   return '·';
    case 'dot2':   return '··';
    case 'ho':     return 'ㅡ';
    case 'ho_dot': return 'ㅜ';
    case 'i_pend': return 'ㅣ';
    case 'i_dot':  return 'ㅏ';
    default:       return '';
  }
}

function cjTap(key) {
  if (key === '·') {
    if      (cjState==='empty')  cjState = 'dot1';
    else if (cjState==='dot1')   cjState = 'dot2';
    else if (cjState==='dot2')   cjState = 'dot1';
    else if (cjState==='ho')     cjState = 'ho_dot';
    else if (cjState==='ho_dot') { imeInputVowel('ㅠ'); cjState='empty'; }
    else if (cjState==='i_pend') cjState = 'i_dot';
    else if (cjState==='i_dot')  { imeInputVowel('ㅑ'); cjState='empty'; }  // ㅣ+··=ㅑ
    return;
  }
  if (key === 'ㅡ') {
    if      (cjState==='empty')  cjState = 'ho';
    else if (cjState==='dot1')   { imeInputVowel('ㅗ'); cjState='empty'; }
    else if (cjState==='dot2')   { imeInputVowel('ㅛ'); cjState='empty'; }
    else { const v=cjFlush(); if(v) imeInputVowel(v); cjState='ho'; }
    return;
  }
  if (key === 'ㅣ') {
    if      (cjState==='dot1')   { imeInputVowel('ㅓ'); cjState='empty'; return; }  // ·+ㅣ=ㅓ
    if      (cjState==='dot2')   { imeInputVowel('ㅕ'); cjState='empty'; return; }  // ··+ㅣ=ㅕ
    if      (cjState==='i_pend') { imeInputVowel('ㅣ'); cjState='i_pend'; return; }
    // 그 외 상태: 먼저 pending flush
    const v = cjFlush(); if (v) imeInputVowel(v);
    // flush가 없었을 때만 (= 자음+모음 조합 중) jung+ㅣ 합성 시도
    // v가 있으면 flush로 새 음절 시작한 것 → 합성 안 함 (아이→얘 버그 방지)
    if (!v && ime.cho && ime.jung && !ime.jong && VOWEL_COMBINE[ime.jung + '+ㅣ']) {
      imeInputVowel('ㅣ'); cjState = 'empty';
    } else {
      cjState = 'i_pend';
    }
    return;
  }
  // 자음: 먼저 대기 중인 모음 flush
  const v = cjFlush();
  if (v) imeInputVowel(v);
  imeInputConsonant(key);
}

// ── 더블탭 (쌍자음) ─────────────────────────────────
let lastTap = { key:null, time:0 };
function isDoubleTap(key) {
  const now = Date.now();
  const dbl = key === lastTap.key && now - lastTap.time < 400;
  lastTap = { key, time: now };
  return dbl;
}

// ── 나랏글 특수키 처리 ──────────────────────────────
function naratgeulHoekChuga() {
  // 현재 IME에서 마지막 자음에 획 추가
  if (ime.jong && !JONG_SPLIT[ime.jong]) {
    const next = HOEK_CHUGA_MAP[ime.jong];
    if (next) {
      if (JONG_IDX[next] !== undefined) {
        ime.jong = next; ime.jongFirst = next;
      } else {
        // 종성으로 안 되면 분리
        ime.jong = null; ime.jongFirst = null;
        imeCommit();
        ime.cho = next;
      }
    }
  } else if (ime.cho && !ime.jung) {
    const next = HOEK_CHUGA_MAP[ime.cho];
    if (next) ime.cho = next;
  }
}

function naratgeulSsangJaeeum() {
  if (ime.jong && !JONG_SPLIT[ime.jong]) {
    const next = SSANG_MAP[ime.jong];
    if (next && JONG_IDX[next] !== undefined) {
      ime.jong = next; ime.jongFirst = next;
    }
  } else if (ime.cho && !ime.jung) {
    const next = SSANG_MAP[ime.cho];
    if (next) ime.cho = next;
  }
}

// ── 가상 자판 탭 처리 ────────────────────────────────
function virtualKeyTap(key) {
  // English mode - handle first
  if (state.selectedKeyboard === 'english') {
    if (key === '⌫') {
      state.englishInput = state.englishInput.slice(0, -1);
    } else if (key === ' ') {
      state.englishInput += ' ';
    } else if (key.length === 1) {
      state.englishInput += key.toLowerCase();
    }
    const dispEl = document.getElementById('ime-display');
    if (dispEl) dispEl.textContent = state.englishInput;
    if (state.screen === 'practice') updatePracticeDisplay(state.englishInput);
    else if (state.screen === 'test') onVirtualTestInput(state.englishInput);
    else if (state.screen === 'game') updateGameMatching(state.englishInput);
    playSound('tap');
    return;
  }

  if (key === '⌫') {
    imeBackspace();
  } else if (key === ' ') {
    imeSpace();
  } else if (state.selectedKeyboard === 'cheonjiin') {
    if (DOUBLE_CON[key] && isDoubleTap(key)) {
      imeBackspace();
      const v = cjFlush(); if (v) imeInputVowel(v);
      imeInputConsonant(DOUBLE_CON[key]);
    } else {
      cjTap(key);
    }
  } else if (state.selectedKeyboard === 'naratgeul') {
    if (key === '획추가') {
      naratgeulHoekChuga();
    } else if (key === '쌍자음') {
      naratgeulSsangJaeeum();
    } else if (NARATGEUL_VOWEL_TOGGLE[key]) {
      // 같은 키 재탭: 현재 jung이 이 모음이면 토글
      if (ime.jung === key && !ime.jong) {
        ime.jung = NARATGEUL_VOWEL_TOGGLE[key];
      } else {
        imeInputVowel(key);
      }
    } else if (VOWEL_SET.has(key)) {
      imeInputVowel(key);
    } else {
      imeInputConsonant(key);
    }
  } else if (state.selectedKeyboard === 'bega') {
    const sec = BEGA_SECONDARY[key];
    if (sec && isDoubleTap(key)) {
      imeBackspace();
      if (VOWEL_SET.has(sec)) imeInputVowel(sec);
      else imeInputConsonant(sec);
    } else {
      if (VOWEL_SET.has(key)) imeInputVowel(key);
      else imeInputConsonant(key);
    }
  } else {
    if (VOWEL_SET.has(key)) imeInputVowel(key);
    else imeInputConsonant(key);
  }
  refreshInputDisplay();
}

// 천지인 display용: ㅇ+순수모음 음절 → raw 모음 자모로, pending 모음은 초성과 조합해서 표시
function cjDisplayText() {
  // committed 텍스트: ㅇ+모음+받침없음 → raw 모음 자모
  const committed = [...ime.committed].map(ch => {
    const code = ch.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const idx = code - 0xAC00;
      const cho = Math.floor(idx / (21 * 28));
      const jung = Math.floor((idx % (21 * 28)) / 28);
      const jong = idx % 28;
      if (cho === 11 && jong === 0) return JUNG_LIST[jung];
    }
    return ch;
  }).join('');

  // pending 모음 (ho/i_pend/i_dot/ho_dot)
  const pendingVowelMap = { ho:'ㅡ', ho_dot:'ㅜ', i_pend:'ㅣ', i_dot:'ㅏ' };
  const pv = pendingVowelMap[cjState];

  let cur;
  if (pv) {
    if (ime.cho && !ime.jung) {
      // 초성 + pending 모음 → 조합 표시 (예: ㄱ+pending ㅏ → 가)
      cur = makeSyllable(ime.cho, pv, null);
    } else if (ime.cho && ime.jung) {
      // 현재 음절 완성 + 새 pending 모음 → 현재 음절 + raw 모음
      const base = (ime.cho === 'ㅇ' && !ime.jong) ? ime.jung : imeCurrent();
      cur = base + pv;
    } else {
      // 초성 없음 → raw 모음만 (ㅇ 안 붙임)
      cur = pv;
    }
  } else {
    // dot1/dot2 또는 empty: 현재 음절 + dot 기호
    const base = (ime.cho === 'ㅇ' && ime.jung && !ime.jong) ? ime.jung : imeCurrent();
    cur = base + cjPendingChar();
  }

  return committed + cur;
}

function refreshInputDisplay() {
  const text = state.selectedKeyboard === 'cheonjiin' ? cjDisplayText() : imeText();
  const displayEl = document.getElementById('ime-display');
  if (displayEl) displayEl.textContent = text || '';

  if (state.screen === 'practice') {
    updatePracticeDisplay(text);
  } else if (state.screen === 'test') {
    onVirtualTestInput(text);
  } else if (state.screen === 'game') {
    updateGameMatching(text);
  }
}

// ================================================================
// 따라치기 화면
// ================================================================
function buildTargetHtml(target, input) {
  const targetLower = target.toLowerCase();
  const inputLower = input.toLowerCase();
  return [...target].map((char, i) => {
    let cls = '';
    if (i < input.length) {
      cls = inputLower[i] === targetLower[i] ? 'correct' : 'wrong';
    } else if (i === input.length) {
      cls = 'current';
    }
    return `<span class="char ${cls}">${char === ' ' ? '&nbsp;' : char}</span>`;
  }).join('');
}

function renderPractice() {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const L = tl();
  const target = state.practiceTexts[state.practiceIndex] || '';
  const totalTexts = state.practiceTexts.length;
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';

  return `
    <div class="screen practice-screen">
      <div class="header">
        <button class="btn-back" onclick="goMenu()">←</button>
        <span class="header-title">✏️ ${L.headerPractice}</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="practice-target-box">
        <div class="practice-label">${L.practiceLabel(state.practiceIndex + 1, totalTexts)}</div>
        <div class="target-text" id="target-text">${buildTargetHtml(target, '')}</div>
        ${getTranslation(target) ? `<div class="target-translation">${getTranslation(target)}</div>` : ''}
      </div>

      <div class="practice-stats">
        <div class="stat-chip">
          <div class="value" id="stat-wpm" style="color:${kb.color}">0</div>
          <div class="label">${L.wpm}</div>
        </div>
        <div class="stat-chip">
          <div class="value" id="stat-acc" style="color:#48BB78">100%</div>
          <div class="label">${L.accuracy}</div>
        </div>
        <div class="stat-chip">
          <div class="value" style="color:#667EEA">${state.practiceIndex}</div>
          <div class="label">${L.done}</div>
        </div>
      </div>

      <div class="ime-display-box">
        <div class="ime-cursor-wrap">
          <span class="ime-display" id="ime-display"></span><span class="ime-cursor">|</span>
        </div>
      </div>

      <button id="next-btn" class="practice-next-btn" style="background:${kb.color};display:none" onclick="practiceNext()">
        ${L.nextSentence}
      </button>

      <div class="vkb-wrap ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, null, 'input')}
        <div class="vkb-action-row">
          <button class="vkb-action-key vkb-bs" data-vkey="⌫">⌫</button>
          <button class="vkb-action-key vkb-space" data-vkey=" ">${L.space}</button>
        </div>
      </div>
    </div>
  `;
}

function updatePracticeDisplay(value) {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const target = state.practiceTexts[state.practiceIndex] || '';

  if (!state.practiceStartTime && value.length > 0) {
    state.practiceStartTime = Date.now();
  }
  state.practiceInput = value;

  const targetEl = document.getElementById('target-text');
  if (targetEl) targetEl.innerHTML = buildTargetHtml(target, value);

  let wpm = 0, accuracy = 100;
  if (state.practiceStartTime && value.length > 0) {
    const elapsed = (Date.now() - state.practiceStartTime) / 60000;
    wpm = Math.round((value.length / 5) / Math.max(elapsed, 0.001));
    const targetLower = target.toLowerCase();
    const valueLower = value.toLowerCase();
    const correct = [...value].filter((c, i) => valueLower[i] === targetLower[i]).length;
    accuracy = Math.round((correct / value.length) * 100);
  }
  const wpmEl = document.getElementById('stat-wpm');
  const accEl = document.getElementById('stat-acc');
  if (wpmEl) wpmEl.textContent = wpm;
  if (accEl) {
    accEl.textContent = accuracy + '%';
    accEl.style.color = accuracy >= 90 ? '#48BB78' : accuracy >= 70 ? '#F6AD55' : '#FC8181';
  }

  // Compare case-insensitive
  if (value.toLowerCase() === target.toLowerCase()) {
    state.practiceCorrect++;
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.style.display = 'block';
    playSound('correct');
  }
}

function practiceNext() {
  const total = state.practiceTexts.length;
  state.practiceIndex = Math.min(state.practiceIndex + 1, total - 1);
  state.practiceInput = '';
  state.practiceStartTime = null;
  state.practiceTotal++;
  imeReset();

  if (state.practiceIndex >= total - 1 || state.practiceIndex >= 9) {
    practiceFinish();
    return;
  }
  render();
}

function practiceFinish() {
  const total = state.practiceIndex;
  const correct = state.practiceCorrect;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const earned = correct * 5 + Math.round(accuracy / 10) * 2;

  state.points += earned;
  if (earned >= 30) state.level = Math.min(state.level + 1, 5);
  savePoints();

  let grade, emoji;
  if (accuracy >= 95) { grade = 'A+'; emoji = '🏆'; }
  else if (accuracy >= 85) { grade = 'A'; emoji = '🥇'; }
  else if (accuracy >= 75) { grade = 'B'; emoji = '🥈'; }
  else if (accuracy >= 60) { grade = 'C'; emoji = '🥉'; }
  else { grade = 'D'; emoji = '💪'; }

  const L_p = tl();
  state.resultData = {
    mode: 'practice',
    earned,
    title: L_p.practiceComplete,
    emoji,
    grade,
    msg: L_p.practiceMsg(accuracy),
    stats: [
      { val: total, lbl: L_p.completedSentences },
      { val: `${accuracy}%`, lbl: L_p.accuracy },
    ]
  };
  state.screen = 'result';
  render();
}

// ================================================================
// 실력 테스트 화면
// ================================================================
function renderTest() {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const L = tl();
  const word = state.testWords[state.testWordIndex] || '';
  const timer = state.testTimer;
  const isUrgent = timer <= 10;
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';

  return `
    <div class="screen test-screen">
      <div class="header">
        <button class="btn-back" onclick="stopTest()">←</button>
        <span class="header-title">🏆 ${L.headerTest}</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="test-timer-box">
        <div class="test-timer ${isUrgent ? 'urgent' : ''}" style="${!isUrgent ? `color:${kb.color}` : ''}" id="test-timer-num">${timer}</div>
        <div class="test-timer-label">${L.timeLeft}</div>
      </div>

      <div class="test-word-box">
        <div class="test-word" id="test-word-display">${word}</div>
        <div class="test-word-trans" id="test-word-trans" style="${state.lang!=='ko'?'':'display:none'}">${getTranslation(word)}</div>
        <div class="test-word-hint">${L.typeBelow}</div>
      </div>

      <div class="ime-display-box ime-display-test">
        <div class="ime-cursor-wrap">
          <span class="ime-display" id="ime-display"></span><span class="ime-cursor">|</span>
        </div>
      </div>

      <div class="test-score-row">
        <div class="stat-chip">
          <div class="value" id="test-score-val" style="color:${kb.color}">${state.testScore}</div>
          <div class="label">${L.correct}</div>
        </div>
        <div class="stat-chip">
          <div class="value" id="test-tried-val" style="color:#718096">${state.testWordIndex}</div>
          <div class="label">${L.tried}</div>
        </div>
        <div class="stat-chip">
          <div class="value" id="test-acc-val" style="color:#48BB78">0%</div>
          <div class="label">${L.accuracy}</div>
        </div>
      </div>

      <div class="vkb-wrap ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, null, 'input')}
        <div class="vkb-action-row">
          <button class="vkb-action-key vkb-bs" data-vkey="⌫">⌫</button>
          <button class="vkb-action-key vkb-space" data-vkey=" ">${L.space}</button>
        </div>
      </div>
    </div>
  `;
}

function onVirtualTestInput(text) {
  if (!state.testTimerInterval && text.length > 0 && state.testTimer > 0) {
    state.testTimerInterval = setInterval(() => {
      state.testTimer--;
      const timerEl = document.getElementById('test-timer-num');
      if (timerEl) {
        timerEl.textContent = state.testTimer;
        if (state.testTimer <= 10) timerEl.classList.add('urgent');
      }
      if (state.testTimer <= 0) {
        clearInterval(state.testTimerInterval);
        state.testTimerInterval = null;
        testFinish();
      }
    }, 1000);
  }

  const word = state.testWords[state.testWordIndex];
  if (!word) return;

  // Compare case-insensitive for English
  const match = state.selectedKeyboard === 'english'
    ? text.toLowerCase() === word.toLowerCase()
    : text === word;

  if (match) {
    state.testScore++;
    state.testWordIndex++;
    imeReset();

    const wordEl = document.getElementById('test-word-display');
    const dispEl = document.getElementById('ime-display');
    const scoreEl = document.getElementById('test-score-val');
    const triedEl = document.getElementById('test-tried-val');
    const accEl   = document.getElementById('test-acc-val');

    const nextWord = state.testWords[state.testWordIndex] || '';
    if (wordEl) wordEl.textContent = nextWord;
    const transEl = document.getElementById('test-word-trans');
    if (transEl && state.lang !== 'ko') transEl.textContent = getTranslation(nextWord);
    if (dispEl) {
      dispEl.textContent = '';
      dispEl.classList.add('correct-flash');
      setTimeout(() => dispEl.classList.remove('correct-flash'), 300);
    }
    if (scoreEl) scoreEl.textContent = state.testScore;
    if (triedEl) triedEl.textContent = state.testWordIndex;
    if (accEl)   accEl.textContent = Math.round((state.testScore / state.testWordIndex) * 100) + '%';
    playSound('correct');
  }
}

function stopTest() {
  if (state.testTimerInterval) {
    clearInterval(state.testTimerInterval);
    state.testTimerInterval = null;
  }
  goMenu();
}

function testFinish() {
  const score = state.testScore;
  const total = state.testWordIndex;
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  const earned = score * 3 + Math.round(accuracy / 10);

  state.points += earned;
  if (score >= 10) state.level = Math.min(state.level + 1, 5);
  savePoints();

  let grade, emoji;
  if (score >= 20) { grade = 'S'; emoji = '👑'; }
  else if (score >= 15) { grade = 'A+'; emoji = '🏆'; }
  else if (score >= 10) { grade = 'A'; emoji = '🥇'; }
  else if (score >= 7) { grade = 'B'; emoji = '🥈'; }
  else if (score >= 4) { grade = 'C'; emoji = '🥉'; }
  else { grade = 'D'; emoji = '💪'; }

  const L_t = tl();
  state.resultData = {
    mode: 'test',
    earned,
    title: L_t.testComplete,
    emoji,
    grade,
    msg: L_t.testMsg(score),
    stats: [
      { val: score, lbl: L_t.correct },
      { val: `${accuracy}%`, lbl: L_t.accuracy },
    ]
  };
  state.screen = 'result';
  render();
}

// ================================================================
// 산성비 게임
// ================================================================
function renderGame() {
  const kb = KEYBOARDS[state.selectedKeyboard];
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';
  return `
    <div class="screen game-screen">
      <div class="game-header">
        <button class="game-quit-btn" onclick="quitGame()">${tl().quit}</button>
        <div class="game-lives" id="game-lives">❤️❤️❤️</div>
        <div class="game-score-wrap">
          <button class="sound-toggle-btn" onclick="toggleSound()" id="sound-btn">${soundOn ? '🔊' : '🔇'}</button>
          <span class="game-level-badge" id="game-level">LV.1</span>
          <span class="game-score-num" id="game-score">0</span>
        </div>
      </div>
      <div class="game-area" id="game-area">
        <div class="game-ground" id="game-ground">
          <div class="ground-line"></div>
        </div>
      </div>
      <div class="game-input-bar">
        <div class="game-input-label">${tl().typing}</div>
        <div class="game-input-display" id="ime-display"></div>
      </div>
      <div class="vkb-wrap ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, null, 'input')}
        <div class="vkb-action-row">
          <button class="vkb-action-key vkb-bs" data-vkey="⌫">⌫</button>
          <button class="vkb-action-key vkb-space" data-vkey=" ">${tl().space}</button>
        </div>
      </div>
    </div>
  `;
}

function startGameLoop() {
  // Apply difficulty settings
  if (state.gameDifficulty === 'easy')   { state.gameSpawnInterval = 4000; state.gameFallSpeed = 0.015; }
  if (state.gameDifficulty === 'normal') { state.gameSpawnInterval = 2500; state.gameFallSpeed = 0.025; }
  if (state.gameDifficulty === 'hard')   { state.gameSpawnInterval = 1500; state.gameFallSpeed = 0.04;  }

  state.gameActive = true;
  state.gameLastFrame = performance.now();
  state.gameLastSpawn = performance.now();
  state.gameAnimFrame = requestAnimationFrame(gameLoop);
  startBGM();
}

function gameLoop(timestamp) {
  if (!state.gameActive) return;

  const delta = timestamp - state.gameLastFrame;
  state.gameLastFrame = timestamp;

  if (timestamp - state.gameLastSpawn > state.gameSpawnInterval) {
    spawnGameWord();
    state.gameLastSpawn = timestamp;
    state.gameSpawnInterval = Math.max(1000, state.gameSpawnInterval - 25);
    state.gameFallSpeed = Math.min(0.1, state.gameFallSpeed + 0.0003);
  }

  const hit = [];
  state.gameWords.forEach(w => {
    w.y += state.gameFallSpeed * delta;
    const el = document.getElementById('gw-' + w.id);
    if (el) el.style.top = Math.round(w.y) + 'px';
    const area = document.getElementById('game-area');
    if (area && w.y > area.offsetHeight - 10) hit.push(w.id);
  });
  hit.forEach(id => {
    removeGameWord(id, false);
    loseGameLife();
  });

  if (state.gameActive) state.gameAnimFrame = requestAnimationFrame(gameLoop);
}

function getGameWordPool() {
  if (state.selectedKeyboard === 'english') {
    const lvData = ENGLISH_LEVELS[state.englishLevel - 1];
    if (lvData.level === 5) return lvData.sentences;
    return lvData.words.length > 0 ? lvData.words : lvData.sentences;
  }
  return PRACTICE_DATA[state.selectedKeyboard].words;
}

function spawnGameWord() {
  const pool = getGameWordPool();
  const word = pool[Math.floor(Math.random() * pool.length)];
  const area = document.getElementById('game-area');
  if (!area) return;

  const id = ++state.gameWordIdCounter;
  const maxX = Math.max(20, area.offsetWidth - word.length * 16 - 30);
  const x = Math.floor(Math.random() * maxX) + 10;

  state.gameWords.push({ id, word, x, y: -50 });

  const el = document.createElement('div');
  el.id = 'gw-' + id;
  el.className = 'game-word';
  const trans = getTranslation(word) ? `<span class="gw-trans">${getTranslation(word)}</span>` : '';
  el.innerHTML = word + trans;
  el.style.cssText = 'left:' + x + 'px;top:-50px';
  area.appendChild(el);
}

function removeGameWord(id, scored) {
  state.gameWords = state.gameWords.filter(w => w.id !== id);
  const el = document.getElementById('gw-' + id);
  if (!el) return;
  if (scored) {
    el.classList.add('word-pop');
    setTimeout(() => el.remove(), 350);
  } else {
    el.classList.add('word-miss');
    setTimeout(() => el.remove(), 400);
  }
}

function loseGameLife() {
  playSound('miss');
  state.gameLives = Math.max(0, state.gameLives - 1);
  const el = document.getElementById('game-lives');
  if (el) el.textContent = '❤️'.repeat(state.gameLives) + '🖤'.repeat(3 - state.gameLives);
  const area = document.getElementById('game-area');
  if (area) { area.classList.add('game-shake'); setTimeout(() => area.classList.remove('game-shake'), 400); }

  const ground = document.getElementById('game-ground');
  if (ground) {
    ground.classList.add('ground-hit');
    setTimeout(() => ground.classList.remove('ground-hit'), 500);
  }

  if (state.gameLives <= 0) {
    if (ground) ground.classList.add('ground-destroyed');
    gameOver();
  }
}

function updateGameMatching(input) {
  if (!input) {
    state.gameWords.forEach(w => {
      const el = document.getElementById('gw-' + w.id);
      if (el) { el.classList.remove('targeted'); el.textContent = w.word; }
    });
    return;
  }

  // Case-insensitive match for English
  const isEnglish = state.selectedKeyboard === 'english';
  const inputCmp = isEnglish ? input.toLowerCase() : input;
  const target = state.gameWords.find(w => {
    const wordCmp = isEnglish ? w.word.toLowerCase() : w.word;
    return wordCmp.startsWith(inputCmp);
  });

  state.gameWords.forEach(w => {
    const el = document.getElementById('gw-' + w.id);
    if (!el) return;
    if (target && w.id === target.id) {
      el.classList.add('targeted');
      const trans2 = getTranslation(w.word) ? `<span class="gw-trans">${getTranslation(w.word)}</span>` : '';
      el.innerHTML = `<span class="typed-part">${w.word.slice(0, input.length)}</span>${w.word.slice(input.length)}${trans2}`;
      const wordCmp = isEnglish ? w.word.toLowerCase() : w.word;
      if (inputCmp === wordCmp) {
        removeGameWord(w.id, true);
        playSound('pop');
        imeReset();
        cjState = 'empty';
        state.gameScore++;
        const newLevel = Math.floor(state.gameScore / 8) + 1;
        if (newLevel > state.gameLevel) {
          state.gameLevel = newLevel;
          const lvEl = document.getElementById('game-level');
          if (lvEl) lvEl.textContent = 'LV.' + state.gameLevel;
        }
        const scEl = document.getElementById('game-score');
        if (scEl) scEl.textContent = state.gameScore;
        const dispEl = document.getElementById('ime-display');
        if (dispEl) { dispEl.textContent = ''; dispEl.classList.add('correct-flash'); setTimeout(() => dispEl.classList.remove('correct-flash'), 300); }
        state.points += 5;
        savePoints();
      }
    } else {
      el.classList.remove('targeted');
      el.textContent = w.word;
    }
  });
}

function quitGame() {
  stopAllTimers();
  state.screen = state.selectedKeyboard === 'english' ? 'englishMenu' : 'menu';
  render();
}

function gameOver() {
  playSound('over');
  stopAllTimers();
  state.gameWords.forEach(w => { const el = document.getElementById('gw-' + w.id); if (el) el.remove(); });
  state.gameWords = [];

  // Save high score
  addHighScore(state.selectedKeyboard, state.gameDifficulty, state.gameScore);
  const newRecord = isNewHighScore(state.selectedKeyboard, state.gameDifficulty, state.gameScore);

  const earned = state.gameScore * 5;
  state.points += earned;
  savePoints();

  let grade, emoji;
  if (state.gameScore >= 30)      { grade = 'S';  emoji = '👑'; }
  else if (state.gameScore >= 20) { grade = 'A+'; emoji = '🏆'; }
  else if (state.gameScore >= 15) { grade = 'A';  emoji = '🥇'; }
  else if (state.gameScore >= 10) { grade = 'B';  emoji = '🥈'; }
  else if (state.gameScore >= 5)  { grade = 'C';  emoji = '🥉'; }
  else                            { grade = 'D';  emoji = '💪'; }

  const L_g = tl();
  state.resultData = {
    mode: 'game',
    earned,
    title: L_g.gameComplete,
    emoji,
    grade,
    msg: L_g.gameMsg(newRecord, state.gameScore),
    stats: [
      { val: state.gameScore, lbl: L_g.processedWords },
      { val: 'LV.' + state.gameLevel, lbl: state.lang==='en'?'Level Reached':state.lang==='ja'?'到達レベル':'도달 레벨' },
    ],
    newRecord
  };
  state.screen = 'result';
  render();
}

// ================================================================
// 결과 화면
// ================================================================
function renderResult() {
  const { emoji, grade, msg, earned, stats, title, newRecord } = state.resultData;
  const kb = KEYBOARDS[state.selectedKeyboard];
  const L = tl();

  const statsHtml = stats.map(s => `
    <div class="result-stat">
      <div class="val">${s.val}</div>
      <div class="lbl">${s.lbl}</div>
    </div>
  `).join('');

  return `
    <div class="screen result-screen">
      <div class="result-header">
        <div class="result-emoji">${emoji}</div>
        <div class="result-grade">${grade}</div>
        ${newRecord ? `<div style="background:linear-gradient(135deg,#FFD700,#FF8C00);color:#0B1426;font-weight:900;font-size:14px;padding:6px 18px;border-radius:20px;display:inline-block;margin-bottom:8px;">${L.newRecord}</div>` : ''}
        <div class="result-msg">${msg}</div>
      </div>

      ${stats.length > 0 ? `
        <div class="result-card">
          <div class="result-stats-grid">${statsHtml}</div>
        </div>
      ` : ''}

      <div class="result-card">
        <div class="result-points-earn">
          <div class="points-earn-num">+${earned}</div>
          <div class="points-earn-label">${L.pointsEarned(earned, state.points)}</div>
        </div>
      </div>

      <div class="result-btns">
        <button class="btn-result primary" onclick="restartFromResult()">
          ${L.tryAgain}
        </button>
        <button class="btn-result secondary" onclick="goMenu()">
          ${L.otherMode}
        </button>
        <button class="btn-result secondary" onclick="goHome()">
          ${L.goHome}
        </button>
      </div>
    </div>
  `;
}

function restartFromResult() {
  const mode = state.selectedMode;
  if (mode === 'game') {
    state.screen = 'gameDifficulty';
    render();
  } else {
    startMode(mode);
  }
}

// ================================================================
// 네비게이션
// ================================================================
function stopAllTimers() {
  if (state.testTimerInterval) { clearInterval(state.testTimerInterval); state.testTimerInterval = null; }
  if (state.gameAnimFrame) { cancelAnimationFrame(state.gameAnimFrame); state.gameAnimFrame = null; }
  state.gameActive = false;
  stopBGM();
}

function toggleLang() {
  state.lang = state.lang === 'ko' ? 'en' : state.lang === 'en' ? 'ja' : 'ko';
  localStorage.setItem('rodi_lang', state.lang);
  render();
}

function goHome() {
  stopAllTimers();
  state.screen = 'home';
  render();
}

function goMenu() {
  stopAllTimers();
  if (state.selectedKeyboard === 'english') {
    state.screen = 'englishMenu';
  } else {
    state.screen = 'menu';
  }
  render();
}

// ================================================================
// 이벤트 리스너
// ================================================================
function attachListeners() {
  // 자판 익히기 - 학습 모드 키 탭
  const kbVisual = document.querySelector('.keyboard-visual');
  if (kbVisual) {
    kbVisual.addEventListener('click', (e) => {
      const key = e.target.closest('.kb-key');
      if (!key) return;
      keyTap(parseInt(key.dataset.row), parseInt(key.dataset.col));
    });
  }

  // 따라치기 / 실력 테스트 / 산성비 게임 - 가상 자판 입력
  const vkbWrap = document.querySelector('.vkb-wrap');
  if (vkbWrap) {
    vkbWrap.addEventListener('click', (e) => {
      const key = e.target.closest('.kb-key, .vkb-action-key');
      if (!key) return;
      if (key.dataset.vkey !== undefined) virtualKeyTap(key.dataset.vkey);
    });
  }

  // 산성비 게임 루프 시작
  if (state.screen === 'game' && !state.gameActive) {
    startGameLoop();
  }
}

// ================================================================
// 유틸리티
// ================================================================
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ================================================================
// 시작
// ================================================================
render();
