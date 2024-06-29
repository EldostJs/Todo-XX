import Todo from "../Components/Todo"

const ADD = 'ADD'
const DELETE = "DELETE"
const EDITE = 'EDITE'

function addTodo(todo) {
    return {
        type: ADD,
        payload: {
            todo,
        }
    }
}

function delteTodo(id) {
    return {
        type: DELETE,
        payload: {
            id,
        }
    }
}

function editeTodo(todo) {
    return {
        type: EDITE,
        payload: {
            todo,
        }
    }
    
}

export { ADD, DELETE, EDITE, addTodo, delteTodo, editeTodo }
