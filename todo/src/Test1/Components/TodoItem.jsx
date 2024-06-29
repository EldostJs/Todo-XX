import { useDispatch, useSelector } from "react-redux"
import { delteTodo, editeTodo } from "../Redux/Actions"

export default function TodoItem({ todo, id }) {

    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(delteTodo(id))
    }

    function handleEdite() {
        const newTodo = prompt('Write New Todo')

        const todo = {
            id,
            todo: newTodo
        }
        dispatch(editeTodo(todo))
    }
    return (
        <li>
            <h1>{todo}</h1>
            <button onClick={handleEdite}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>

    )
}