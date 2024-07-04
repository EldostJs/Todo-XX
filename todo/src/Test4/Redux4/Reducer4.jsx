import { ADD4, EDITE4, DELETE4 } from "./Actions4"
import { combineReducers } from 'redux'

const initialState = {
    name: 'Counter',
    todos: []
}

function todoReducer4(state = initialState, action) {
    switch (action.type) {
        case ADD4:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE4:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case EDITE4:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? action.payload : todo
                )
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todo: todoReducer4
})

export default rootReducer
