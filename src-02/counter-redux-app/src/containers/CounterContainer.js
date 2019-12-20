// [Compoent] : Presentational Component
import Counter from "../components/Counter";
// [Actions] : Action Creator
import * as actions from "../actions";
// [Connect] : store(redux) <-connect-> components in container(react)
import { connect } from "react-redux";
// [Utils] : 랜덤 색상을 만드는 함수 가져오기
import { getRandomColor } from "../utils";

// store 안의 state 값을 props로 연결해줍니다.
const mapStateToProps = state => ({
  color: state.color,
  number: state.number
});

// [Dispatch]
// * mapDispatchToProps
// dispatch 객체를 받고, 액션 생성 함수로 생성된 액션을 dipatch() 함수에 입력한 뒤
// 변경된 값을 Props에 연결(매핑)하는 함수
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor(); // Util 호출 : 랜덤 색상 전환
    dispatch(actions.setColor(color)); // 색상 값을 Props로 전달
  }
});

// [Container]
// * CounterContainer
// Counter 컴포넌트가 가진 데이터 레이어(state)를 Store(redux)에 전달하기 위해서
// State/Dispatch를 props에 연결하는 컨테이너를 생성. 이 컨테이너를 통해 데이터를 store에 전달
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
// * mapStateToProps : store.getState() 결과 값인 state 객체를 받아서 컴포넌트의 props로 연결하는 역할

export default CounterContainer;
