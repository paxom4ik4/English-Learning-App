import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateMainLang, ActionLang } from './models';

const initialState: InitialStateMainLang = {
  lang: localStorage.getItem('lang') || 'ru',
};

const mainLangReducer: Reducer<InitialStateMainLang, ActionLang> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.CHANGE_LANG:
      return { ...state, lang: action.payload };
    default: return state;
  }
};

export default mainLangReducer;
