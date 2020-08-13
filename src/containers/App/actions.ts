import { ActionType } from './constants';
import { ActionCreator } from './models';

export const initApp: ActionCreator.InitApp = () => ({
  type: ActionType.INIT_APP,
});
