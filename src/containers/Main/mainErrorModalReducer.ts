import * as Models from 'models';
import { MainErrorModal } from './models';
import { ActionType } from './constants';

const mainErrorModalInitState = <MainErrorModal> {
  isOpen: false,
  title: '',
  content: '',
};

const MainErrorModalReducer: Models.Reducer<unknown> = (
  state: MainErrorModal = mainErrorModalInitState, { type, payload },
) => {
  switch (type) {
    case ActionType.OPEN_ERROR_MODAL:
      return {
        ...state, isOpen: true, title: payload.title, content: payload.content,
      };
    case ActionType.CLOSE_ERROR_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default MainErrorModalReducer;
