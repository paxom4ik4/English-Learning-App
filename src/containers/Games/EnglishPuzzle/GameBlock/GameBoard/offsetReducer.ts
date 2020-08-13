import { Reducer } from 'react';
import { ActionType } from './constants';
import { ActionOffset, InitialStateOffsetX } from './models';

const initialState: InitialStateOffsetX = {
  xOffsets: [],
};

const offsetXReducer: Reducer<InitialStateOffsetX, ActionOffset> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_OFFSET:
      return { ...state, xOffsets: state.xOffsets.concat([action.payload]) };
    case ActionType.REMOVE_OFFSET:
      return { ...state, xOffsets: [] };
    default: return state;
  }
};

export default offsetXReducer;
