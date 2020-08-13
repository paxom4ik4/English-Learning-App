import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateResultsPage } from './models';

const initialState: InitialStateResultsPage = {
  isOpen: false,
};

const openResultsReducer: Reducer<InitialStateResultsPage, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.OPEN_RESULTS: return { ...state, isOpen: true };
    case ActionType.CLOSE_RESULTS: return { ...state, isOpen: false };
    default: return state;
  }
};

export default openResultsReducer;
