// ! rcc
import React, { Component } from "react";

class HelloComponent extends Component {
  render() {
    // [01-JSX-2] 부모 모듈(App.js)에서 자신(this = HelloComponent.js)으로 넘어온(props) name 키값을 읽어냄
    return (
      // [02-Nested Element] 반드시 태그는 <div></div> 로 감싸주어야 함. => JSX 16.2 <React.Fragment></React.Fragment> 로 개선
      <React.Fragment>
        <h3>Hello, {this.props.name}</h3>
      </React.Fragment>
    );
  }
}

export default HelloComponent;
