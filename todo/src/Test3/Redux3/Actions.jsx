const ADD3 = 'ADD3';
const DELETE3 = 'DELETE3';
const EDIT3 = 'EDIT3';

function addTodo3(todo) {
    return {
        type: ADD3,
        payload: todo,
    };
}

function deleteTodo3(id) {
    return {
        type: DELETE3,
        payload: id,
    };
}

function editTodo3(todo) {
    return {
        type: EDIT3,
        payload: todo,
    };
}

export { ADD3, DELETE3, EDIT3, addTodo3, editTodo3, deleteTodo3 };
