import {
  faVideo,
  faBook,
  faUsers,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import solution from '../../assets/main-page-images/solution.png';
import speaking from '../../assets/main-page-images/speaking.png';
import savannah from '../../assets/main-page-images/savannah.png';
import sprint from '../../assets/main-page-images/sprint.png';
import conference from '../../assets/main-page-images/conference.png';

export const eng = {
  unregistred: 'As an anonymous user, you can test our mini-games, but long-term statistics will not be saved. Setting up training cards as well as the training process itself is available only to registered users.',
  pageNames: {
    statistic: 'Statistic',
    dictionary: 'Dictionary',
    promo: 'Promo',
    about: 'Team',
  },
  logout: 'Logout',
  userProgress: {
    learned: 'Learned new words:',
    played: 'Games you played:',
    rightInARow: 'Right words in a row:',
    correctRepeats: 'Correct answers:',
  },
  settings: {
    name: 'Settings',
    mode: 'Dark mode',
    lang: 'Language',
    fontSize: 'Font size',
  },
  cardSettings: {
    amountNewWords: 'New words amount:',
    amountNewCards: 'Cards amount:',
    yourProgress: 'Todays progress:',
    buttons: {
      learn: 'learn',
      settings: 'settings',
    },
  },
  mainSentence1: 'Information about your progress',
  mainSentence2: 'Play our games to improve your english skills',
  games: {
    audioCall: {
      name: 'Audio Call',
      description: 'Improves listening comprehension',
      imgSrc: conference,
    },
    englishPuzzle: {
      name: 'English Puzzle',
      description: 'Collect whole sentences from single words. After you collect all 10 sentences, a surprise awaits you',
      imgSrc: solution,
    },
    ourGame: {
      name: 'Our Game',
      description: 'description',
      imgSrc: speaking,
    },
    savannah: {
      name: 'Savannah',
      description: 'Helps remember learned words. Also trains your reaction and speed of perception of English words',
      imgSrc: savannah,
    },
    speakIt: {
      name: 'Speak It',
      description: 'Say the words! This game will help check your pronunciation',
      imgSrc: speaking,
    },
    sprint: {
      name: 'Sprint',
      description: 'Teaches you to quickly translate into English. This game uses words from your vocabulary',
      imgSrc: sprint,
    },
  },
  errorMessage: {
    dailyRateTitle: 'Daily cards reached',
    dailyRateContent: 'You can increase the limit on cards per day, but we do not recommend practicing too much',
    noWordsTitle: 'No words available',
    noWordsContent: 'There are no words in your dictionary for the selected category available for training',
  },
};

export const ru = {
  unregistred: 'Будучи анонимным пользователем вы можете протестировать наши мини игры, однако долгосрочная статистика не будет соxранена. Настройка карточек обучения, а также сам процеесс обучения доступен только зарегестрированным пользователям. ',
  pageNames: {
    statistic: 'Статистика',
    dictionary: 'Словарь',
    promo: 'Промо',
    about: 'Команда',
  },
  logout: 'Выйти',
  userProgress: {
    learned: 'Выученные новые слова:',
    played: 'Игры которые вы сыграли:',
    rightInARow: 'Максимальная цепочка правильных ответов:',
    correctRepeats: 'Правильные ответы:',
  },
  settings: {
    name: 'Настройки',
    mode: 'Тёмный режим',
    lang: 'Язык',
    fontSize: 'Размер шрифта',
  },
  cardSettings: {
    amountNewWords: 'Количество новых слов:',
    amountNewCards: 'Количество карточек:',
    yourProgress: 'Прогресс за сегодня:',
    buttons: {
      learn: 'Учить',
      settings: 'настройки',
    },
  },
  mainSentence1: 'Информация о твоём текущем прогрессе',
  mainSentence2: 'Играй в наши мини игры чтобы улучшить свой английский',
  games: {
    audioCall: {
      name: 'Аудио Вызов',
      description: 'Улучшает восприятие английской речи.',
      imgSrc: conference,
    },
    englishPuzzle: {
      name: 'Мозайка',
      description: 'Собирай предложения из отдельных слов. После 10 собранных предложений тебе откроется картина.',
      imgSrc: solution,
    },
    ourGame: {
      name: 'Наша Игра',
      description: 'Описание.',
      imgSrc: speaking,
    },
    savannah: {
      name: 'Саванна',
      description: 'Помогает лучше запомнить выученные слова. Также тренирует твою реакцию и скорость восприятия английской речи.',
      imgSrc: savannah,
    },
    speakIt: {
      name: 'Скажи Это',
      description: 'Произноси слова. Это поможет улучшить твоё произношение.',
      imgSrc: speaking,
    },
    sprint: {
      name: 'Спринт',
      description: 'Учит тебя переводить быстро. Игра использует слова из твоего словаря.',
      imgSrc: sprint,
    },
  },
  errorMessage: {
    dailyRateTitle: 'Дневная норма карточек достигнута',
    dailyRateContent: 'Вы можете увеличить лимит карточек на день, но мы не рекомендуем заниматься слишком много',
    noWordsTitle: 'Нет доступных слов',
    noWordsContent: 'В вашем словаре нет слов выбранной категории доступных для тренировки',
  },
};

export const cardRuOptions = [
  {
    category: 'Подсказки:',
    sentencies: [
      {
        str: 'Перевод слова',
        val: 'translate',
      },
      {
        str: 'Предложение объясняющее значение слова',
        val: 'wordMeaning',
      },
      {
        str: 'Предложение - пример использования слова',
        val: 'example',
      },
    ],
  },
  {
    category: 'Настройки карточки слова:',
    sentencies: [
      {
        str: 'Показывать транскрипцию',
        val: 'showTranscription',
      },
      {
        str: 'Показывать картинку',
        val: 'showImage',
      },
      {
        str: 'Автопроизношение слова',
        val: 'autoPronounce',
      },
      {
        str: 'Показывать перевод текста',
        val: 'showTextTranslate',
      },
      {
        str: 'Кнопка "показать ответ"',
        val: 'showAnswerBtn',
      },
      {
        str: 'Кнопка "удалить слово"',
        val: 'deleteWordBtn',
      },
      {
        str: 'Кнопка "сложное слово"',
        val: 'difficultWordBtn',
      },
      {
        str: 'Кнопки интервального повторения',
        val: 'repeatBtn',
      },
    ],
  },
];

export const cardEngOptions = [
  {
    category: 'Hints:',
    sentencies: [
      {
        str: 'Word translate',
        val: 'translate',
      },
      {
        str: 'Sentence with word meaning explanation',
        val: 'wordMeaning',
      },
      {
        str: 'Sentence with examlple of word usage',
        val: 'example',
      },
    ],
  },
  {
    category: 'Word card settings:',
    sentencies: [
      {
        str: 'Show transcription',
        val: 'showTranscription',
      },
      {
        str: 'Show image',
        val: 'showImage',
      },
      {
        str: 'Autoplay pronunciation',
        val: 'autoPronounce',
      },
      {
        str: 'Show text translate',
        val: 'showTextTranslate',
      },
      {
        str: 'Show answer button',
        val: 'showAnswerBtn',
      },
      {
        str: 'Delete word button',
        val: 'deleteWordBtn',
      },
      {
        str: 'Difficult word button',
        val: 'difficultWordBtn',
      },
      {
        str: 'Show repeat buttons',
        val: 'repeatBtn',
      },
    ],
  },
];

export const pagesEng = [
  {
    page: eng.pageNames.statistic,
    path: eng.pageNames.statistic,
    icon: faChartBar,
  }, {
    page: eng.pageNames.dictionary,
    path: eng.pageNames.dictionary,
    icon: faBook,
  }, {
    page: eng.pageNames.promo,
    path: eng.pageNames.promo,
    icon: faVideo,
  }, {
    page: eng.pageNames.about,
    path: eng.pageNames.about,
    icon: faUsers,
  },
];

export const pagesRu = [
  {
    page: ru.pageNames.statistic,
    path: eng.pageNames.statistic,
    icon: faChartBar,
  }, {
    page: ru.pageNames.dictionary,
    path: eng.pageNames.dictionary,
    icon: faBook,
  }, {
    page: ru.pageNames.promo,
    path: eng.pageNames.promo,
    icon: faVideo,
  }, {
    page: ru.pageNames.about,
    path: eng.pageNames.about,
    icon: faUsers,
  },
];

export const checkBoxesRu = [
  {
    name: 'Обязательные:',
    data: [
      { name: 'Перевод слова', id: 'translate' },
      { name: 'Предложение объясняющее значение слова', id: 'wordMeaning' },
      { name: 'Предложение - пример использования слова', id: 'example' },
    ],
  },
  {
    name: 'Карточка:',
    data: [
      { name: 'Показывать транскрипцию', id: 'showTranscription' },
      { name: 'Показывать картинку', id: 'showImage' },
      { name: 'Автопроизношение слова', id: 'autoPronounce' },
      { name: 'Показывать перевод текста', id: 'showTextTranslate' },
      { name: 'Кнопка "показать ответ"', id: 'showAnswerBtn' },
      { name: 'Кнопка "удалить слово"', id: 'deleteWordBtn' },
      { name: 'Кнопка "сложное слово"', id: 'difficultWordBtn' },
      { name: 'Кнопки интервального повторения', id: 'repeatBtn' },
    ],
  },
];

export const checkBoxesEng = [
  {
    name: 'Required:',
    data: [
      { name: 'Word translate', id: 'translate' },
      { name: 'Sentence with word meaning explanation', id: 'wordMeaning' },
      { name: 'Sentence with examlple of word usage', id: 'example' },
    ],
  },
  {
    name: 'Card:',
    data: [
      { name: 'Show transcription', id: 'showTranscription' },
      { name: 'Show image', id: 'showImage' },
      { name: 'Autoplay pronunciation', id: 'autoPronounce' },
      { name: 'Show text translate', id: 'showTextTranslate' },
      { name: 'Show answer button', id: 'showAnswerBtn' },
      { name: 'Delete word button', id: 'deleteWordBtn' },
      { name: 'Difficult word button', id: 'difficultWordBtn' },
      { name: 'Show repeat buttons', id: 'repeatBtn' },
    ],
  },
];

export const engSetiingsErrors = {
  mandatoryHint: 'Choose required hint',
  amountCards: 'Amount of cards must be less than 50',
  amountWords: 'Amount of words must be less than 50',
  cardsError: 'Amount of cards must be more',
};

export const ruSetiingsErrors = {
  mandatoryHint: 'Выберите обязательную подсказку',
  amountCards: 'Количество слов не должно превышать 50',
  amountWords: 'Количество карточек не должно превышать 50',
  cardsError: 'Количество карточек должно быть больше',
};

export const cardsNames = ['audioCall', 'englishPuzzle', 'ourGame', 'savannah', 'speakIt', 'sprint'];

export const studyModesRu = [
  { name: 'Учить все слова', id: 'trainAllWords' },
  { name: 'Учить новые слова', id: 'onlyNew' },
  { name: 'Повторять уже пройденные', id: 'onlyRepeat' },
  { name: 'Учить трудные слова', id: 'onlyDifficult' },
];

export const studyModesEng = [
  { name: 'Learn all words', id: 'trainAllWords' },
  { name: 'Learn only new words', id: 'onlyNew' },
  { name: 'Repeat known words', id: 'onlyRepeat' },
  { name: 'Learn difficult words', id: 'onlyDifficult' },
];
