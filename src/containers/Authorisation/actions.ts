import { Action } from 'redux';
import {
  ActionAuth,
  ActionUserName,
  ActionUserSettings,
  OptionalSettings,
  OptionalUserStatistc,
  ActionUserStatistic,
} from './models';
import { ActionType } from './constants';

export const setNewUser = (userId: string): ActionAuth => ({
  type: ActionType.SET_NEW_USER,
  payload: userId,
});

export const setLogged = (): ActionAuth => ({
  type: ActionType.SET_LOGGED,
});

export const setUnLogged = (): ActionAuth => ({
  type: ActionType.SET_UNLOGGED,
});

export const setUserRefreshToken = (refreshToken: string): ActionAuth => ({
  type: ActionType.SET_REFRESH_TOKEN,
  payload: refreshToken,
});

export const removeUserToken = (): ActionAuth => ({
  type: ActionType.REMOVE_TOKEN,
});

export const addApiError = (mes: string): ActionAuth => ({
  type: ActionType.ADD_API_ERROR_MESSAGE,
  payload: mes,
});

export const removeApiError = (): ActionAuth => ({
  type: ActionType.REMOVE_API_ERROR_MESSAGE,
  payload: '',
});

export const setUserName = (name: string): ActionUserName => ({
  type: ActionType.SET_USER_NAME,
  payload: name,
});

export const openRegForm = (): Action => ({
  type: ActionType.OPEN_REG_FORM,
});

export const closeRegForm = (): Action => ({
  type: ActionType.CLOSE_REG_FORM,
});

export const openLogForm = (): Action => ({
  type: ActionType.OPEN_LOG_FORM,
});

export const closeLogForm = (): Action => ({
  type: ActionType.CLOSE_LOG_FORM,
});

export const updateVisits = (): Action => ({
  type: ActionType.UPDATE_VISITS,
});

export const updateUserWordsAmount = (amount: number): ActionUserSettings => ({
  type: ActionType.UPDATE_USER_WORDS_AMOUNT,
  amount,
});

export const updateUserStoredSettings = (optional: OptionalSettings): ActionUserSettings => ({
  type: ActionType.UPDATE_USER_SETTINGS,
  payload: optional,
});

export const updateUserLearnedWordsAmount = (learned: number): ActionUserStatistic => ({
  type: ActionType.UPDATE_USER_LEARNED_WORDS,
  amount: learned,
});

export const updateUserStoredStatistic = (statistic: OptionalUserStatistc): ActionUserStatistic => ({
  type: ActionType.UPDATE_USER_STATISTIC,
  payload: statistic,
});

export const showFormLoader = (): Action => ({
  type: ActionType.SHOW_FORM_LOADER,
});

export const hideFormLoader = (): Action => ({
  type: ActionType.HIDE_FORM_LOADER,
});

export const updateDailyCardProgress = (): Action => ({
  type: ActionType.UPDATE_DAILY_CARDS_PROGRESS,
});

export const updateUserBestAttempts = (amount: number): ActionUserStatistic => ({
  type: ActionType.UPDATE_USER_BEST_ATTEMPTS,
  amount,
});

export const updateUserCorrectRepeats = (): Action => ({
  type: ActionType.UPDATE_USER_CORRECT_REPEATS,
});
