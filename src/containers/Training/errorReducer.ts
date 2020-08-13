import { Reducer } from 'react';
import { Action } from 'redux';
import { ActionType } from './constants';
import { InitialStateError } from './models';

const initialState: InitialStateError = {
  error: false,
};

const errorReducer: Reducer<InitialStateError, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.TOGGLE_ERROR:
      return { ...state, error: !state.error };
    default: return state;
  }
};

export default errorReducer;
