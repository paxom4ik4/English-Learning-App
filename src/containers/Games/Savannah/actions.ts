const setGameMode = (dispatch) => {
  dispatch({
    type: 'SETGAMEMODE',
  });
};

const setLoadingMode = (dispatch) => {
  dispatch({
    type: 'SETLOADINGMODE',
  });
};

const openModalWindow = (dispatch) => {
  dispatch({
    type: 'OPENMODALWINDOW',
  });
};

const closeModalWindow = (dispatch) => {
  dispatch({
    type: 'CLOSEMODALWINDOW',
  });
};

const toggleButtonAccess = () => ({
  type: 'TOGGLEBUTTONACCESS',
});

const toggleFallingWordActive = () => ({
  type: 'TOGGLEFALLINGWORDACTIVE',
});

const toggleShowAnswer = () => ({
  type: 'SHOWANSWER',
});

const setEndMode = () => ({
  type: 'SETENDMODE',
});

const addFailedWord = (word) => ({
  type: 'ADD_FAILED_WORD',
  payload: word,
});

const addTrueWord = (word) => ({
  type: 'ADD_TRUE_WORD',
  payload: word,
});

const setFallingWordAction = (word) => ({
  type: 'SET_FALLING_WORD',
  payload: word,
});

const showWords = (dispatch) => {
  dispatch({
    type: 'SHOWWORDS',
  });
};

/* const setFallingWord = (word) => {
  console.log('INSIDE_ACTION', word)
  return ({
    type: 'SETFALLINGWORD',
    payload: word,
  })
}; */

export {
  setGameMode,
  setLoadingMode,
  openModalWindow,
  closeModalWindow,
  toggleButtonAccess,
  toggleFallingWordActive,
  toggleShowAnswer,
  setEndMode,
  addFailedWord,
  showWords,
  setFallingWordAction,
  addTrueWord,
};
