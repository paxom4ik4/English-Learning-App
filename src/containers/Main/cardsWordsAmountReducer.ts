import { Reducer } from 'react';
import { InitialAmountState, InitialStateAmountCW, ActionAmount } from './models';
import { ActionType } from './constants';

const initialAmountState: InitialAmountState = {
  words: 20,
  cards: 100,
};

if (!localStorage.getItem('savedAmount')) {
  localStorage.setItem('savedAmount', JSON.stringify(initialAmountState));
}

const initialState: InitialStateAmountCW = {
  amount: JSON.parse(localStorage.getItem('savedAmount')),
};

const cardsWordsAmountReducer: Reducer<InitialStateAmountCW, ActionAmount> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_AMOUNT: return {
      ...state, amount: action.payload,
    };
    default: return state;
  }
};

export default cardsWordsAmountReducer;
