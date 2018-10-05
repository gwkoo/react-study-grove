import React, { Component, Fragment } from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component {

    // state의 변경 또는 부모컴포넌트로 부터 새로운 props를 전달 받았을때 호출 된다.
    // default는 true로 해당 내용을 통해서 컴포넌트의 re-render 여부를 결정할 수 있다.
    shouldComponentUpdate(nextProps) {
        return this.props.items !== nextProps.items;
    }

    render() {
        const { items, onToggle, onRemove } = this.props;

        const todoList = items.map(item => (
            <TodoItem key={item.id} done={item.done} onToggle={() => onToggle(item.id)} onRemove={() => onRemove(item.id)}>{item.text}</TodoItem>
        ));
        return (
            <Fragment>
                {todoList}
            </Fragment>
        );
    }
}