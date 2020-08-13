import { Reducer } from 'react';
import { Action } from 'redux';
import { InitialStateDictLoad } from './models';
import { ActionType } from './constants';

const initialState: InitialStateDictLoad = {
  isDictLoad: false,
};

const dictLoaderReducer: Reducer<InitialStateDictLoad, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SHOW_DICT_LOADER:
      return { ...state, isDictLoad: true };
    case ActionType.HIDE_DICT_LOADER:
      return { ...state, isDictLoad: false };
    default: return state;
  }
};

export default dictLoaderReducer;
