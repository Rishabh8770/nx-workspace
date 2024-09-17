'use client';

import { useEffect, useState } from 'react';
import { Todo } from '@my-nx-tutorial/data';
import { Todos } from '@my-nx-tutorial/ui';

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
    <div className="m-4 space-y-4">
      <h1 className="text-xl font-semibold underline">Todos</h1>
      <Todos todos={todos}/>
      <button
        id={'add-todo'}
        onClick={addTodo}
        className="border rounded-md p-2"
      >
        Add todo
      </button>
    </div>
  );
};

export default LandingPage;
