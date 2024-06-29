import { ADD, DELETE, EDITE } from './Actions'
import { combineReducers } from 'redux'

const initialState = {
    name: 'Counter',
    todos: [],
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            };
        case DELETE:
            const todosAfterDelete = state.todos.filter(
                x => x.id !== action.payload.id
            );
            return {
                ...state,
                todos: todosAfterDelete,
            }
        case EDITE:
            const todosAfterEdite = state.todos.map((x) =>
                x.id == action.payload.todo.id ? action.payload.todo : x 
            );
            return {
                ...state,
                todos: todosAfterEdite,
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;
