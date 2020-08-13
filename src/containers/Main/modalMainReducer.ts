import { Reducer } from 'react';
import { Action } from 'redux';
import { InitialStateModal } from './models';
import { ActionType } from './constants';

const initialState: InitialStateModal = {
  isOpen: false,
};

const modalMainReducer: Reducer<InitialStateModal, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.OPEN_MODAL: return { ...state, isOpen: true };
    case ActionType.CLOSE_MODAL: return { ...state, isOpen: false };
    default: return state;
  }
};

export default modalMainReducer;
