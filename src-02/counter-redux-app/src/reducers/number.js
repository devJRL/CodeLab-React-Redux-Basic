// [Action-Types]
import * as types from "../actions/ActionTypes";

// State 초기값 정의
const initialState = {
  number: 0
};

// [Reducer-sub]
// * Number Reducer
// 객체의 초기상태와 변화된 내용을 정의된 액션에 따라 반환하는 함수
const number = (state = initialState, action) => {
  // action 타입에 따른 state 값 변환 후 "반환"
  switch (action.type) {
    case types.INCREMENT:
      return {
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};
export default number;
