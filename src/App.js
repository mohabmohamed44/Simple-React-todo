import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const handleTodoToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} onToggle={handleTodoToggle} onDelete={handleTodoDelete} />
    </div>
  );
}

export default App;