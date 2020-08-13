import { ACTIVE_WORD } from './constants';

export const activeWord = (num: number) => ({
  type: ACTIVE_WORD,
  payload: num,
});
