import React from 'react';
import { deleteTodo3, editTodo3 } from '../Redux3/Actions';
import { useDispatch } from 'react-redux';

export default function TodoItem3({ todo, id }) {
    const dispatch = useDispatch();

    function handleDelete3() {
        dispatch(deleteTodo3(id));
    }

    function handleEdit3() {
        const newTodo = prompt('Edit todo:', todo);
        if (newTodo) {
            const updatedTodo = {
                id,
                todo: newTodo,
            };
            dispatch(editTodo3(updatedTodo));
        }
    }

    return (
        <li>
            <h1>{todo}</h1>
            <button onClick={handleDelete3}>del</button>
            <button onClick={handleEdit3}>edi</button>
        </li>
    );
}
    