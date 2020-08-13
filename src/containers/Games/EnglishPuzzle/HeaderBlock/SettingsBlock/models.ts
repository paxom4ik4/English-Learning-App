export interface FetchedWordData {
  _id?: string;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
  translateOptions?: string[];
  id: number;
  userWord?: {
    optional?: {
      played?: boolean;
      time?: string;
      date?: string;
      lastRepeat?: string;
      repeatTimes?: number;
      nextRepeat?: string;
      dif?: boolean;
      del?: boolean;
      success?: number;
      binded?: boolean;
    }
  }
}

export interface ActionWords {
  type: string;
  payload?: Array<FetchedWordData>;
}

export interface ActionGroupsPages {
  type: string;
  payload: number;
}

export interface InitialStateGroup {
  group: number;
}

export interface InitialStatePage {
  page: number;
}

export interface InitialStateWords {
  currentWords: Array<FetchedWordData>;
}
