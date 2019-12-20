// [Reducer-sub]
import numberReducer from "./number";
import colorReducer from "./color";

// [Reducer-root] : combineReducers
import { combineReducers } from "redux";

const reducers = combineReducers({
  numberData: numberReducer,
  colorData: colorReducer
});

export default reducers;

/*
  combineReducers를 통해서 store의 형태 생성
  {
    numberData: {
      number: 0
    },
    colorData: {
      color: 'black'
    }
  }
*/
