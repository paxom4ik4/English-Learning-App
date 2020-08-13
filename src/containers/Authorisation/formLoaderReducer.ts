import { Reducer } from 'react';
import { Action } from 'redux';
import { ActionType } from './constants';
import { InitialStateFormLoader } from './models';

const initialState: InitialStateFormLoader = {
  isFormLoad: false,
};

const formLoaderReducer: Reducer<InitialStateFormLoader, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SHOW_FORM_LOADER:
      return { ...state, isFormLoad: true };
    case ActionType.HIDE_FORM_LOADER:
      return { ...state, isFormLoad: false };
    default: return state;
  }
};

export default formLoaderReducer;
