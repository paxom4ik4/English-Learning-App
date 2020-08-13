import { Reducer } from 'react';
import update from 'immutability-helper';
import { InitialStudyState, ActionStudy, InitialStateStudyMode } from './models';
import { ActionType } from './constants';

const initialStudyState: InitialStudyState = {
  trainAllWords: true,
  onlyNew: false,
  onlyRepeat: false,
  onlyDifficult: false,
};

const initialState: InitialStateStudyMode = {
  studyModes: initialStudyState,
};

const studyModesReducer: Reducer<InitialStateStudyMode, ActionStudy> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_STUDY_SETTINGS:
      return update(state, { studyModes: { $set: action.payload } });
    default: return state;
  }
};

export default studyModesReducer;
