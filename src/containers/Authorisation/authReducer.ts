import { Reducer } from 'react';
import { InitialStateAuth, ActionAuth } from './models';
import { ActionType } from './constants';

const initalState: InitialStateAuth = {
  currentUser: '',
};

const authTokenReducer: Reducer<InitialStateAuth, ActionAuth> = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case ActionType.SET_NEW_USER:
      return { ...state, currentUser: action.payload };
    default: return state;
  }
};

export default authTokenReducer;
