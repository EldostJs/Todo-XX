import React, { useState } from 'react';

function AppTodo() {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);
    const [editItemId, setEditItemId] = useState(null);
    const [editText, setEditText] = useState('');

    function handleAdd(e) {
        e.preventDefault();
        addItem();
    }

    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    function addItem() {
        if (!newItem) {
            alert('Write text');
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 100),
            value: newItem
        };
        setItems(oldItems => [...oldItems, item]);
        setNewItem('');
    }

    function startEditing(id, value) {
        setEditItemId(id);
        setEditText(value);
    }

    function handleSaveEdit(id) {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, value: editText } : item
        );
        setItems(updatedItems);
        setEditItemId(null);
        setEditText('');
    }

    return (
        <div>
            <h1>Todo List App</h1>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {editItemId === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(item.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {item.value}
                                <button onClick={() => deleteItem(item.id)}>X</button>
                                <button onClick={() => startEditing(item.id, item.value)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AppTodo;
