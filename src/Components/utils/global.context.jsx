import React, { createContext, useReducer, useMemo } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const setData = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };

  const contextValue = useMemo(() => {
    return { state, setTheme, setData };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};