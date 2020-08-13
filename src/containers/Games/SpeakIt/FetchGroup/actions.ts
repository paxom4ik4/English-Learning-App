import { ActionType } from './constants';

export const fetchWords = (group: number) => async (dispatch: any) => {
  const maxPages = 30;
  const page = Math.floor(Math.random() * maxPages);
  const response = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group - 1}`);
  const json = await response.json();

  dispatch({
    type: ActionType.FETCH_WORDS,
    payload: json.slice(0, 10).map((el) => ({ ...el, win: false, mistake: false })),
  });
  dispatch({
    type: ActionType.INIT_WORD_STATISTICS,
    payload: json.slice(0, 10).map((el) => ({ ...el, win: false, mistake: false })),
  });
};

export const resetStatistics = () => ({
  type: ActionType.RESET_STATISTICS,
});

export const translateWord = (translate: string) => (dispatch: any) => {
  dispatch({ type: ActionType.TRANSLATE_WORD, payload: translate });
};

export const backgroundWord = (data: string) => (dispatch: any) => {
  const urlImg = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${data}`;
  dispatch({ type: ActionType.BACKGROUND_WORD, payload: urlImg });
};

export const win = (gameWord: string) => ({
  type: ActionType.WIN,
  payload: gameWord,
});

export const mistake = (gameWord: string) => ({
  type: ActionType.MISTAKE,
  payload: gameWord,
});

export const succesWord = () => ({
  type: ActionType.SUCCES_WORD,
});

export const failedWord = () => ({
  type: ActionType.FAILED_WORD,
});
