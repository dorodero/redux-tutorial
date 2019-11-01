import { createStore, combineReducers } from 'redux';
import * as Todos from './todos';
import * as VisibilityFilter from './visibilityFilter';

export const rootReducer = combineReducers({
  todos: Todos.reducer,
  visibilityFilter: VisibilityFilter.reducer,
});

export const store = createStore(rootReducer);

// stateの型を作る
export type AppState = ReturnType<typeof store.getState>;

export const actionCreator = {
  todos: Todos.actionCreator,
  visibilityFilter: VisibilityFilter.actionCreator,
};

export type ActionType = Todos.Actions | VisibilityFilter.Actions;
