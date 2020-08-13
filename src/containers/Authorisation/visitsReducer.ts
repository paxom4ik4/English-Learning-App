import { ActionType } from './constants';

const initialState = {
  visits: localStorage.getItem('visit') || 0,
};

const visitsReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_VISITS:
      return { ...state, visits: +state.visits + 1 };
    default: return state;
  }
};

export default visitsReducer;
