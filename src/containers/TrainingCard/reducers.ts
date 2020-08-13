import * as Models from 'models';
import { ActionType } from './constants';
import { TrainingState, TrainingStatistic } from './models';

const trainingInitState = <TrainingState> {
  totalProgress: 0,
  newCardProgress: 0,
  currIndex: 0,
  isChecked: false,
  isCorrect: false,
  inputWord: '',
  moveToNext: false,
};

const trainingStatisticInitState = <TrainingStatistic> {
  isTrainingStatisticOpen: false,
  failedWordsTraining: [],
  successWordTraining: [],
  correctAnswersInRow: 0,
  playedNewCards: 0,
};

const trainingReducer: Models.Reducer<unknown> = (
  state: TrainingState = trainingInitState, { type, payload },
) => {
  switch (type) {
    case ActionType.TOGGLE_ANSWER_CHECKED:
      return { ...state, isChecked: !state.isChecked };
    case ActionType.TOGGLE_ANSWER_CORRECT:
      return { ...state, isCorrect: !state.isCorrect };
    case ActionType.UPDATE_DAILY_CARDS_PROGRESS:
      return { ...state, totalProgress: +state.totalProgress + 1 };
    case ActionType.PROGRESS_TRAINING:
      return {
        ...state,
        currIndex: +state.currIndex + 1,
        inputWord: '',
        isChecked: false,
        isCorrect: false,
        moveToNext: false,
      };
    case ActionType.SET_INPUT_WORD:
      return { ...state, inputWord: payload, isChecked: true };
    case ActionType.TOGGLE_MOVE_TO_NEXT:
      return { ...state, moveToNext: !state.moveToNext };
    case ActionType.UPDATE_CARD_PROGRESS:
      return { ...state, newCardProgress: +state.newCardProgress + 1 };
    case ActionType.RESET_TRAINING:
      return {
        ...state,
        currIndex: 0,
        inputWord: '',
        isChecked: false,
        isCorrect: false,
        moveToNext: false,
      };
    default:
      return state;
  }
};

const trainingStatisticReducer: Models.Reducer<unknown> = (
  state: TrainingStatistic = trainingStatisticInitState, { type, payload },
) => {
  switch (type) {
    case ActionType.TOGGLE_TRAINING_STATISTIC:
      return { ...state, isTrainingStatisticOpen: payload };
    case ActionType.ADD_TO_FAILED_TRAINING:
      return { ...state, failedWordsTraining: state.failedWordsTraining.concat(payload) };
    case ActionType.ADD_TO_SUCCESS_TRAINING:
      return { ...state, successWordTraining: state.successWordTraining.concat(payload) };
    case ActionType.ADD_ROW_OF_SUCCESS:
      return state.correctAnswersInRow > payload
        ? state : { ...state, correctAnswersInRow: payload };
    case ActionType.GAME_CARD_PROGRESS:
      return { ...state, playedNewCards: state.playedNewCards + 1 };
    case ActionType.RESET_TRAINING_STATISTIC:
      return trainingStatisticInitState;
    default:
      return state;
  }
};

export { trainingReducer, trainingStatisticReducer };
