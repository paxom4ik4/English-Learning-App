import { UPDATE_GROUP } from './constants';

export const updateGroup = (num: number) => ({
  type: UPDATE_GROUP,
  payload: num,
});
