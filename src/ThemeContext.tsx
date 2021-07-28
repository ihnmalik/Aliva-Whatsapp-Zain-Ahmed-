import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext<any>({});

const initialState = { darkMode: false };
const themeReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};
const ThemeProvider: React.FC = (props) => {
  //   console.log("PROPS", props);
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
