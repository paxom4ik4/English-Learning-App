import { Reducer } from 'react';
import { InitialStateLog, ActionAuth } from './models';
import { ActionType } from './constants';

const initialState: InitialStateLog = {
  isLogged: false,
};

const logReducer: Reducer<InitialStateLog, ActionAuth> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SET_LOGGED: return { ...state, isLogged: true };
    case ActionType.SET_UNLOGGED: return { ...state, isLogged: false };
    default: return state;
  }
};

export default logReducer;
