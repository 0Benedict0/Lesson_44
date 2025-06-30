import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(toggleTodo(todo.id))} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
};

export default TodoItem;