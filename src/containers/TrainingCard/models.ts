import * as Models from 'models';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

export interface IntialStateUserWords {
  userWords: FetchedWordData[];
}

export interface ActionUserWords {
  type: string;
  payload: FetchedWordData[];
}

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface ToggleAnswerChecked extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleAnswerCorrect extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ProgressTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface SetInputWord extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleMoveToNext extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ResetTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleTrainingStatistic extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToFailedTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToSuccessTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddRowOfSuccess extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ResetTrainingStatistic extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateNewCardProgress extends Models.Action<Payload.SetDocumentTypes> { }
  export interface UpdateGameCardsProgress extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type ToggleAnswerChecked = () => Action.ToggleAnswerChecked;
  export type ToggleAnswerCorrect = () => Action.ToggleAnswerCorrect;
  export type ProgressTraining = () => Action.ProgressTraining;
  export type SetInputWord = (payload: string) => Action.SetInputWord;
  export type ToggleMoveToNext = () => Action.ToggleMoveToNext;
  export type ResetTraining = () => Action.ResetTraining;
  export type ToggleTrainingStatistic = (isOpen: boolean) => Action.ToggleTrainingStatistic;
  export type AddToFailedTraining = (wordObj: FetchedWordData) => Action.AddToFailedTraining;
  export type AddToSuccessTraining = (wordObj: FetchedWordData) => Action.AddToSuccessTraining;
  export type AddRowOfSuccess = (success: number) => Action.AddRowOfSuccess;
  export type ResetTrainingStatistic = () => Action.ResetTrainingStatistic;
  export type UpdateNewCardProgress = () => Action.UpdateNewCardProgress;
  export type UpdateGameCardsProgress = () => Action.UpdateGameCardsProgress;
}

export interface TrainingState {
  totalProgress: number | string,
  newCardProgress: number;
  currIndex: number | string,
  isChecked: boolean,
  isCorrect: boolean,
  inputWord: string,
  moveToNext: false,
}

export interface TrainingStatistic {
  isTrainingStatisticOpen: boolean,
  failedWordsTraining: Array<FetchedWordData>,
  successWordTraining: Array<FetchedWordData>,
  correctAnswersInRow: number,
  playedNewCards: number,
}
