import { ActionType } from './constants';

export const startGame = () => ({
  type: ActionType.START_GAME,
  payload: true,
});

export const stopGame = () => ({
  type: ActionType.STOP_GAME,
  payload: false,
});

export const nextCard = () => ({
  type: ActionType.NEXT,
  payload: 0,
});

export const selectedWord = (value: string) => ({
  type: ActionType.SELECTED_GAME_WORD,
  payload: value,
});

export const resetGame = () => ({
  type: ActionType.RESET,
  payload: null,
});

export const resultGame = (value: boolean) => ({
  type: ActionType.RESULT_GAME,
  payload: value,
});
