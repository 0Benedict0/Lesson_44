import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <li onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
};

export default TodoItem;