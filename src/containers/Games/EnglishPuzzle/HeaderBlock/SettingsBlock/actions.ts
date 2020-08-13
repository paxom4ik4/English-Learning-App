import { Dispatch } from 'react';
import { ActionType } from './constants';
import { ActionWords, ActionGroupsPages, FetchedWordData } from './models';

export const getWords = (
  page: number, group: number, arr: Array<Array<FetchedWordData>>,
) => (
  dispatch: Dispatch<ActionWords>,
): void => {
  const chunkLength = 10;
  const sliceStart = (page * chunkLength) - chunkLength;
  const sliceEnd = page * chunkLength;
  dispatch({ type: ActionType.FETCH_WORDS, payload: arr[group].slice(sliceStart, sliceEnd) });
};

export const updatePage = (num: number): ActionGroupsPages => ({
  type: ActionType.UPDATE_PAGE,
  payload: num,
});

export const updateGrop = (num: number): ActionGroupsPages => ({
  type: ActionType.UPDATE_GROUP,
  payload: num,
});

