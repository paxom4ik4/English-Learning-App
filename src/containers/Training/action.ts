import { ActionType } from './constants';

export const toggleError = () => ({
  type: ActionType.TOGGLE_ERROR,
});

export const openTraining = () => ({
  type: ActionType.OPEN_TRAINING,
});

export const closeTraining = () => ({
  type: ActionType.CLOSE_TRAINING,
});

export const showTrainingLoader = () => ({
  type: ActionType.SHOW_TRAIN_LOADER,
});

export const hideTrainingLoader = () => ({
  type: ActionType.HIDE_TRAIN_LOADER,
});
