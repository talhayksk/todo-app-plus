// AddTodoForm.js

import React, { useState, useContext } from 'react';
import { TodoContext } from './../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');

  };

  return (
    <form className="flex mt-5" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni Todo Ekle"
        className="  divide-y appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
        <faPlus />
        Ekle
      </button>
    </form>
  );
};

export default AddTodoForm;
