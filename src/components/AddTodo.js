import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Новая задача" />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddTodo;