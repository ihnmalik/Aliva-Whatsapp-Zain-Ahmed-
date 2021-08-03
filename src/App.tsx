import React, {useState, useContext} from "react";
import MainContainer from "./components/mainContainer";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import ThemeContext from './components/themeContext';
import { themes } from './components/themeContext';

// import ThemedButton from './components/themedButton'

// export const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };
// export const ThemeContext = React.createContext(themes.dark);


function App() {
  const [mix, setMix] = useState(themes.light)
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    if(mix===themes.dark){
      setMix(themes.light)
      // console.log('set dark')
    }
    else{
      setMix(themes.dark)
      // console.log('set dark 222')
    }
  }
  
  return (
    <div className="bg">
      <ThemeContext.Provider value={mix}>
        {/* {console.log("mix", mix)} */}
        <button style={{ background: mix.background, color: mix.foreground }} onClick={handleClick}>
          Click
        </button>
        <MainContainer />
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
