import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";
import { HashRouter} from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials=true;

ReactDOM.render(
  // <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);
