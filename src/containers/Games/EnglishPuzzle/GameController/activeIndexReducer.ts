import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateIndex } from './models';

const initialState: InitialStateIndex = {
  currentIdx: 0,
};

const activeIndexReducer: Reducer<InitialStateIndex, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.INCREASE_INDEX: return { ...state, currentIdx: state.currentIdx + 1 };
    case ActionType.SET_TO_INITIAL: return { ...state, currentIdx: 0 };
    default: return state;
  }
};

export default activeIndexReducer;
