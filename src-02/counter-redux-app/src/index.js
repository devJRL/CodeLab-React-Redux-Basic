import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// [Store] : Redux에서 관리하는 중앙 state 저장소
// ? Install : yarn add redux --save
import { createStore } from "redux";
// [Reducer] : store에 보관된 state를 관리(수정)하는 함수
import reducers from "./reducers";
// [Provider] : React에서 Redux를 사용하기 위한 react-redux 내장 컴포넌트
// ? Install : yarn add react-redux --save
import { Provider } from "react-redux";

// Store with Reducer
const store = createStore(reducers);

// Provider(react-redux) for Store(redux)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
