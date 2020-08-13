import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateUserStatistic, ActionUserStatistic } from './models';

const initialState: InitialStateUserStatistic = {
  learnedWords: 0,
  optional: {
    playedGames: 0,
    bestAttempts: 0,
    correctRepeats: 0,
    totalDailyProgress: 0,
  },
};

const userStatisticReducer: Reducer<InitialStateUserStatistic, ActionUserStatistic> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_LEARNED_WORDS:
      return { ...state, learnedWords: action.amount };
    case ActionType.UPDATE_DAILY_CARDS_PROGRESS:
      return {
        ...state,
        optional: {
          ...state.optional, totalDailyProgress: +state.optional.totalDailyProgress + 1,
        },
      };
    case ActionType.UPDATE_USER_BEST_ATTEMPTS:
      return {
        ...state,
        optional: {
          ...state.optional, bestAttempts: action.amount,
        },
      };
    case ActionType.UPDATE_USER_CORRECT_REPEATS:
      return {
        ...state,
        optional: {
          ...state.optional, correctRepeats: +state.optional.correctRepeats + 1,
        },
      };
    case ActionType.UPDATE_USER_STATISTIC:
      return { ...state, optional: action.payload };
    default: return state;
  }
};

export default userStatisticReducer;
