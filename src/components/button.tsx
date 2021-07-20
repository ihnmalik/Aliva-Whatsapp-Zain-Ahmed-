import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const SwitchButton: React.FC = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };
  console.log("TESTTT", theme);
  console.log("TESTTT2", theme.dispatch);

  return (
    <button
      style={{ fontSize: 12 }}
      className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
      onClick={onClick}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
export default SwitchButton;
