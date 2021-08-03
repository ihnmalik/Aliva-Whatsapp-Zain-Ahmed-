/*import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({});

const [darkMode, setMode] = useState(false)
export const themeCheck = () => {
  if(darkMode==false){
    setMode(false)
    return false
  }
  else{
    setMode(true)
    return true
  }
};
=================*/
import * as React from 'react'

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.dark);

export default ThemeContext


// export const ThemeProvider: React.FC = (props) => {
//   //   console.log("PROPS", props);
//   // const [state, dispatch] = useReducer()
// }
