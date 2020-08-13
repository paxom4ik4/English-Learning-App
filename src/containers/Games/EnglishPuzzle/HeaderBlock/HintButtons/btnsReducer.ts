import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateHintBtns } from './models';

const initialState: InitialStateHintBtns = {
  audioHintActive: true,
  translateHintActive: true,
  backgroundHintActive: false,
  speakerActive: false,
};

if (!localStorage.getItem('hintsState')) {
  localStorage.setItem('hintsState', JSON.stringify(initialState));
}

const btnsReducer: Reducer<InitialStateHintBtns, Action> = (
  state = JSON.parse(localStorage.getItem('hintsState')),
  action,
) => {
  switch (action.type) {
    case ActionType.AUDIO_ENABLE:
      return { ...state, audioHintActive: true };
    case ActionType.AUDIO_DISABLE:
      return { ...state, audioHintActive: false };
    case ActionType.TRANSLATE_ENABLE:
      return { ...state, translateHintActive: true };
    case ActionType.TRANSLATE_DISABLE:
      return { ...state, translateHintActive: false };
    case ActionType.BACKGROUND_ENABLE:
      return { ...state, backgroundHintActive: true };
    case ActionType.BACKGROUND_DISABLE:
      return { ...state, backgroundHintActive: false };
    case ActionType.SPEAKER_ENABLE:
      return { ...state, speakerActive: true };
    case ActionType.SPEAKER_DISABLE:
      return { ...state, speakerActive: false };
    case ActionType.SET_TO_USER_PREFERENCIES:
      return JSON.parse(localStorage.getItem('hintsState'));
    default: return state;
  }
};

export default btnsReducer;
