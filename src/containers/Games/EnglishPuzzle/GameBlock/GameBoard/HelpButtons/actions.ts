import { Action } from 'redux';
import { ActionType } from './constants';

export const enableDontKnowBtn = (): Action => ({
  type: ActionType.ENABLE_DONT_KNOW_BTN,
});

export const disableDontKnowBtn = (): Action => ({
  type: ActionType.DISABLE_DONT_KNOW_BTN,
});

export const enableCheckBtn = (): Action => ({
  type: ActionType.ENABLE_CHECK_BTN,
});

export const disableCheckBtn = (): Action => ({
  type: ActionType.DISABLE_CHECK_BTN,
});

export const enableContinueBtn = (): Action => ({
  type: ActionType.ENABLE_CONTINUE_BTN,
});

export const disableContinueBtn = (): Action => ({
  type: ActionType.DISABLE_CONTINUE_BTN,
});

export const enableResultsBtn = (): Action => ({
  type: ActionType.ENABLE_RESULTS_BTN,
});

export const disableResultsBtn = (): Action => ({
  type: ActionType.DISABLE_RESULTS_BTN,
});

export const enableStatisticBtn = (): Action => ({
  type: ActionType.ENABLE_STATISTIC_BTN,
});

export const disableStatisticBtn = (): Action => ({
  type: ActionType.DISABLE_STATISTIC_BTN,
});
