import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateLoading } from './models';

const initialState: InitialStateLoading = {
  isLoading: false,
};

const loaderReducer: Reducer<InitialStateLoading, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SHOW_LOADER:
      return { ...state, isLoading: true };
    case ActionType.HIDE_LOADER:
      return { ...state, isLoading: false };
    default: return state;
  }
};

export default loaderReducer;
