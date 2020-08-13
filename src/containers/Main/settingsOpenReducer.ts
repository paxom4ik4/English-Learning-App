import { InitialStateStatOpen } from './models';
import { ActionType } from './constants';

const initialState: InitialStateStatOpen = {
  isOpen: false,
};

const statOpenReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.HANDLE_SETTINGS: return { ...state, isOpen: action.payload };
    default: return state;
  }
};

export default statOpenReducer;
