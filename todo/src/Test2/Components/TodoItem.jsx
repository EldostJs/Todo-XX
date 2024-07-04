import React from 'react'
import { deleteTodo, editeTodo } from '../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function TodoItem({ todo, id }) {
    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteTodo(id))

    }

    function handleEdite() {
        const newTodo = prompt('write')

        const todo = {
            id,
            todo: newTodo
        }
        dispatch(editeTodo(todo))
    }
    return (
        <li>
            <h1>{todo}</h1>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdite}>Edite</button>
        </li>
    )
}