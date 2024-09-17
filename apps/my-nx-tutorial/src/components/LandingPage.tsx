'use client';

import { useEffect, useState } from 'react';
import { Todo } from '@my-nx-tutorial/data';

export const LandingPage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  useEffect(() => {
    fetch('http://localhost:3333/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('http://localhost:3333/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className="todo" key={t.title}>
            {t.title}
          </li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add todo
      </button>
    </>
  );
};

export default LandingPage;
