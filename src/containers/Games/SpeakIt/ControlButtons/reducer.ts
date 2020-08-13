import { ActionType } from './constants';

export interface InitialState {
  startGame: boolean;
  pagination: number;
  gameWord: string;
  result: boolean;
}

const initialState = {
  startGame: false,
  pagination: 0,
  gameWord: null,
  result: false,
};

const startGameReducer = (state = initialState, action): InitialState => {
  switch (action.type) {
    case ActionType.START_GAME:
      return { ...state, startGame: action.payload };
    case ActionType.STOP_GAME:
      return { ...state, startGame: action.payload };
    case ActionType.NEXT: {
      return { ...state, pagination: state.pagination + 1 };
    }
    case ActionType.RESET:
      return {
        ...state, pagination: 0, gameWord: null, startGame: false,
      };
    case ActionType.SELECTED_GAME_WORD:
      return { ...state, gameWord: action.payload };
    case ActionType.RESULT_GAME:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

export default startGameReducer;
