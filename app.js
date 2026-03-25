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
    tagline: '삼성 갤럭시 기본 자판',
    description: '하늘(·), 땅(ㅡ), 사람(ㅣ)으로\n모음을 만드는 자판이에요',
    color: '#3B82F6',
    bgLight: '#EFF6FF',
    badgeText: '가장 많이 써요',
    rows: [
      [
        { key: 'ㄱ', sub: 'ㄲ' },
        { key: 'ㄴ', sub: '' },
        { key: 'ㄷ', sub: 'ㄸ' },
      ],
      [
        { key: 'ㄹ', sub: '' },
        { key: 'ㅁ', sub: '' },
        { key: 'ㅂ', sub: 'ㅃ' },
      ],
      [
        { key: 'ㅅ', sub: 'ㅆ' },
        { key: 'ㅇ', sub: '' },
        { key: 'ㅈ', sub: 'ㅉ' },
      ],
      [
        { key: '·', sub: '' },
        { key: 'ㅡ', sub: '' },
        { key: 'ㅣ', sub: '' },
      ],
    ],
    learnSteps: [
      { keys: [[0,0]], title: 'ㄱ (기역)', desc: '한 번 누르면 ㄱ\n두 번 누르면 ㄲ (쌍기역)' },
      { keys: [[0,1]], title: 'ㄴ (니은)', desc: 'ㄴ을 누르면 니은이 입력돼요' },
      { keys: [[0,2]], title: 'ㄷ (디귿)', desc: '한 번 누르면 ㄷ\n두 번 누르면 ㄸ (쌍디귿)' },
      { keys: [[1,0]], title: 'ㄹ (리을)', desc: 'ㄹ을 누르면 리을이 입력돼요' },
      { keys: [[1,1]], title: 'ㅁ (미음)', desc: 'ㅁ을 누르면 미음이 입력돼요' },
      { keys: [[1,2]], title: 'ㅂ (비읍)', desc: '한 번 누르면 ㅂ\n두 번 누르면 ㅃ (쌍비읍)' },
      { keys: [[2,0]], title: 'ㅅ (시옷)', desc: '한 번 누르면 ㅅ\n두 번 누르면 ㅆ (쌍시옷)' },
      { keys: [[2,1]], title: 'ㅇ (이응)', desc: '자음 앞에선 소리 없음\n받침으로 사용해요' },
      { keys: [[2,2]], title: 'ㅈ (지읒)', desc: '한 번 누르면 ㅈ\n두 번 누르면 ㅉ (쌍지읒)' },
      { keys: [[3,0]], title: '· (하늘)', desc: '모음을 만드는 핵심 키!\n하늘을 뜻해요 ☁' },
      { keys: [[3,1]], title: 'ㅡ (땅)', desc: '모음을 만드는 핵심 키!\n땅을 뜻해요 🌍' },
      { keys: [[3,2]], title: 'ㅣ (사람)', desc: '모음을 만드는 핵심 키!\n사람을 뜻해요 🙋' },
      {
        keys: [[3,0],[3,2]], title: 'ㅏ 만들기',
        desc: '· 누른 후 ㅣ 누르면\n"ㅏ" 가 돼요!\n예: 아·이 → 아이'
      },
      {
        keys: [[3,2],[3,0]], title: 'ㅓ 만들기',
        desc: 'ㅣ 누른 후 · 누르면\n"ㅓ" 가 돼요!\n예: 어·머니 → 어머니'
      },
      {
        keys: [[3,0],[3,1]], title: 'ㅗ 만들기',
        desc: '· 누른 후 ㅡ 누르면\n"ㅗ" 가 돼요!\n예: 오·빠 → 오빠'
      },
      {
        keys: [[3,1],[3,0]], title: 'ㅜ 만들기',
        desc: 'ㅡ 누른 후 · 누르면\n"ㅜ" 가 돼요!\n예: 우·유 → 우유'
      },
    ],
    combos: [
      { result: 'ㅏ', how: '·+ㅣ' },
      { result: 'ㅓ', how: 'ㅣ+·' },
      { result: 'ㅗ', how: '·+ㅡ' },
      { result: 'ㅜ', how: 'ㅡ+·' },
      { result: 'ㅡ', how: 'ㅡ' },
      { result: 'ㅣ', how: 'ㅣ' },
      { result: 'ㅑ', how: '··+ㅣ' },
      { result: 'ㅕ', how: 'ㅣ+··' },
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
    description: '자음과 모음이 분리된 자판\nLG 스마트폰에서 사용했어요',
    color: '#EF4444',
    bgLight: '#FEF2F2',
    badgeText: 'LG 폰 자판',
    rows: [
      [
        { key: 'ㅗ', sub: 'ㅛ' },
        { key: 'ㅓ', sub: 'ㅕ' },
        { key: 'ㅏ', sub: 'ㅑ' },
      ],
      [
        { key: 'ㅜ', sub: 'ㅠ' },
        { key: 'ㅡ', sub: '' },
        { key: 'ㅣ', sub: 'ㅐ/ㅔ' },
      ],
      [
        { key: 'ㄱ', sub: 'ㄲ' },
        { key: 'ㄴ', sub: '' },
        { key: 'ㄷ', sub: 'ㄸ' },
        { key: 'ㄹ', sub: '' },
      ],
      [
        { key: 'ㅁ', sub: '' },
        { key: 'ㅂ', sub: 'ㅃ' },
        { key: 'ㅅ', sub: 'ㅆ' },
        { key: 'ㅇ', sub: '' },
      ],
      [
        { key: 'ㅈ', sub: 'ㅉ' },
        { key: 'ㅊ', sub: '' },
        { key: 'ㅎ', sub: '' },
      ],
    ],
    learnSteps: [
      { keys: [[0,0]], title: 'ㅗ (오)', desc: '위쪽 첫 번째 줄은 모두 모음이에요\nㅗ를 누르면 "오" 소리가 나요' },
      { keys: [[0,1]], title: 'ㅓ (어)', desc: 'ㅓ를 누르면 "어" 소리가 나요' },
      { keys: [[0,2]], title: 'ㅏ (아)', desc: 'ㅏ를 누르면 "아" 소리가 나요' },
      { keys: [[1,0]], title: 'ㅜ (우)', desc: 'ㅜ를 누르면 "우" 소리가 나요' },
      { keys: [[1,1]], title: 'ㅡ (으)', desc: 'ㅡ를 누르면 "으" 소리가 나요' },
      { keys: [[1,2]], title: 'ㅣ (이)', desc: 'ㅣ를 누르면 "이" 소리가 나요' },
      { keys: [[2,0]], title: 'ㄱ ~ ㄹ', desc: '세 번째 줄부터는 자음이에요\n왼쪽부터 ㄱ, ㄴ, ㄷ, ㄹ 순서예요' },
      { keys: [[3,0],[3,1],[3,2],[3,3]], title: 'ㅁ ~ ㅇ', desc: 'ㅁ, ㅂ, ㅅ, ㅇ 순서예요' },
      { keys: [[4,0],[4,1],[4,2]], title: 'ㅈ, ㅊ, ㅎ', desc: 'ㅈ, ㅊ, ㅎ이에요\n나랏글은 자음과 모음이 따로 있어서\n찾기 쉬워요!' },
    ],
    combos: []
  },

  bega: {
    id: 'bega',
    name: '베가',
    icon: '⭐',
    tagline: '팬택 베가 자판',
    description: '팬택 베가 스마트폰 자판\n직관적인 배열이 특징이에요',
    color: '#8B5CF6',
    bgLight: '#F5F3FF',
    badgeText: '팬택 자판',
    rows: [
      [
        { key: 'ㅗ', sub: 'ㅛ' },
        { key: 'ㅏ', sub: 'ㅑ' },
        { key: 'ㅣ', sub: 'ㅐ' },
      ],
      [
        { key: 'ㅜ', sub: 'ㅠ' },
        { key: 'ㅓ', sub: 'ㅕ' },
        { key: 'ㅡ', sub: 'ㅔ' },
      ],
      [
        { key: 'ㄱ', sub: 'ㄲ' },
        { key: 'ㄴ', sub: '' },
        { key: 'ㄷ', sub: 'ㄸ' },
        { key: 'ㄹ', sub: '' },
      ],
      [
        { key: 'ㅁ', sub: '' },
        { key: 'ㅂ', sub: 'ㅃ' },
        { key: 'ㅅ', sub: 'ㅆ' },
        { key: 'ㅇ', sub: '' },
      ],
      [
        { key: 'ㅈ', sub: 'ㅉ' },
        { key: 'ㅊ', sub: '' },
        { key: 'ㅎ', sub: '' },
      ],
    ],
    learnSteps: [
      { keys: [[0,0]], title: 'ㅗ·ㅏ·ㅣ (위쪽 모음)', desc: '위쪽 두 줄이 모두 모음이에요\n오른쪽 모음: ㅗ, ㅏ, ㅣ' },
      { keys: [[1,0],[1,1],[1,2]], title: 'ㅜ·ㅓ·ㅡ (아래쪽 모음)', desc: '아래쪽 모음: ㅜ, ㅓ, ㅡ\n6개의 기본 모음을 찾아보세요!' },
      { keys: [[2,0],[2,1],[2,2],[2,3]], title: 'ㄱ·ㄴ·ㄷ·ㄹ', desc: '자음은 세 번째 줄부터 시작해요' },
      { keys: [[3,0],[3,1],[3,2],[3,3]], title: 'ㅁ·ㅂ·ㅅ·ㅇ', desc: '베가 자판의 자음 배열이에요' },
      { keys: [[4,0],[4,1],[4,2]], title: 'ㅈ·ㅊ·ㅎ', desc: '마지막 자음들이에요\n베가 자판 완성!' },
    ],
    combos: []
  },

  qwerty: {
    id: 'qwerty',
    name: 'Qwerty',
    icon: '⌨️',
    tagline: '영문 QWERTY 자판',
    description: '컴퓨터와 동일한 자판 배열\n각 키에 한글이 매핑돼요',
    color: '#10B981',
    bgLight: '#ECFDF5',
    badgeText: '컴퓨터와 동일',
    rows: [
      [
        { key: 'Q', sub: 'ㅂ' }, { key: 'W', sub: 'ㅈ' }, { key: 'E', sub: 'ㄷ' },
        { key: 'R', sub: 'ㄱ' }, { key: 'T', sub: 'ㅅ' }, { key: 'Y', sub: 'ㅛ' },
        { key: 'U', sub: 'ㅕ' }, { key: 'I', sub: 'ㅑ' }, { key: 'O', sub: 'ㅐ' },
        { key: 'P', sub: 'ㅔ' },
      ],
      [
        { key: 'A', sub: 'ㅁ' }, { key: 'S', sub: 'ㄴ' }, { key: 'D', sub: 'ㅇ' },
        { key: 'F', sub: 'ㄹ' }, { key: 'G', sub: 'ㅎ' }, { key: 'H', sub: 'ㅗ' },
        { key: 'J', sub: 'ㅓ' }, { key: 'K', sub: 'ㅏ' }, { key: 'L', sub: 'ㅣ' },
      ],
      [
        { key: 'Z', sub: 'ㅋ' }, { key: 'X', sub: 'ㅌ' }, { key: 'C', sub: 'ㅊ' },
        { key: 'V', sub: 'ㅍ' }, { key: 'B', sub: 'ㅠ' }, { key: 'N', sub: 'ㅜ' },
        { key: 'M', sub: 'ㅡ' },
      ],
    ],
    learnSteps: [
      { keys: [[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[2,0]], title: '자음 키', desc: 'R=ㄱ, T=ㅅ, A=ㅁ, S=ㄴ, D=ㅇ\nF=ㄹ, Z=ㅋ ... 자음이 왼쪽에 있어요' },
      { keys: [[0,5],[0,6],[0,7],[1,7],[1,8]], title: '모음 키', desc: 'Y=ㅛ, U=ㅕ, I=ㅑ, K=ㅏ, L=ㅣ\n모음이 오른쪽에 있어요' },
      { keys: [[0,0],[0,1],[0,2]], title: 'Q, W, E', desc: 'Q=ㅂ, W=ㅈ, E=ㄷ\n외워두면 편해요!' },
      { keys: [[0,3],[0,4]], title: 'R, T', desc: 'R=ㄱ, T=ㅅ\n가장 많이 쓰는 자음이에요' },
      { keys: [[1,4],[1,5],[1,6]], title: 'G, H, J', desc: 'G=ㅎ, H=ㅗ, J=ㅓ\nH와 J는 가장 많이 쓰는 모음!' },
      { keys: [[1,7],[1,8]], title: 'K, L', desc: 'K=ㅏ, L=ㅣ\nㅏ와 ㅣ는 정말 자주 나와요' },
      { keys: [[0,8],[0,9]], title: 'O, P', desc: 'O=ㅐ, P=ㅔ\n이중모음이에요' },
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
// 상태 (State)
// ================================================================
const state = {
  screen: 'home',
  selectedKeyboard: null,
  selectedMode: null,
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
  const kbCards = Object.values(KEYBOARDS).filter(kb => kb.id !== 'english').map(kb => `
    <button class="keyboard-card" onclick="selectKeyboard('${kb.id}')"
      style="background: linear-gradient(145deg, ${kb.color}CC, ${kb.color}88);
             box-shadow: 0 8px 24px ${kb.color}44;">
      <div class="card-icon">${kb.icon}</div>
      <div class="card-name">${kb.name}</div>
      <div class="card-tagline">${kb.tagline}</div>
      <span class="card-badge">${kb.badgeText}</span>
    </button>
  `).join('');

  const levelName = getLevelName(state.level);

  return `
    <div class="screen home-screen">
      <div class="home-hero">
        <div class="home-logo">👆</div>
        <div class="home-title">손가락 <span>타자 연습</span></div>
        <div class="home-sub">자판을 배우고, 연습하고, 실력을 키워요!</div>
        <div class="home-stats">
          <div class="stat-box">
            <div class="stat-value">${state.points.toLocaleString()}</div>
            <div class="stat-label">포인트</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${levelName}</div>
            <div class="stat-label">내 등급</div>
          </div>
        </div>
      </div>
      <div class="home-section-title">📱 자판 선택</div>
      <div class="keyboard-grid">${kbCards}</div>
      <div class="home-english-section">
        <div class="home-section-title">🔤 영어 타자 연습</div>
        <button class="english-card" onclick="goEnglish()">
          <div class="english-card-left">
            <div class="english-card-icon">🔤</div>
            <div>
              <div class="english-card-title">English Typing</div>
              <div class="english-card-sub">5단계 어휘 학습 + 산성비 게임</div>
            </div>
          </div>
          <span style="color:#10B981">→</span>
        </button>
      </div>
    </div>
  `;
}

function getLevelName(level) {
  const names = ['입문', '초급', '중급', '고급', '달인'];
  return names[Math.min(level - 1, names.length - 1)];
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
  const difficulties = [
    { id: 'easy', icon: '🌱', name: '쉬움', desc: '천천히 떨어지는 단어, 긴 생성 간격' },
    { id: 'normal', icon: '⚡', name: '보통', desc: '기본 속도, 적당한 난이도' },
    { id: 'hard', icon: '🔥', name: '어려움', desc: '빠른 속도, 짧은 생성 간격' },
  ];

  const diffCards = difficulties.map(d => `
    <div class="difficulty-card ${state.gameDifficulty === d.id ? 'selected' : ''}" onclick="selectDifficulty('${d.id}')">
      <div class="diff-icon">${d.icon}</div>
      <div>
        <div class="diff-name">${d.name}</div>
        <div class="diff-desc">${d.desc}</div>
      </div>
    </div>
  `).join('');

  const scores = getHighScores(kbId, state.gameDifficulty);
  const topScores = scores.slice(0, 3);
  const scoresHtml = topScores.length > 0
    ? topScores.map((s, i) => `<div class="hs-item">${['🥇','🥈','🥉'][i]} ${s}</div>`).join('')
    : '<div style="color:rgba(255,255,255,0.4);font-size:13px;">기록 없음</div>';

  return `
    <div class="difficulty-screen">
      <div class="header">
        <button class="btn-back" onclick="goMenuFromDifficulty()">←</button>
        <span class="header-title">난이도 선택</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="difficulty-cards">
        ${diffCards}
      </div>

      <div class="highscore-section">
        <div class="highscore-title">🏆 최고 기록 (현재 난이도)</div>
        <div class="highscore-list">${scoresHtml}</div>
      </div>

      <button class="btn-start-game" onclick="startGameFromDifficulty()">
        🌧 게임 시작!
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
  return `
    <div class="screen menu-screen">
      <div class="header">
        <button class="btn-back" onclick="goHome()">←</button>
        <span class="header-title">자판 선택</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="menu-keyboard-info"
        style="background: linear-gradient(145deg, ${kb.color}33, ${kb.color}11);
               border: 1px solid ${kb.color}44;">
        <div class="menu-kb-icon">${kb.icon}</div>
        <div class="menu-kb-name" style="color:${kb.color}">${kb.name} 자판</div>
        <div class="menu-kb-desc">${kb.description}</div>
      </div>

      <div class="menu-modes">
        <button class="mode-btn" onclick="startMode('learn')"
          style="border-left: 4px solid ${kb.color};">
          <span class="mode-icon">📖</span>
          <div class="mode-text">
            <div class="mode-title">자판 익히기</div>
            <div class="mode-desc">자판 위치를 하나씩 배워봐요</div>
          </div>
          <span class="mode-arrow" style="color:${kb.color}">→</span>
        </button>

        <button class="mode-btn" onclick="startMode('practice')"
          style="border-left: 4px solid ${kb.color};">
          <span class="mode-icon">✏️</span>
          <div class="mode-text">
            <div class="mode-title">따라치기</div>
            <div class="mode-desc">화면 글자를 보고 따라 입력해요</div>
          </div>
          <span class="mode-arrow" style="color:${kb.color}">→</span>
        </button>

        <button class="mode-btn" onclick="startMode('test')"
          style="border-left: 4px solid ${kb.color};">
          <span class="mode-icon">🏆</span>
          <div class="mode-text">
            <div class="mode-title">실력 테스트</div>
            <div class="mode-desc">60초 동안 얼마나 칠 수 있나요?</div>
          </div>
          <span class="mode-arrow" style="color:${kb.color}">→</span>
        </button>

        <button class="mode-btn mode-btn-game" onclick="startMode('game')"
          style="border-left: 4px solid #FF6B35;">
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
  const steps = kb.learnSteps;
  const step = steps[state.learnStep];
  const progress = Math.round(((state.learnStep + 1) / steps.length) * 100);
  const isLast = state.learnStep >= steps.length - 1;
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';

  return `
    <div class="screen learn-screen">
      <div class="header">
        <button class="btn-back" onclick="goMenu()">←</button>
        <span class="header-title">${kb.icon} 자판 익히기</span>
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
        ${state.learnStep > 0 ? `<button class="btn-nav secondary" onclick="learnPrev()">← 이전</button>` : '<div style="flex:1"></div>'}
        ${isLast
          ? `<button class="btn-nav primary" style="background:${kb.color}" onclick="learnFinish()">완료! 🎉</button>`
          : `<button class="btn-nav primary" style="background:${kb.color}" onclick="learnNext()">다음 →</button>`
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
        return `<button class="kb-key ${isHighlighted ? 'highlight' : ''}" ${attr} ${hlStyle}>
          ${key.key}
          ${key.sub ? `<span class="key-sub">${key.sub}</span>` : ''}
        </button>`;
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
  state.resultData = {
    mode: 'learn',
    earned,
    title: '자판 익히기 완료!',
    emoji: '🎓',
    grade: '수료',
    msg: '자판 위치를 모두 익혔어요!\n이제 따라치기로 연습해 보세요',
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
  'ㅡ+ㅣ':'ㅢ'
};
const DOUBLE_CON = { 'ㄱ':'ㄲ','ㄷ':'ㄸ','ㅂ':'ㅃ','ㅅ':'ㅆ','ㅈ':'ㅉ' };
const VOWEL_SET  = new Set(JUNG_LIST);

function makeSyllable(cho, jung, jong) {
  if (!jung) return cho || '';
  const c = CHO_IDX[cho] ?? 11;
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
  imeCommit(); ime.committed += ' ';
  cjState = 'empty';
}

// ── 천지인 모음 상태 머신 ───────────────────────────
let cjState = 'empty';

function cjFlush() {
  const map = { ho:'ㅡ', ho_dot:'ㅜ', i_pend:'ㅣ', i_dot:'ㅓ' };
  const v = map[cjState] || null;
  cjState = 'empty';
  return v;
}

function cjTap(key) {
  if (key === '·') {
    if      (cjState==='empty')  cjState = 'dot1';
    else if (cjState==='dot1')   cjState = 'dot2';
    else if (cjState==='dot2')   cjState = 'dot1';
    else if (cjState==='ho')     cjState = 'ho_dot';
    else if (cjState==='ho_dot') { imeInputVowel('ㅠ'); cjState='empty'; }
    else if (cjState==='i_pend') cjState = 'i_dot';
    else if (cjState==='i_dot')  { imeInputVowel('ㅕ'); cjState='empty'; }
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
    if      (cjState==='empty')  cjState = 'i_pend';
    else if (cjState==='dot1')   { imeInputVowel('ㅏ'); cjState='empty'; }
    else if (cjState==='dot2')   { imeInputVowel('ㅑ'); cjState='empty'; }
    else if (cjState==='i_pend') { imeInputVowel('ㅣ'); cjState='i_pend'; }
    else { const v=cjFlush(); if(v) imeInputVowel(v); cjState='i_pend'; }
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
  } else {
    if (VOWEL_SET.has(key)) imeInputVowel(key);
    else imeInputConsonant(key);
  }
  refreshInputDisplay();
}

function refreshInputDisplay() {
  const text = imeText();
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
  const target = state.practiceTexts[state.practiceIndex] || '';
  const totalTexts = state.practiceTexts.length;
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';

  return `
    <div class="screen practice-screen">
      <div class="header">
        <button class="btn-back" onclick="goMenu()">←</button>
        <span class="header-title">✏️ 따라치기</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="practice-target-box">
        <div class="practice-label">따라 입력하세요 (${state.practiceIndex + 1}/${totalTexts})</div>
        <div class="target-text" id="target-text">${buildTargetHtml(target, '')}</div>
      </div>

      <div class="practice-stats">
        <div class="stat-chip">
          <div class="value" id="stat-wpm" style="color:${kb.color}">0</div>
          <div class="label">타수</div>
        </div>
        <div class="stat-chip">
          <div class="value" id="stat-acc" style="color:#48BB78">100%</div>
          <div class="label">정확도</div>
        </div>
        <div class="stat-chip">
          <div class="value" style="color:#667EEA">${state.practiceIndex}</div>
          <div class="label">완료</div>
        </div>
      </div>

      <div class="ime-display-box">
        <div class="ime-cursor-wrap">
          <span class="ime-display" id="ime-display"></span><span class="ime-cursor">|</span>
        </div>
      </div>

      <button id="next-btn" class="practice-next-btn" style="background:${kb.color};display:none" onclick="practiceNext()">
        ✅ 다음 문장 →
      </button>

      <div class="vkb-wrap ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, null, 'input')}
        <div class="vkb-action-row">
          <button class="vkb-action-key vkb-bs" data-vkey="⌫">⌫</button>
          <button class="vkb-action-key vkb-space" data-vkey=" ">스페이스</button>
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

  state.resultData = {
    mode: 'practice',
    earned,
    title: '따라치기 완료!',
    emoji,
    grade,
    msg: accuracy >= 80 ? '훌륭해요! 정확도가 높아요' : '꾸준히 연습하면 실력이 늘어요!',
    stats: [
      { val: total, lbl: '완료 문장' },
      { val: `${accuracy}%`, lbl: '정확도' },
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
  const word = state.testWords[state.testWordIndex] || '';
  const timer = state.testTimer;
  const isUrgent = timer <= 10;
  const isQwerty = state.selectedKeyboard === 'qwerty' || state.selectedKeyboard === 'english';

  return `
    <div class="screen test-screen">
      <div class="header">
        <button class="btn-back" onclick="stopTest()">←</button>
        <span class="header-title">🏆 실력 테스트</span>
        <div class="points-badge">⭐ ${state.points.toLocaleString()}</div>
      </div>

      <div class="test-timer-box">
        <div class="test-timer ${isUrgent ? 'urgent' : ''}" style="${!isUrgent ? `color:${kb.color}` : ''}" id="test-timer-num">${timer}</div>
        <div class="test-timer-label">남은 시간 (초)</div>
      </div>

      <div class="test-word-box">
        <div class="test-word" id="test-word-display">${word}</div>
        <div class="test-word-hint">아래 자판으로 입력하세요</div>
      </div>

      <div class="ime-display-box ime-display-test">
        <div class="ime-cursor-wrap">
          <span class="ime-display" id="ime-display"></span><span class="ime-cursor">|</span>
        </div>
      </div>

      <div class="test-score-row">
        <div class="stat-chip">
          <div class="value" id="test-score-val" style="color:${kb.color}">${state.testScore}</div>
          <div class="label">맞은 단어</div>
        </div>
        <div class="stat-chip">
          <div class="value" id="test-tried-val" style="color:#718096">${state.testWordIndex}</div>
          <div class="label">시도</div>
        </div>
        <div class="stat-chip">
          <div class="value" id="test-acc-val" style="color:#48BB78">0%</div>
          <div class="label">정확도</div>
        </div>
      </div>

      <div class="vkb-wrap ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, null, 'input')}
        <div class="vkb-action-row">
          <button class="vkb-action-key vkb-bs" data-vkey="⌫">⌫</button>
          <button class="vkb-action-key vkb-space" data-vkey=" ">스페이스</button>
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

  state.resultData = {
    mode: 'test',
    earned,
    title: '테스트 완료!',
    emoji,
    grade,
    msg: score >= 10 ? '대단해요! 실력이 많이 늘었어요!' : '꾸준히 연습하면 금방 늘어요!',
    stats: [
      { val: score, lbl: '맞은 단어' },
      { val: `${accuracy}%`, lbl: '정확도' },
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
        <button class="game-quit-btn" onclick="quitGame()">✕ 나가기</button>
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
        <div class="game-input-label">입력 중:</div>
        <div class="game-input-display" id="ime-display"></div>
      </div>
      <div class="vkb-wrap ${isQwerty ? 'qwerty-kb' : ''}">
        ${renderKeyboard(kb, null, 'input')}
        <div class="vkb-action-row">
          <button class="vkb-action-key vkb-bs" data-vkey="⌫">⌫</button>
          <button class="vkb-action-key vkb-space" data-vkey=" ">스페이스</button>
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
  el.textContent = word;
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
      el.innerHTML = `<span class="typed-part">${w.word.slice(0, input.length)}</span>${w.word.slice(input.length)}`;
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

  state.resultData = {
    mode: 'game',
    earned,
    title: '산성비 종료!',
    emoji,
    grade,
    msg: (newRecord ? '🏆 최고 기록! ' : '') + (state.gameScore >= 10 ? '훌륭해요! 타자 실력이 좋은데요!' : '조금 더 연습하면 금방 늘어요!'),
    stats: [
      { val: state.gameScore, lbl: '처리한 단어' },
      { val: 'LV.' + state.gameLevel, lbl: '도달 레벨' },
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
        ${newRecord ? '<div style="background:linear-gradient(135deg,#FFD700,#FF8C00);color:#0B1426;font-weight:900;font-size:14px;padding:6px 18px;border-radius:20px;display:inline-block;margin-bottom:8px;">🏆 새 최고 기록!</div>' : ''}
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
          <div class="points-earn-label">포인트 획득! (누적: ${state.points.toLocaleString()}점)</div>
        </div>
      </div>

      <div class="result-btns">
        <button class="btn-result primary" onclick="restartFromResult()">
          다시 하기 🔄
        </button>
        <button class="btn-result secondary" onclick="goMenu()">
          다른 모드 선택
        </button>
        <button class="btn-result secondary" onclick="goHome()">
          홈으로 🏠
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
