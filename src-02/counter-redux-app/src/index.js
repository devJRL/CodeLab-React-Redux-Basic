import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// [Store]
// ? Install : yarn add redux --save
import { createStore } from "redux";
import reducers from "./reducers";
// [Provider] : React에서 Redux를 사용하기 위한 react-redux 내장 컴포넌트
// ? Install : yarn add react-redux --save
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
