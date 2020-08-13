import { Reducer } from 'react';
import { Action } from 'redux';
import { InitialStateTrainingPage } from './models';

const initialState: InitialStateTrainingPage = {
  trainingOpen: false,
};

const trainingPageReducer: Reducer<InitialStateTrainingPage, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'OPEN_TRAINING':
      return { ...state, trainingOpen: true };
    case 'CLOSE_TRAINING':
      return { ...state, trainingOpen: false };
    default: return state;
  }
};

export default trainingPageReducer;
