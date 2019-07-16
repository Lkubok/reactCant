import React from "react";
import { render } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store";

const rootNode = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootNode
);
