import { Action } from 'redux';
import { ActionType } from './constants';

export const showDictLoader = (): Action => ({
  type: ActionType.SHOW_DICT_LOADER,
});

export const hideDictLoader = (): Action => ({
  type: ActionType.HIDE_DICT_LOADER,
});
