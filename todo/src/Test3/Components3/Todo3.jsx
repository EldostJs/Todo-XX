import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo3 } from '../Redux3/Actions';
import getRandomId3 from '../Utils3/randomId3';

function Todo3() {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todo);

    const [add3, setAdd3] = useState('');

    function handleAdd(e) {
        e.preventDefault();
        const todo = {
            todo: add3,
            id: getRandomId3(todos),
        };
        dispatch(addTodo3(todo));
        setAdd3('');
    }

    return (
        <form 
        onSubmit={handleAdd}>
            <input
                type="text"
                value={add3}
                onChange={(e) => setAdd3(e.target.value)}
            />
            <button disabled={!add3}>ADD</button>
        </form>
    );
}

export default Todo3;
