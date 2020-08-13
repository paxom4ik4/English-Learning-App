import { Reducer } from 'react';
import { ActionType } from './constants';
import { ActionCard, InitialStateCardsCollection } from './models';

const initialState: InitialStateCardsCollection = {
  cardsCollection: [],
};

const collectionReducer: Reducer<InitialStateCardsCollection, ActionCard> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_COLLECTION:
      return { ...state, cardsCollection: state.cardsCollection.concat([action.payload]) };
    case ActionType.REMOVE_COLLECTION:
      return { ...state, cardsCollection: [] };
    default: return state;
  }
};

export default collectionReducer;
