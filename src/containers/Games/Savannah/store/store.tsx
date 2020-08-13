const initialState = {
  failedWords: [],
  trueWords: [],
};

export const addFailedWords = (state = initialState, action) => {
  if (action.type === 'ADD_FAILED_WORD') {
    return { ...state, failedWords: state.failedWords.concat(action.payload) };
  }
  return state;
};

export const addTrueWords = (state = initialState, action) => {
  if (action.type === 'ADD_TRUE_WORD') {
    return { ...state, trueWords: state.trueWords.concat(action.payload) };
  }
  return state;
};

export const modeReducer = (state = '', action) => {
  if (action.type === 'SETGAMEMODE' || action.type === 'SETLOADINGMODE' || action.type === 'SETENDMODE') {
    state = action.type;
    return state;
  }
  return state;
};

export const modalSavannahReducer = (state = false, action) => {
  if (action.type === 'OPENMODALWINDOW') {
    state = true;
    return state;
  }
  if (action.type === 'CLOSEMODALWINDOW') {
    state = false;
    return state;
  }
  return state;
};

export const buttonAccess = (state = true, action) => {
  if (action.type === 'TOGGLEBUTTONACCESS') {
    return !state;
  }
  return state;
};

export const fallingWord = (state = '', action) => {
  // eslint-disable-next-line no-empty
  if (action.type === 'SETFALLINGWORD') {

  }
};

export const fallingWordToggle = (state = false, action) => {
  if (action.type === 'TOGGLEFALLINGWORDACTIVE') {
    return !state;
  }
  return state;
};

export const showAnswerToggle = (state = false, action) => {
  if (action.type === 'SHOWANSWER') {
    return !state;
  }
  return state;
};

export const showWordsToggle = (state = false, action) => {
  if (action.type === 'SHOWWORDS') {
    return !state;
  }
  return state;
};

export const setFallingWord = (state = null, action) => {
  if (action.type === 'SET_FALLING_WORD') {
    return action.payload;
  }
  return state;
};
