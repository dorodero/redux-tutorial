import * as React from 'react';
import Todo from './Todo';
import { TodoState } from '../types';

type Props = {
  todos: TodoState[];
  toggleTodo: (id: number) => void;
};

const component: React.FC<Props> = props => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => {
              props.toggleTodo(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default component;
