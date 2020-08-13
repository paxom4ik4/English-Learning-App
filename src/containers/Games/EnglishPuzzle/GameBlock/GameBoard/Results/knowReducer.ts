import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateSuccess, ActionResults } from './models';

const initialState: InitialStateSuccess = {
  success: [],
};

const knowReducer: Reducer<InitialStateSuccess, ActionResults> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_SUCCESS: return { ...state, success: state.success.concat(action.payload) };
    case ActionType.REMOVE_SUCCESS: return { ...state, success: [] };
    default: return state;
  }
};

export default knowReducer;
