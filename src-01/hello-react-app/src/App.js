// # 자동완성 키워드 : https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets
// ! rcc
import React, { Component } from "react";
import HelloComponent from "./components/HelloComponent";
import HelloCompoentFunction from "./components/HelloCompoentFunction";
import HelloCompoentLoop from "./components/HelloCompoentLoop";

class App extends Component {
  render() {
    // [01-JSX-1] 부모(App.js)에서 자식(HelloComponent.js)를 내포하고, 자식 모듈에 name 키값을 던져줌
    return (
      // [02-Nested Element] 반드시 태그는 <div></div> 로 감싸주어야 함. => JSX 16.2 <React.Fragment></React.Fragment> 로 개선
      // [03-JSX-문법] 단일 태그를 포함한 모든 태그는 개방과 폐쇄를 모두 기입해야 문법 오류가 발생하지 않음
      <React.Fragment>
        <HelloComponent name="JRL" age={30} />
        <HelloCompoentFunction name="함수형 컴포넌트" age={20} />
        <HelloCompoentLoop />
      </React.Fragment>
    );
  }
}

export default App;
