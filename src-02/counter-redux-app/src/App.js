// ! rcc
import React, { Component } from "react";
// [Container] : Component(state, props/react) ~ Store(redux) 연결을 가능하게하는 dipatch가 내장된 컨테이너
import CounterContainer from "./containers/CounterContainer";

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <h4> Right-Click : Plus(+) </h4>
        <h4> Left-Click : Minus(-) </h4>
        <h4> Double-Click : Random color change </h4>
      </div>
    );
  }
}
export default App;
