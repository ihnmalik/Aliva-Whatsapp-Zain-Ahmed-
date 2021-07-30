import React, { createContext, useReducer } from "react";

interface Type {
  darkMode: boolean;
}
interface actionType {
  type: string;
}
export const ThemeContext = createContext<any>({});

const initialState = { darkMode: false };
const themeReducer = (state: Type = initialState, action: actionType) => {
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
