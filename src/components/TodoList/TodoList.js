// TodoList.js

import React, { useContext } from 'react';
import { TodoContext } from  './../../App';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-3 rounded-md  ${
            todo.completed ? 'bg-gray-200' : ''
          }`}
        >
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? 'line-through' : ''
            }`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            className="ml-3 px-2 py-1 bg-red-500 text-white rounded-md"
            onClick={() => deleteTodo(todo.id)}
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
