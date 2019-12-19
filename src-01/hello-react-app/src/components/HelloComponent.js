// ! rcc : class component skeleton
import React, { Component } from "react";
import PropTypes from "prop-types";
class HelloComponent extends Component {
  // [03-Component-3] 상태변수 선언
  state = {
    num: 0,
    message: ""
  };

  // [03-Component-4] 상태변수의 값을 변경하는 setState와 함께 수행할 함수 선언
  minusNumber = () => {
    this.setState({
      // render함수 브라켓 내부에 const를 선언했으므로 this.state로 접근이 필요
      num: this.state.num - 1
    });
  };

  // [03-Component-4] 이벤트를 감지하는 onChange 속성에 호출하는 함수 선언
  // Handler함수를 만들때, ArrowFunction을 쓰는 것이 좋다.
  // 컴파일을 담당하는 Babel 라이브러리의 과정으로 나오는 파일에 향상된 성능 부여
  callWhenChange = e => {
    // console.log(e.target.value);
    this.setState({ message: e.target.value });
  };

  render() {
    // [01-JSX-2-Assign] 부모 모듈(App.js)에서 자신(this = HelloComponent.js)으로 넘어온(props) name 키값을 읽어냄
    const { name, age } = this.props;
    // [03-Component-3] 상태변수 축약을 위한 고정참조변수 할당
    const { num, message } = this.state;
    // [03-Component-4] 함수를 참조할 고정참조변수 할당
    const { minusNumber, callWhenChange } = this;

    return (
      // [02-Nested Element] 반드시 태그는 <div></div> 로 감싸주어야 함. => JSX 16.2 <React.Fragment></React.Fragment> 로 개선
      <React.Fragment>
        <h3>Hello, {name}!</h3>
        <h3>{age}</h3>
        <div>
          num: {num}
          <button onClick={() => this.setState({ num: num + 1 })}> + </button>
          <button onClick={minusNumber}>-</button>
        </div>
        <div>
          <br />
          <input type="text" onChange={callWhenChange} />
          <br /> 입력감지후 저장한 값 : {message}
        </div>
        <br />
      </React.Fragment>
    );
  }
}

// ! rdp : empty defaultProps declaration
// [03-Component-1] props값이 들어오지 않았을 때 초기화 값
HelloComponent.defaultProps = {
  name: "기본값",
  age: 0
};

// ! rpt : empty propTypes declaration
// [03-Component-2] props에 타입을 지정 - 전달받은 프롭스의 키에 해당하는 값의 타입이 맞지 않으면 error발생
HelloComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default HelloComponent;
