import { Card } from 'components/Games/EnglishPuzzle/models';
import { Action } from 'redux';
import { ActionType } from './constants';
import { ActionCard, ActionOffset } from './models';

export const updateCollection = (data: Card[]): ActionCard => ({
  type: ActionType.UPDATE_COLLECTION,
  payload: data,
});

export const removeCollection = (): ActionCard => ({
  type: ActionType.REMOVE_COLLECTION,
});

export const updateOffsetX = (data: number[]): ActionOffset => ({
  type: ActionType.UPDATE_OFFSET,
  payload: data,
});

export const removeOffsetX = (): ActionOffset => ({
  type: ActionType.REMOVE_OFFSET,
});

export const setToSolved = (): Action => ({
  type: ActionType.SOLVED,
});

export const setToNewGame = (): Action => ({
  type: ActionType.NEW_GAME,
});
