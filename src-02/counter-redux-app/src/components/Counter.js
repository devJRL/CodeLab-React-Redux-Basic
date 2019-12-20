import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

// [Presentational Component] 카운터 구현
const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      style={{ backgroundColor: color }}
      onClick={onIncrement}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
      onMouseOver={onSetColor}
    >
      {number}
    </div>
  );
};

// 기본 props 타입과 값 설정
Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};
Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => console.warn("onIncrement not defined"),
  onDecrement: () => console.warn("onDecrement not defined"),
  onSetColor: () => console.warn("onSetColor not defined")
};

export default Counter;
