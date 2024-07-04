import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem3 from './TodoItem3';

function TodoList3() {
    const { todos } = useSelector((state) => state.todo);
    const libox = todos.map(x => <TodoItem3 key={x.id} {...x} />);
    return <ul>{libox}</ul>;
}

export default TodoList3;
