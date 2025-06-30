import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <TodoProvider>
      <h1>Todo App с использованием Context API</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;