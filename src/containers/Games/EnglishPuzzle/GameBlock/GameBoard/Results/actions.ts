import { Action } from 'redux';
import { ActionType } from './constants';
import { ActionResults, SavedResult } from './models';

export const addSuccess = (data: SavedResult): ActionResults => ({
  type: ActionType.ADD_SUCCESS,
  payload: data,
});

export const reomveSuccess = (): ActionResults => ({
  type: ActionType.REMOVE_SUCCESS,
});

export const addFailed = (data: SavedResult): ActionResults => ({
  type: ActionType.ADD_FAILED,
  payload: data,
});

export const reomveFailed = (): ActionResults => ({
  type: ActionType.REMOVE_FAILED,
});

export const openResults = (): Action => ({
  type: ActionType.OPEN_RESULTS,
});

export const closeResults = (): Action => ({
  type: ActionType.CLOSE_RESULTS,
});
