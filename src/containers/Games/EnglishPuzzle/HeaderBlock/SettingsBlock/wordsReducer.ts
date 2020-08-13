import update from 'immutability-helper';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateWords, ActionWords } from './models';

const initialState: InitialStateWords = {
  currentWords: [],
};

const wordsReducer: Reducer<InitialStateWords, ActionWords> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.FETCH_WORDS:
      return update(state, { currentWords: { $set: action.payload } });
    default: return state;
  }
};

export default wordsReducer;
