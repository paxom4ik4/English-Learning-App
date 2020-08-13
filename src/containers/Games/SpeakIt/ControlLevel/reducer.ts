import { Action } from 'models';

interface InitialState {
  group: number;
}

const initialState = {
  group: 1,
};

const groupReducer = (state = initialState, action : Action): InitialState => {
  switch (action.type) {
    case 'UPDATE_GROUP':
      return { ...state, group: action.payload };
    default: return state;
  }
};

export default groupReducer;
