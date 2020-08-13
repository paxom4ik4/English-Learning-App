import { Reducer } from 'react';
import update from 'immutability-helper';
import { InitialStateApiErrors, ActionAuth } from './models';
import { ActionType } from './constants';

const initialState: InitialStateApiErrors = {
  error: '',
};

const authErrorsReducer: Reducer<InitialStateApiErrors, ActionAuth> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.ADD_API_ERROR_MESSAGE: return update(state, {
      error: { $set: action.payload },
    });
    case ActionType.REMOVE_API_ERROR_MESSAGE: return update(state, {
      error: { $set: action.payload },
    });
    default: return state;
  }
};

export default authErrorsReducer;
