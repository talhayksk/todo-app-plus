// TodoApp.js

import React, { useState, createContext } from 'react';
import TodoList from './components/TodoList/TodoList'
import AddTodoForm from './components/AddTodoForm/AddTodoForm';

// Context oluştur
export const TodoContext = createContext();

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-5">Todo App+</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
