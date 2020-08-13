import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateModalInfo, ActionModalInfo } from './models';

const initialState: InitialStateModalInfo = {
  modalId: '',
  name: '',
  desc: '',
};

const modalInfoReducer: Reducer<InitialStateModalInfo, ActionModalInfo> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.SET_INFO:
      return {
        ...state,
        modalId: action.payload.modalId,
        name: action.payload.name,
        desc: action.payload.desc,
      };
    default: return state;
  }
};

export default modalInfoReducer;
