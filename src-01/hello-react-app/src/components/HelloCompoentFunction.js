import React, { Component } from "react";

const HelloCompoentFunction = ({ name, age }) => {
  return (
    <div>
      <div>이것은 '{name}'를 사용한 결과 입니다.</div>
      <div>'{age}'을 입력 받았습니다.</div>
    </div>
  );
};

export default HelloCompoentFunction;
