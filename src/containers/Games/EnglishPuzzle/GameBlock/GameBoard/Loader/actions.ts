import { Action } from 'redux';
import { ActionType } from './constants';

export const showLoader = (): Action => ({
  type: ActionType.SHOW_LOADER,
});

export const hideLoader = (): Action => ({
  type: ActionType.HIDE_LOADER,
});
