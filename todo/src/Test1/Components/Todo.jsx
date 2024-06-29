import React, { useState } from 'react'
import { addTodo, delteTodo } from '../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import getRandomId from '../Utils/randomId'


function Todo() {

    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todo)

    const [add, setAdd] = useState('')

    function handleAdd(e) {
        e.preventDefault()

        const todo = {
            todo: add,
            id: getRandomId(todos)
        }
        console.log(todo);
        dispatch(addTodo(todo))
        setAdd('')
    }

    return (
        <form onSubmit={handleAdd}>
            <h1>TODO</h1>
            <input
                type="text"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
            />
            <button disabled={!add}>ADD</button>
        </form>
    )
}

export default Todo