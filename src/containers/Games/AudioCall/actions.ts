import { ActionType } from './constants';
import { ActionCreator } from './models';

export const startPage: ActionCreator.StartPage = () => ({
  type: ActionType.START_PAGE,
});

export const gamePage: ActionCreator.GamePage = () => ({
  type: ActionType.GAME_PAGE,
});

export const statisticPage: ActionCreator.GamePage = () => ({
  type: ActionType.STATISTIC_PAGE,
});

export const lvl: ActionCreator.Lvl = (level: string) => ({
  type: ActionType.LVL,
  payload: level,
});

export const rnd: ActionCreator.Rnd = (round: string) => ({
  type: ActionType.RND,
  payload: round,
});

export const initWords: ActionCreator.InitWords = () => ({
  type: ActionType.INIT_WORDS,
});

export const fetchWords: ActionCreator.FetchWords = (wordsObj) => ({
  type: ActionType.FETCH_WORDS,
  payload: wordsObj,
});

export const checkAnswer: ActionCreator.CheckAnswer = (isChecked) => ({
  type: ActionType.CHECK_ANSWER,
  payload: isChecked,
});

export const correctAnswer: ActionCreator.CorrectAnswer = (isCorrect) => ({
  type: ActionType.CORRECT_ANSWER,
  payload: isCorrect,
});

export const wrongAnswer: ActionCreator.WrongAnswer = (isWrong) => ({
  type: ActionType.WRONG_ANSWER,
  payload: isWrong,
});

export const progressGame: ActionCreator.ProgressGame = () => ({
  type: ActionType.PROGRESS_GAME,
});

export const resetGame: ActionCreator.ResetGame = () => ({
  type: ActionType.RESET_GAME,
});

export const knowWords: ActionCreator.KnowWords = (wordsObj) => ({
  type: ActionType.KNOW,
  payload: wordsObj,
});

export const notKnowWords: ActionCreator.NotKnowWords = (wordsObj) => ({
  type: ActionType.NOT_KNOW,
  payload: wordsObj,
});

export const toggleStatistic: ActionCreator.ToggleStatistic = () => ({
  type: ActionType.TOGGLE_STATISTIC,
});

export const resetCurrStatistic: ActionCreator.ResetCurrStatistic = () => ({
  type: ActionType.RESET_CURR_STATISTIC,
});

export const updateLongStatDate: ActionCreator.UpdateLongStatDate = (info) => ({
  type: ActionType.UPDATE_DATE,
  payload: info,
});

export const updateLongStatTime: ActionCreator.UpdateLongStatTime = (info) => ({
  type: ActionType.UPDATE_TIME,
  payload: info,
});

export const updateLongStatLevels: ActionCreator.UpdateLongStatLevels = (info) => ({
  type: ActionType.UPDATE_LEVELS,
  payload: info,
});

export const updateLongStatFailed: ActionCreator.UpdateLongStatFailed = (info) => ({
  type: ActionType.UPDATE_FAILED,
  payload: info,
});

export const updateLongStatSuccess: ActionCreator.UpdateLongStatSuccess = (info) => ({
  type: ActionType.UPDATE_SUCCESS,
  payload: info,
});

export const toggleModal: ActionCreator.ToggleModal = (messageType) => ({
  type: ActionType.TOGGLE_MODAL,
  payload: messageType,
});

export const setAudioCallMode: ActionCreator.SetAudioCallMode = (mode: string) => ({
  type: ActionType.SET_AUDIOCALL_MODE,
  payload: mode,
});
