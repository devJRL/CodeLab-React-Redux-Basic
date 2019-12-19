// ! rcc
import React, { Component } from "react";

class HelloCompoentLoop extends Component {
  state = {
    names: ["Angular", "React", "Vue", "Ember"]
  };

  // 입력 후 엔터누르면 추가하기
  addItem = e => {
    if (e.keyCode === 13) {
      this.setState({
        names: this.state.names.concat(e.target.value)
      });
    }
  };

  // 더블 클릭하면 삭제하기
  removeItem = index => {
    const names = this.state.names;
    this.setState({
      names: names.filter((item, i) => i !== index)
    });
  };

  render() {
    const { names } = this.state;
    const { addItem, removeItem } = this;

    // [04-Component-2-map] 요소에 대한 콜백함수를 반복수행
    // Virtual DOM에서 key 값에 해당하는 값이 바뀌었는지를 확인 후, 변화된 값만 동적으로 반환
    // 브라우저(client)에는 key 속성이 나타나지 않고 이 속성은 React에서 내부에서 사용후 제거
    const nameList = names.map((item, index) => (
      <li key={index} onDoubleClick={() => removeItem(index)}>
        {item}
      </li>
    ));

    return (
      <div>
        <br />
        <ul>{nameList}</ul>
        {/* 입력 후 엔터누르면 추가하기 : addItems(e) */}
        <input type="text" name="addListBox" onKeyDown={addItem} />
      </div>
    );
  }
}

export default HelloCompoentLoop;
