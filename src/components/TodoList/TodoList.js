// TodoList.js

import React, { useContext } from 'react';
import { TodoContext } from './../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'
const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (

    <div className="container mx-auto mt-5">

      {/* Kaydırılabilir liste için bir container */}
      <div className="overflow-auto bg-white border border-gray-300 p-3 rounded-md  scroll-smooth max-h-screen min-h-10">
        <ul className="divide-y divide-dashed ">
          {/* Liste öğeleri */}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`   flex items-center justify-between m-1 p-1 rounded-md text-ellipsis overflow-auto ... ${todo.completed ? 'bg-gray-200' : ''
                }`}
            >

              <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''
                  }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                className="ml-2 px-2 py-1 text-red-600 rounded-md"
                onClick={() => deleteTodo(todo.id)}
              >
                <FontAwesomeIcon icon={faTrash} />

              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>


  );
};

export default TodoList;
