// import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "reflect-metadata"
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { createStore, compose, applyMiddleware } from "redux";
import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

