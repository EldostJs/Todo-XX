const ADD4 = 'ADD4'
const DELETE4 = 'DELETE4'
const EDITE4 = 'EDITE4'

function addTodo4(todo) {
    return {
        type: ADD4,
        payload: todo
    }
}

function deliteTodo4(id) {
    return {
        type: DELETE4,
        payload: id
    }
}

function editeTodo4(todo) {
    return {
        type: EDITE4,
        payload: todo
    }
}

export { ADD4, DELETE4, EDITE4, addTodo4, deliteTodo4, editeTodo4 }
