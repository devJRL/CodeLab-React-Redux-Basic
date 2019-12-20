import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// [Store]
// ? Install : yarn add redux --save
import { createStore } from "react-redux";
import reducers from "./reducers";
// [Provider]
// ? Install : yarn add react-redux --save
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
