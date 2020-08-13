import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { Dispatch } from 'react';
import { showLoader, hideLoader } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/actions';
import { Action } from 'redux';
import { showSettingsLoader, hideSettingsLoader } from 'containers/Main/actions';
import { createUserWord } from 'constants/athorization-constants';
import { showFormLoader, hideFormLoader } from 'containers/Authorisation/actions';
import { ActionType } from './constants';
import { ActionUserWords, ActionCreator } from './models';

const filter = `${encodeURIComponent('{"$or":[{"userWord.optional.binded":true},{"userWord.optional.played":true}]}')}`;

export const getUserWords = async (dispatch: Dispatch<ActionUserWords | Action>) => {
  const { userId, token } = localStorage;
  try {
    dispatch(showLoader());
    dispatch(showFormLoader());
    const resp = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=${filter}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const words = await resp.json();
    if (words[0].paginatedResults.length === 0) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        [0, 1, 2].forEach((page) => getStartWords(dispatch, page, 0));
      } catch (e) {
        window.console.log(e);
      }
    } else {
      dispatch(hideLoader());
      dispatch(hideFormLoader());
      dispatch({ type: ActionType.UPDATE_USER_WORDS, payload: words[0].paginatedResults });
    }
  } catch (err) {
    dispatch(hideLoader());
    dispatch(hideFormLoader());
    window.console.log(err);
  }
};

export const getStartWords = async (
  dispatch: Dispatch<ActionUserWords | Action>,
  page: number,
  level: number,
) => {
  try {
    const resp = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`);
    const words = await resp.json() as FetchedWordData[];
    try {
      words.forEach((word: FetchedWordData) => {
        word.userWord = {
          optional: {
            binded: true,
          },
        };
        createUserWord(word);
      });
    } catch (err) {
      window.console.log(err);
    }
    dispatch({ type: ActionType.ADD_NEW_WORDS, payload: words });
    dispatch(hideLoader());
    dispatch(hideFormLoader());
  } catch (err) {
    dispatch(hideFormLoader());
    window.console.log(err);
  }
};

export const addNewUserWords = async (
  dispatch: Dispatch<ActionUserWords | Action>,
  group = 0,
  page = 0,
) => {
  try {
    dispatch(showSettingsLoader());
    const resp = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
    const words = await resp.json() as FetchedWordData[];
    dispatch({ type: ActionType.ADD_NEW_WORDS, payload: words });
    try {
      words.forEach((word: FetchedWordData) => {
        word.userWord = {
          optional: {
            binded: true,
          },
        };
        createUserWord(word);
      });
    } catch (err) {
      window.console.log(err);
    }
    dispatch(hideSettingsLoader());
  } catch (err) {
    dispatch(hideSettingsLoader());
    window.console.log(err);
  }
};

export const updateUserWords = (words: FetchedWordData[]): ActionUserWords => ({
  type: ActionType.UPDATE_USER_WORDS,
  payload: words,
});

export const toggleAnswerChecked: ActionCreator.ToggleAnswerChecked = () => ({
  type: ActionType.TOGGLE_ANSWER_CHECKED,
});

export const toggleAnswerCorrect: ActionCreator.ToggleAnswerCorrect = () => ({
  type: ActionType.TOGGLE_ANSWER_CORRECT,
});

export const progressTraining: ActionCreator.ProgressTraining = () => ({
  type: ActionType.PROGRESS_TRAINING,
});

export const setInputWord: ActionCreator.SetInputWord = (word) => ({
  type: ActionType.SET_INPUT_WORD,
  payload: word,
});

export const toggleMoveToNext: ActionCreator.ToggleMoveToNext = () => ({
  type: ActionType.TOGGLE_MOVE_TO_NEXT,
});

export const resetTraining: ActionCreator.ResetTraining = () => ({
  type: ActionType.RESET_TRAINING,
});

export const toggleTrainingStatistic: ActionCreator.ToggleTrainingStatistic = (isOpen) => ({
  type: ActionType.TOGGLE_TRAINING_STATISTIC,
  payload: isOpen,
});

export const addToFailedTraining: ActionCreator.AddToFailedTraining = (failedWord) => ({
  type: ActionType.ADD_TO_FAILED_TRAINING,
  payload: failedWord,
});

export const addToSuccessTraining: ActionCreator.AddToSuccessTraining = (successWord) => ({
  type: ActionType.ADD_TO_SUCCESS_TRAINING,
  payload: successWord,
});

export const addRowOfSuccess: ActionCreator.AddRowOfSuccess = (number) => ({
  type: ActionType.ADD_ROW_OF_SUCCESS,
  payload: number,
});

export const resetTrainingStatistic: ActionCreator.ResetTrainingStatistic = () => ({
  type: ActionType.RESET_TRAINING_STATISTIC,
});

export const updateNewCardProgress: ActionCreator.UpdateNewCardProgress = () => ({
  type: ActionType.UPDATE_CARD_PROGRESS,
});

export const updateGameCardProgress: ActionCreator.UpdateGameCardsProgress = () => ({
  type: ActionType.GAME_CARD_PROGRESS,
});
