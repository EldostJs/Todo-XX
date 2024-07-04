import { ADD_TODO, DELETE_TODO, EDITE_TODO } from "../../Test2/Redux/Actions";
import { combineReducers } from 'redux'


const initialState = {
    name: 'Counter',
    todos: []
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            };
        case DELETE_TODO:
            const todosAfterDelete = state.todos.filter(
                x => x.id !== action.payload.id
            );
            return {
                ...state,
                todos: todosAfterDelete
            };
        case EDITDO: EDITE_TODO
            const todosAfterEdit = state.todos.map((x) =>
                x.id === action.payload.id ? action.payload.todo : todo
            );
            return {
                ...state,
                todos: todosAfterEdit
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer