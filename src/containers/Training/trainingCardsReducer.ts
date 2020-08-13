import update from 'immutability-helper';
import { Reducer } from 'react';
import { ActionType } from 'containers/TrainingCard/constants';
import { IntialStateUserWords, ActionUserWords } from '../TrainingCard/models';

const initialState: IntialStateUserWords = {
  userWords: [],
};

const userWordsReducer: Reducer<IntialStateUserWords, ActionUserWords> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_WORDS:
      return update(state, { userWords: { $set: action.payload } });
    case ActionType.ADD_NEW_WORDS:
      return { ...state, userWords: state.userWords.concat(action.payload) };
    default: return state;
  }
};

export default userWordsReducer;
