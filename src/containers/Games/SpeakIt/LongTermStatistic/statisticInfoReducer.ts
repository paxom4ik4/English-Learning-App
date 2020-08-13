import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateStatisticInfo, ActionStatistic } from './models';

const initialState: InitialStateStatisticInfo = {
  playedDates: [],
  playedTimes: [],
  playedLevels: [],
  failed: [],
  success: [],
};

const statisticInfoReducer: Reducer<InitialStateStatisticInfo, ActionStatistic> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_DATE:
      return { ...state, playedDates: state.playedDates.concat(action.payload) };
    case ActionType.UPDATE_TIME:
      return { ...state, playedTimes: state.playedTimes.concat(action.payload) };
    case ActionType.UPDATE_LEVELS:
      return { ...state, playedLevels: state.playedLevels.concat(action.payload) };
    case ActionType.UPDATE_FAILED:
      return { ...state, failed: state.failed.concat(action.payload) };
    case ActionType.UPDATE_SUCCESS:
      return { ...state, success: state.success.concat(action.payload) };
    default: return state;
  }
};

export default statisticInfoReducer;
