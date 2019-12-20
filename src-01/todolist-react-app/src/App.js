import React, { Component } from "react";
import TodoListTemplate from "./componets/TodoListTemplate";
import Form from "./componets/Form";
import TodoItemList from "./components/TodoItemList";

// 500개의 더미 리스트를 넣어서 성능 테스트
const initialTodos = new Array(500)
  .fill(0)
  .map((item, idx) => ({ id: idx, text: `일정 ${idx}`, checked: true }));

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    input: "",
    todos: initialTodos
    // todos: []
  };

  // 생성
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "", // input 초기화
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };
  // 수정
  handleChange = e => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  };
  // 입력 키가 Enter 이면 handleCreate 호출
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };
  // 체크박스 이벤트
  handleToggle = id => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 Item인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const copyTodos = [...todos]; // 배열을 복사
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    copyTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: copyTodos
    });
  };
  // 삭제
  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
