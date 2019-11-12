import { addTodo, AddTodoAction, ADD_TODO } from './AddTodo';
import { toggleTodo, ToggleTodoAction, TOGGLE_TODO } from './ToggleTodo';
import { TodoListState } from '../../types';
import { Reducer } from 'redux';

// Actionの型をまとめた、Actions型をエクスポート
// 複数ある場合、union型で繋ぐ
export type Actions = AddTodoAction | ToggleTodoAction;

const initialState: TodoListState = {
  todos: [],
};

//////////////////
// Reducer
//////////////////

export const reducer: Reducer<TodoListState, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            // 既存の配列に新しい要素を追加
            id: state.todos.length,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.id !== action.payload.id
            ? todo
            : {
                ...todo,
                completed: !todo.completed, // 対象のIDのcompletedを反転
              };
        }),
      };
    default:
      const _: never = action; // action漏れの確認
      return state;
  }
};

export const actionCreator = {
  addTodo,
  toggleTodo,
};
