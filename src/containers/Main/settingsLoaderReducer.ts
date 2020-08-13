const initialState = {
  setLoading: false,
};

const settingsLoaderReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SHOW_SETTINGS_LOADER':
      return { ...state, setLoading: true };
    case 'HIDE_SETTINGS_LOADER':
      return { ...state, setLoading: false };
    default: return state;
  }
};

export default settingsLoaderReducer;
