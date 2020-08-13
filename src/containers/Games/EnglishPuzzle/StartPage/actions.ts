import { Action } from 'redux';
import { ActionType } from './constants';

export const closeStartPage = (): Action => ({
  type: ActionType.CLOSE_START_PAGE,
});
