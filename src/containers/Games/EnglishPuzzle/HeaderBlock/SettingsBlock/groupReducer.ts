import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateGroup, ActionGroupsPages } from './models';

const initialGroup = 1;

const initialState: InitialStateGroup = {
  group: initialGroup,
};

const groupReducer: Reducer<InitialStateGroup, ActionGroupsPages> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_GROUP:
      return { ...state, group: action.payload };
    default: return state;
  }
};

export default groupReducer;
