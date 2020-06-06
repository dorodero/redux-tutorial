import { createSelector } from 'reselect';

import { AppState } from '../modules';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../modules/visibilityFilter';
import { TodoState, TodoListState } from '../types';

export const makeGetVisibleTodos = () => {
  return createSelector(
    (state: AppState) => state.visibilityFilter.visibility.type,
    (state: AppState) => state.todos.todos,
    (type, todos) => {
      switch (type) {
        case SHOW_ALL:
          return todos;
        case SHOW_COMPLETED:
          return todos.filter(e => e.completed);
        case SHOW_ACTIVE:
          return todos.filter(e => !e.completed);
        default:
          throw new Error('Unknown filter.');
      }
    },
  );
};
