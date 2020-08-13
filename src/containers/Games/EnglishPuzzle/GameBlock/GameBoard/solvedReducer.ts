import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateIsSolved } from './models';

const initialState: InitialStateIsSolved = {
  solved: false,
};

const solvedReducer: Reducer<InitialStateIsSolved, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SOLVED: return { ...state, solved: true };
    case ActionType.NEW_GAME: return { ...state, solved: false };
    default: return state;
  }
};

export default solvedReducer;
