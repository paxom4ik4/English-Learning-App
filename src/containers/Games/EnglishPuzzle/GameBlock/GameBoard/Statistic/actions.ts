import { Action } from 'redux';
import { StatisticInfo, ActionStatistic } from './models';
import { ActionType } from './constants';

export const openStatistic = (): Action => ({
  type: ActionType.OPEN_STATISTIC,
});

export const closeStatistic = (): Action => ({
  type: ActionType.CLOSE_STATISTIC,
});

export const updateDate = (data: StatisticInfo): ActionStatistic => ({
  type: ActionType.UPDATE_DATE,
  payload: data,
});

export const updateTime = (data: StatisticInfo): ActionStatistic => ({
  type: ActionType.UPDATE_TIME,
  payload: data,
});

export const updateLevels = (data: StatisticInfo): ActionStatistic => ({
  type: ActionType.UPDATE_LEVELS,
  payload: data,
});

export const updateFailed = (data: StatisticInfo): ActionStatistic => ({
  type: ActionType.UPDATE_FAILED,
  payload: data,
});

export const updateSuccess = (data: StatisticInfo): ActionStatistic => ({
  type: ActionType.UPDATE_SUCCESS,
  payload: data,
});
