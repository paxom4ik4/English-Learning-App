import { Action } from 'redux';
import { ActionType } from './constants';

export const incrementIdx = (): Action => ({
  type: ActionType.INCREASE_INDEX,
});

export const setToInitial = (): Action => ({
  type: ActionType.SET_TO_INITIAL,
});
