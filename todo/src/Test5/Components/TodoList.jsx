import React from 'react'

function TodoList({ todos, removeTodo }) {

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}
                    <button
                        onClick={() => removeTodo(index)}
                    >Delite</button>
                </li>
            ))}
        </ul>

    )
}

export default TodoList