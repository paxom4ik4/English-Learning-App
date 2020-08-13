import * as Models from 'models';
import { eng, ru } from 'constants/audio-call-constants';
import {
  ModalInitState, AnswerInitState, StatisticInitState, LongStatisticState, AudioCallMode,
} from './models';
import { ActionType } from './constants';

const initialState = {
  page: 'START_PAGE',
  level: '1',
  round: '1',
  currentWords: [],
  translateOptions: [],
};

const modalInitState = <ModalInitState> {
  isOpen: false,
  title: '',
  message: '',
};

const answerInitState = <AnswerInitState> {
  btnTitle: ' НЕ ЗНАЮ',
  selectedWord: 'null',
  isChecked: false,
  isCorrect: false,
  isWrong: false,
  progress: 0,
};

const statisticInitState = <StatisticInitState> {
  isLongStatistic: false,
  wrongAnswers: [],
  correctAnswers: [],
};

const longStatisticInitState = <LongStatisticState> {
  playedDates: [],
  playedTimes: [],
  playedLevels: [],
  failed: [],
  success: [],
};

const audioCallModeInitState = <AudioCallMode>{
  mode: 'free-mode',
};

const modalReducer: Models.Reducer<unknown> = (
  state: ModalInitState = modalInitState, { type, payload },
) => {
  let messageTitle = '';
  let messageBody = '';
  const lang = localStorage.getItem('lang') || 'ru';
  const usedLang = lang === 'eng' ? eng : ru;
  switch (payload) {
    case 'exit':
      messageTitle = usedLang.modalMessage.titleNotOver;
      messageBody = usedLang.modalMessage.contentNotOver;
      break;
    case 'not enough words':
      messageTitle = usedLang.modalMessage.titleNotEnough;
      messageBody = usedLang.modalMessage.contentNotEnough;
      break;
    default:
      messageTitle = usedLang.modalMessage.titleError;
      messageBody = usedLang.modalMessage.contentError;
      break;
  }

  switch (type) {
    case ActionType.TOGGLE_MODAL:
      return {
        ...state, isOpen: !state.isOpen, title: messageTitle, message: messageBody,
      };
    default:
      return state;
  }
};

const pageReducer: Models.Reducer<unknown> = (
  state = initialState.page, { type /* payload */ },
) => {
  switch (type) {
    case ActionType.START_PAGE:
      return type;
    case ActionType.GAME_PAGE:
      return type;
    case ActionType.STATISTIC_PAGE:
      return type;
    default:
      return state;
  }
};

const levelReducer: Models.Reducer<unknown> = (state = initialState.level, { type, payload }) => {
  switch (type) {
    case ActionType.LVL:
      return payload;
    default:
      return state;
  }
};

const roundReducer: Models.Reducer<unknown> = (state = initialState.round, { type, payload }) => {
  switch (type) {
    case ActionType.RND:
      return payload;
    default:
      return state;
  }
};

const currWordsReducer: Models.Reducer<unknown> = (
  state = initialState.currentWords, { type, payload },
) => {
  switch (type) {
    case ActionType.INIT_WORDS:
      return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    case ActionType.FETCH_WORDS:
      return payload;
    default:
      return state;
  }
};

const answerReducer: Models.Reducer<unknown> = (
  state: AnswerInitState = answerInitState, { type, payload },
): AnswerInitState => {
  switch (type) {
    case ActionType.CHECK_ANSWER:
      return {
        ...state,
        isChecked: !state.isChecked,
        isCorrect: false,
        isWrong: false,
        selectedWord: payload,
      };
    case ActionType.CORRECT_ANSWER:
      return {
        ...state, isCorrect: payload, isWrong: !payload,
      };
    case ActionType.WRONG_ANSWER:
      return {
        ...state, isWrong: payload, isCorrect: !payload,
      };
    case ActionType.PROGRESS_GAME:
      return {
        ...state, progress: state.progress + 1,
      };
    case ActionType.RESET_GAME:
      return answerInitState;
    default:
      return state;
  }
};

const statisticReducer: Models.Reducer<unknown> = (
  state: StatisticInitState = statisticInitState, { type, payload },
): StatisticInitState => {
  switch (type) {
    case ActionType.KNOW:
      return { ...state, correctAnswers: state.correctAnswers.concat(payload) };
    case ActionType.NOT_KNOW:
      return { ...state, wrongAnswers: state.wrongAnswers.concat(payload) };
    case ActionType.TOGGLE_STATISTIC:
      return { ...state, isLongStatistic: !state.isLongStatistic };
    case ActionType.RESET_CURR_STATISTIC:
      return statisticInitState;
    default:
      return state;
  }
};

const longStatisticReducer: Models.Reducer<unknown> = (
  state: LongStatisticState = longStatisticInitState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_DATE:
      return { ...state, playedDates: state.playedDates.concat(action.payload) };
    case ActionType.UPDATE_TIME:
      return { ...state, playedTimes: state.playedTimes.concat(action.payload) };
    case ActionType.UPDATE_LEVELS:
      return { ...state, playedLevels: state.playedLevels.concat(action.payload) };
    case ActionType.UPDATE_FAILED:
      return { ...state, failed: state.failed.concat(action.payload) };
    case ActionType.UPDATE_SUCCESS:
      return { ...state, success: state.success.concat(action.payload) };
    default: return state;
  }
};

const audioCallModeReducer: Models.Reducer<unknown> = (
  state: AudioCallMode = audioCallModeInitState, { type, payload },
) => {
  switch (type) {
    case ActionType.SET_AUDIOCALL_MODE:
      return { ...state, mode: payload };
    default:
      return state;
  }
};

export {
  pageReducer, levelReducer, roundReducer, currWordsReducer,
  answerReducer, statisticReducer, modalReducer, longStatisticReducer, audioCallModeReducer,
};
