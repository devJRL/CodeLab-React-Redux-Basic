/*
  action 객체를 만드는 액션 생성 함수들을 선언합니다. (action creators)
  * Arrow Expression : () => ({})
  * ES5   Expression : function() { return { } }
*/
import * as types from "./ActionTypes";

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});
