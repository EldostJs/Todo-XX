import React from 'react'
import { deliteTodo4 , editeTodo4 } from '../Redux4/Actions4'
import { useDispatch } from 'react-redux'

export default function TodoItem4({ todo, id }) {
    const dispatch = useDispatch()

    function handleDelete4() {
        dispatch(deliteTodo4(id))
    }

    function handleEdite4() {
        const newTodo = prompt('new todo')
        if (newTodo) {
            const updatedTodo = {
                id,
                todo: newTodo,
            }
            dispatch(editeTodo4(updatedTodo))
        }
    }

    return (
        <li>
            <h1>{todo}</h1>
            <button onClick={handleDelete4}>Delete</button>
            <button onClick={handleEdite4}>Edite</button>
        </li>
    )
}
