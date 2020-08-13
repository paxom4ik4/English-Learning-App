import { Reducer } from 'react';
import { Action } from 'redux';
import { InitialStateStartPage } from './models';
import { ActionType } from './constants';

const initialState: InitialStateStartPage = {
  isActive: true,
};

const startPageReducer:Reducer<InitialStateStartPage, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.CLOSE_START_PAGE: return { ...state, isActive: false };
    default: return state;
  }
};

export default startPageReducer;
