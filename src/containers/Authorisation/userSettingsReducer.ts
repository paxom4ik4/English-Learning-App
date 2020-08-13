import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateSettings, ActionUserSettings } from './models';

const initialState: InitialStateSettings = {
  wordsPerDay: 20,
  optional: {
    level: 0,
    page: 0,
    cardsPerDay: 60,
    showTranscription: true,
    showImage: true,
    example: true,
    wordMeaning: true,
    autoPronounce: true,
    showTextTranslate: true,
    translate: true,
    showAnswerBtn: true,
    deleteWordBtn: true,
    difficultWordBtn: true,
    repeatBtn: true,
    firstVisit: true,
  },
};

const userLevelPageReducer: Reducer<InitialStateSettings, ActionUserSettings> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_WORDS_AMOUNT:
      return { ...state, wordsPerDay: action.amount };
    case ActionType.UPDATE_USER_SETTINGS:
      return { ...state, optional: action.payload };
    default: return state;
  }
};

export default userLevelPageReducer;
