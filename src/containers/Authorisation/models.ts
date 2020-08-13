export interface InitialStateAuth {
  currentUser: string;
}

export interface InitialStateApiErrors {
  error: string;
}

export interface InitialStateLog {
  isLogged: boolean;
}

export interface InitialStateUserName {
  name: string;
}

export interface InitialStateLogForm {
  logOpen: boolean;
}

export interface InitialStateRegForm {
  regOpen: boolean;
}

export interface OptionalSettings {
  level: number;
  page: number;
  cardsPerDay: number;
  example: boolean;
  wordMeaning: boolean;
  translate: boolean;
  showTranscription: boolean;
  showImage: boolean;
  autoPronounce: boolean;
  showTextTranslate: boolean;
  showAnswerBtn: boolean;
  deleteWordBtn: boolean;
  difficultWordBtn: boolean;
  repeatBtn: boolean;
  firstVisit: boolean;
}

export interface OptionalUserStatistc {
  playedGames: number;
  bestAttempts: number;
  correctRepeats: number;
  totalDailyProgress: number;
}

export interface InitialStateUserStatistic {
  learnedWords: number;
  optional: OptionalUserStatistc;
}
export interface InitialStateSettings {
  wordsPerDay: number;
  optional: OptionalSettings;
}

export interface InitialStateFormLoader {
  isFormLoad: boolean;
}
export interface ActionUserStatistic {
  type: string;
  amount?: number;
  payload?: OptionalUserStatistc;
}

export interface ActionUserSettings {
  type: string;
  amount?: number;
  payload?: OptionalSettings;
}
export interface ActionUserName {
  type: string;
  payload: string;
}
export interface ActionAuth {
  type: string;
  payload?: string;
}
