import MainContainer from "./components/mainContainer";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Provider } from "react-redux";
import store from "./components/redux-saga/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
