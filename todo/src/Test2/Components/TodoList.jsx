import React from 'react'
import TodoItem from '../../Test2/Components/TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {

    const { todos } = useSelector((state) => state.todo)

    const liBox = todos.map(x=> <TodoItem key={x.id}{...x}/>)
    return (
        <ul>{liBox}</ul>
  )
}

export default TodoList