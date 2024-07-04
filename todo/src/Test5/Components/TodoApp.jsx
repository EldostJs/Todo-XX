import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function TodoApp() {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div>
            <h1>Todo</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoApp