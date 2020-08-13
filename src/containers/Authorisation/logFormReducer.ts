import { Reducer } from 'react';
import { Action } from 'redux';
import { ActionType } from './constants';
import { InitialStateLogForm } from './models';

const initialState: InitialStateLogForm = {
  logOpen: false,
};

const logFormReducer: Reducer<InitialStateLogForm, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.OPEN_LOG_FORM:
      return { ...state, logOpen: true };
    case ActionType.CLOSE_LOG_FORM:
      return { ...state, logOpen: false };
    default: return state;
  }
};

export default logFormReducer;
