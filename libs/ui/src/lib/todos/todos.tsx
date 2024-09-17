import { Todo } from '@my-nx-tutorial/data';

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <div>
      <ul>
        {props.todos.map((t) => (
          <li className={'todo'} key={t.title}>
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
