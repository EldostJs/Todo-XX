import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem4 from './TodoItem4'

function TodoList4() {
    const { todos } = useSelector((state) => state.todo)
    console.log(todos);
    const liss = todos.map(x => <TodoItem4 key={x.id} {...x} />)
    return <ul>{liss}</ul>
}

export default TodoList4
