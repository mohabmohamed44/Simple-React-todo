import React from 'react';

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;