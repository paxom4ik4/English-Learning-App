import { Reducer } from 'react';
import { InitialStateTheme, ActionTheme } from './models';
import { ActionType } from './constants';

const initialState: InitialStateTheme = {
  theme: 'light',
};

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', JSON.stringify(initialState));
}

const themeReducer: Reducer<InitialStateTheme, ActionTheme> = (
  state = JSON.parse(localStorage.getItem('theme')),
  action,
) => {
  switch (action.type) {
    case ActionType.SET_THEME: return { ...state, theme: action.payload };
    default: return state;
  }
};

export default themeReducer;
