import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// [Store]
// ? Install : yarn add redux react-redux --save
import { createStore } from "react-redux";
import reducers from "./reducers";

ReactDOM.render(<App />, document.getElementById("root"));
