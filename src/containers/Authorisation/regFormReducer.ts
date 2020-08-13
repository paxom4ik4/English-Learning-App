import { Reducer } from 'react';
import { Action } from 'redux';
import { ActionType } from './constants';
import { InitialStateRegForm } from './models';

const initialState: InitialStateRegForm = {
  regOpen: false,
};

const regFormReducer: Reducer<InitialStateRegForm, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.OPEN_REG_FORM:
      return { ...state, regOpen: true };
    case ActionType.CLOSE_REG_FORM:
      return { ...state, regOpen: false };
    default: return state;
  }
};

export default regFormReducer;
