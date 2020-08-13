import { Reducer } from 'react';
import { InitialStateUserName, ActionUserName } from './models';
import { ActionType } from './constants';

const initalState: InitialStateUserName = {
  name: localStorage.getItem('userName') || '',
};

const userNameReducer: Reducer<InitialStateUserName, ActionUserName> = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case ActionType.SET_USER_NAME:
      return { ...state, name: action.payload };
    default: return state;
  }
};

export default userNameReducer;
