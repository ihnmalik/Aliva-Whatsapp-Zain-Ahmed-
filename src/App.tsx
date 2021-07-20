import MainContainer from "./components/mainContainer";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { ThemeContext } from "./ThemeContext";

function App() {
  return (
    <div className="bg">
      <MainContainer />
    </div>
  );
}

export default App;
