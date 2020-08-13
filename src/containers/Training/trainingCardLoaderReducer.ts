import { Reducer } from 'react';
import { Action } from 'redux';
import { InitialStateTrainCardLoader } from './models';
import { ActionType } from './constants';

const initialState: InitialStateTrainCardLoader = {
  isCardLoad: false,
};

const trainCardLoaderReducer: Reducer<InitialStateTrainCardLoader, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SHOW_TRAIN_LOADER:
      return { ...state, isCardLoad: true };
    case ActionType.HIDE_TRAIN_LOADER:
      return { ...state, isCardLoad: false };
    default: return state;
  }
};

export default trainCardLoaderReducer;
