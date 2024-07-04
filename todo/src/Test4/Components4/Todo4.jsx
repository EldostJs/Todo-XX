import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo4 } from '../Redux4/Actions4'
import getRandomId4 from '../../Test4/Utils4/randomID4'

function Todo4() {
    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todo)

    const [add4, setAdd4] = useState('')

    function handleAdd(e) {
        e.preventDefault()
        const todo = {
            todo: add4,
            id: getRandomId4(todos)
        }
        dispatch(addTodo4(todo))
        setAdd4('')
    }

    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={add4}
                onChange={(e) => setAdd4(e.target.value)}
            />
            <button disabled={!add4}>ADD</button>
        </form>
    )
}

export default Todo4
