import { Action } from 'redux';
import { Reducer } from 'react';
import { ActionType } from './constants';
import { InitialStateHelpBtns } from './models';

const initialState: InitialStateHelpBtns = {
  dontKnowBtn: true,
  checkBtn: false,
  continueBtn: false,
  resultsBtn: false,
  statisticBtn: false,
};

const helpBtnsReducer: Reducer<InitialStateHelpBtns, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ENABLE_DONT_KNOW_BTN: return {
      ...state,
      dontKnowBtn: true,
      continueBtn: false,
      checkBtn: false,
      resultsBtn: false,
      statisticBtn: false,
    };
    case ActionType.DISABLE_DONT_KNOW_BTN: return {
      ...state,
      dontKnowBtn: false,
    };
    case ActionType.ENABLE_CHECK_BTN: return {
      ...state,
      dontKnowBtn: false,
      checkBtn: true,
    };
    case ActionType.DISABLE_CHECK_BTN: return {
      ...state,
      dontKnowBtn: true,
      checkBtn: false,
    };
    case ActionType.ENABLE_CONTINUE_BTN: return {
      ...state,
      dontKnowBtn: false,
      checkBtn: false,
      continueBtn: true,
    };
    case ActionType.DISABLE_CONTINUE_BTN: return {
      ...state,
      dontKnowBtn: true,
      statisticBtn: false,
    };
    case ActionType.ENABLE_RESULTS_BTN: return {
      ...state,
      dontKnowBtn: false,
      continueBtn: true,
      resultsBtn: true,
    };
    case ActionType.DISABLE_RESULTS_BTN: return {
      ...state,
      resultsBtn: false,
    };
    case ActionType.ENABLE_STATISTIC_BTN: return {
      ...state,
      statisticBtn: true,
      resultsBtn: false,
    };
    case ActionType.DISABLE_STATISTIC_BTN: return {
      ...state,
      statisticBtn: false,
    };
    default: return state;
  }
};

export default helpBtnsReducer;
