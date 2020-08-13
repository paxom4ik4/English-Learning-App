import { Reducer } from 'react';
import { InitialStateFailed, ActionResults } from './models';
import { ActionType } from './constants';

const initialState: InitialStateFailed = {
  failed: [],
};

const dontKnowReducer: Reducer<InitialStateFailed, ActionResults> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.ADD_FAILED: return { ...state, failed: state.failed.concat(action.payload) };
    case ActionType.REMOVE_FAILED: return { ...state, failed: [] };
    default: return state;
  }
};

export default dontKnowReducer;
