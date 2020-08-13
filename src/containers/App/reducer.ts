import * as Models from 'models';
import { ActionType } from './constants';

const initialState = 'INIT_APP';

const appReducer: Models.Reducer<unknown> = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.INIT_APP:
      return initApp(state, payload);
    default:
      return state;
  }
};

const initApp = (state, payload) => {
  const newState = { ...state, payload };

  return newState;
};

export default appReducer;
