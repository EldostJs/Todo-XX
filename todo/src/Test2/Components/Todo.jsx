import React, { useState } from 'react'
import { ADD_TODO, DELETE_TODO } from '../Redux/Actions'
import getRandomId from '../Utils/randomId'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo)

    const [add, setAdd] = useState('')

    function handleAdd(e) {
        e.preventDefault()

        const todo = {
            todo: add,
            id: getRandomId(todos)
        }
        dispatch(ADD_TODO(todo))
        setAdd('')
    }
    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
            />
            <button disabled={!add}>Add</button>
        </form>
    )
}

export default Todo