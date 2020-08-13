import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStatePage, ActionGroupsPages } from './models';

const initialPage = 1;

const initialState: InitialStatePage = {
  page: initialPage,
};

const pageReducer: Reducer<InitialStatePage, ActionGroupsPages> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_PAGE:
      return { ...state, page: action.payload };
    default: return state;
  }
};

export default pageReducer;
