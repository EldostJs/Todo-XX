import { ADD3, DELETE3, EDIT3 } from '../Redux3/Actions';
import { combineReducers } from 'redux';

const initialState = {
    name: 'Counter',
    todos: [],
};

function todoReducer3(state = initialState, action) {
    switch (action.type) {
        case ADD3:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE3:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case EDIT3:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todo: todoReducer3,
});

export default rootReducer;
