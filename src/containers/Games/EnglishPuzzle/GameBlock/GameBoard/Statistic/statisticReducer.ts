import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateStatisticPage } from './models';

const initialState: InitialStateStatisticPage = {
  statOpen: false,
};

const statisticReducer: Reducer<InitialStateStatisticPage, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.OPEN_STATISTIC: return { ...state, statOpen: true };
    case ActionType.CLOSE_STATISTIC: return { ...state, statOpen: false };
    default: return state;
  }
};

export default statisticReducer;
