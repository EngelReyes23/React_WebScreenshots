import { useReducer } from 'react';
import { context as Context } from '../context';
import { isDarkMode, setDarkMode } from '../helpers/darkMode';
import { reducer } from '../reducer';
import { TYPES } from '../types/';

const { SET_DARK_MODE, SET_DATA, SET_ERROR, SET_LOADING } = TYPES;

const INITIAL_STATE = {
  data: {
    urlImage: '',
    urlDownload: '',
  },
  isError: false,
  darkMode: false,
  isLoading: false,
};

const init = () => {
  const darkMode = isDarkMode();
  setDarkMode(darkMode);
  return { ...INITIAL_STATE, darkMode };
};

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, init);

  const setDarkModeInStore = (isDarkMode) => {
    setDarkMode(isDarkMode);
    dispatch({ type: SET_DARK_MODE, payload: isDarkMode });
  };

  const setIsLoading = (isLoading) => {
    dispatch({ type: SET_LOADING, payload: isLoading });
  };

  const setIsError = (isError) => {
    dispatch({ type: SET_ERROR, payload: isError });
  };

  const setData = (data = {}) => {
    dispatch({ type: SET_DATA, payload: data });
  };

  return (
    <Context.Provider
      value={{
        // States values
        ...state,

        // Actions
        setData,
        setIsError,
        setIsLoading,
        setDarkModeInStore,
      }}
    >
      {children}
    </Context.Provider>
  );
};
