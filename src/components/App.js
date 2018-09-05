import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList/TodoList';

export default class App extends Component {

  state = {
    id: 1,
    input: '',
    todoList: [
      { id: 0, text: '리액트 공부하기', done: true },
      { id: 1, text: '컴포넌트 스타일링 해보기', done: false }
    ]
  }
  
  // TodoInput Component 관련 함수
  _handleChange = (e) => {
      const { value } = e.target;
      this.setState({
        input: value
      })
  }

  _handleInsert = () => {
    const { todoList, input, id } = this.state;
    let increaseId = id + 1

    const newTodo = {
      id: increaseId,
      text: input,
      done: false
    }
    
    this.setState({
      id: increaseId,
      todoList: [...todoList, newTodo],
      input: ''
    })
  }

  // TodoList 내부 TodoItem 관련 함수
  _handleToggle = (id) => {
    const { todoList } = this.state;
    const itemIdx = todoList.findIndex(item => item.id === id);
    
    const toggledItem = {
      ...todoList[itemIdx],
      done: !todoList[itemIdx].done
    }

    this.setState({
      todoList: [
        ...todoList.slice(0, itemIdx),
        toggledItem,
        ...todoList.slice(itemIdx+1, todoList.length)
      ]
    })
  }

  _handleRemove = (id) => {
    const { todoList } = this.state;
    const itemIdx = todoList.findIndex(item => item.id === id);

    this.setState({
      todoList: [
        ...todoList.slice(0, itemIdx),
        ...todoList.slice(itemIdx+1, todoList.length)
      ]
    })
  }

  render() {
    // this(Component) 에서 찾아서 매핑 해야된다. 상위를 보내야지 하위의 키를 찾아서 매핑함
    const { input, todoList } = this.state;
    const { _handleChange, _handleInsert, _handleToggle, _handleRemove } = this;
    return (
      <PageTemplate>
        <TodoInput onChange={_handleChange} onInsert={_handleInsert} value={input} />
        <TodoList items={todoList} onToggle={_handleToggle} onRemove={_handleRemove} />
      </PageTemplate>
    )
  }
}


/**
 * 개발을 할 때 상태관리는 주로 기능별로 상태가 필요한 컴포넌트들을 감싸는 상위 컴포넌트에서 하는것이 편하다.
 */
