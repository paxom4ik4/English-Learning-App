import { Action } from 'redux';
import { ActionType } from './constants';

export const audioEnabled = (): Action => ({
  type: ActionType.AUDIO_ENABLE,
});

export const audioDisabled = (): Action => ({
  type: ActionType.AUDIO_DISABLE,
});

export const translateEnable = (): Action => ({
  type: ActionType.TRANSLATE_ENABLE,
});

export const translateDisable = (): Action => ({
  type: ActionType.TRANSLATE_DISABLE,
});

export const backgroundEnable = (): Action => ({
  type: ActionType.BACKGROUND_ENABLE,
});

export const backgroundDisable = (): Action => ({
  type: ActionType.BACKGROUND_DISABLE,
});

export const speakerEnable = (): Action => ({
  type: ActionType.SPEAKER_ENABLE,
});

export const speakerDisable = (): Action => ({
  type: ActionType.SPEAKER_DISABLE,
});

export const setToUserPreferencies = (): Action => ({
  type: ActionType.SET_TO_USER_PREFERENCIES,
});
