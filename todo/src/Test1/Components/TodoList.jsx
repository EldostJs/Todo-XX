import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {

    const { todos } = useSelector((state) => state.todo)

    const liBox = todos.map(x => <TodoItem key={x.id}{...x}/>)

    return <ul>{liBox}</ul>
}

export default TodoList