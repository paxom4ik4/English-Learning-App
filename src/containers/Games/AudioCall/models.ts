import * as Models from 'models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface StartPage extends Models.Action<Payload.SetDocumentTypes> { }
  export interface GamePage extends Models.Action<Payload.SetDocumentTypes> { }
  export interface StatisticPage extends Models.Action<Payload.SetDocumentTypes> { }
  export interface Lvl extends Models.Action<Payload.SetDocumentTypes> { }
  export interface Rnd extends Models.Action<Payload.SetDocumentTypes> { }
  export interface InitWords extends Models.Action<Payload.SetDocumentTypes> { }
  export interface FetchWords extends Models.Action<Payload.SetDocumentTypes> { }
  export interface CheckAnswer extends Models.Action<Payload.SetDocumentTypes> { }
  export interface CorrectAnswer extends Models.Action<Payload.SetDocumentTypes> { }
  export interface WrongAnswer extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ProgressGame extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ResetGame extends Models.Action<Payload.SetDocumentTypes> { }
  export interface KnowWords extends Models.Action<Payload.SetDocumentTypes> { }
  export interface NotKnowWords extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleStatistic extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ResetCurrStatistic extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateLongStatDate extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateLongStatTime extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateLongStatLevels extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateLongStatFailed extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateLongStatSuccess extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleModal extends Models.Action<Payload.SetDocumentTypes> { }
  export interface SetAudioCallMode extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type StartPage = () => Action.StartPage;
  export type GamePage = () => Action.GamePage;
  export type StatisticPage = () => Action.GamePage;
  export type Lvl = (level: string) => Action.Lvl;
  export type Rnd = (round: string) => Action.Rnd;
  export type InitWords = () => Action.InitWords;
  export type FetchWords = (wordsObj: unknown) => Action.FetchWords;
  export type CheckAnswer = (payload: string) => Action.CheckAnswer;
  export type CorrectAnswer = (payload: boolean) => Action.CorrectAnswer;
  export type WrongAnswer = (payload: boolean) => Action.WrongAnswer;
  export type ProgressGame = () => Action.ProgressGame;
  export type ResetGame = () => Action.ResetGame;
  export type KnowWords = (wordObj: unknown) => Action.KnowWords;
  export type NotKnowWords = (wordObj: unknown) => Action.NotKnowWords;
  export type ToggleStatistic = () => Action.ToggleStatistic;
  export type ResetCurrStatistic = () => Action.ResetCurrStatistic;
  export type UpdateLongStatDate = (payload: StatisticInfo) => Action.UpdateLongStatDate;
  export type UpdateLongStatTime = (payload: StatisticInfo) => Action.UpdateLongStatTime;
  export type UpdateLongStatLevels = (payload: StatisticInfo) => Action.UpdateLongStatLevels;
  export type UpdateLongStatFailed = (payload: StatisticInfo) => Action.UpdateLongStatFailed;
  export type UpdateLongStatSuccess = (payload: StatisticInfo) => Action.UpdateLongStatSuccess;
  export type ToggleModal = (messageType: string) => Action.ToggleModal;
  export type SetAudioCallMode = (payload: string) => Action.SetAudioCallMode;
}

export interface Json {
  audio: string,
  audioExample: string,
  audioMeaning: string,
  group: number,
  id: string,
  image: string,
  page: number,
  textExample: string,
  textExampleTranslate: string,
  textMeaning: string,
  textMeaningTranslate: string,
  transcription: string,
  word: string,
  wordTranslate: string,
  wordsPerExampleSentence: number,
  translateOptions: string[],
}

export interface WordsFromAPI {
  id: number,
  text: string,
  meanings: Array<unknown>
}

export interface WordInfo {
  alternativeTranslations: Array<unknown>
  definition: {text: string, soundUrl: string}
  difficultyLevel: number
  examples: Array<unknown>
  id: string
  images: Array<unknown>
  meaningsWithSimilarTranslation: Array<unknown>
  mnemonics: null
  partOfSpeechCode: string
  prefix: string
  properties: unknown
  soundUrl: string
  text: string
  transcription: string
  translation: {text: string, note: string}
  updatedAt: string
  wordId: number
}

export interface ModalInitState {
  isOpen: boolean,
  title: string,
  message: string,
}

export interface AnswerInitState {
  btnTitle: string,
  selectedWord: string,
  isChecked: boolean,
  isCorrect: boolean,
  isWrong: boolean,
  progress: number,
}

export interface StatisticInitState {
  isLongStatistic: boolean,
  wrongAnswers: Array<Json>,
  correctAnswers: Array<Json>,
}

export interface StatisticInfo {
  date: string;
  payload?: string | number;
}

export interface LongStatisticState {
  playedDates: StatisticInfo[],
  playedTimes: StatisticInfo[],
  playedLevels: StatisticInfo[],
  failed: StatisticInfo[],
  success: StatisticInfo[],
}

export interface AudioCallMode {
  mode: string,
}
