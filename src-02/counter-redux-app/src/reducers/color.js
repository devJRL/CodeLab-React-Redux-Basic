// [Action-Types]
import * as types from "../actions/ActionTypes";

// State 초기값 정의
const initialState = {
  color: "black"
};

// [Reducer-sub]
// * Color Reducer
// 객체의 초기상태와 변화된 내용을 정의된 액션에 따라 반환하는 함수
const color = (state = initialState, action) => {
  // action 타입에 따른 state 값 변환 후 "반환"
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      };
    default:
      return state;
  }
};

export default color;
