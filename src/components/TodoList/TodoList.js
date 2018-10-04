import React, { Component, Fragment } from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component {
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