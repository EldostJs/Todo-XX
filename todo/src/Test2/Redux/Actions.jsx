const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDITE_TODO = 'EDITE_TODO'

function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: {
            todo
        }
    }
}

function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

function editeTodo(todo) {
    return {
        type: EDITE_TODO,
        payload: {
            todo
        }
    }
}

export { ADD_TODO, DELETE_TODO, EDITE_TODO, addTodo, deleteTodo, editeTodo }