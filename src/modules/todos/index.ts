import { addTodo, AddTodoAction, ADD_TODO, CHANGE_TEXT, ChangeTextAction, changeText } from './AddTodo';
import { toggleTodo, ToggleTodoAction, TOGGLE_TODO } from './ToggleTodo';
import { TodoState } from '../../types';
import { Reducer } from 'redux';

// Actionの型をまとめた、Actions型をエクスポート
// 複数ある場合、union型で繋ぐ
export type Actions = AddTodoAction | ToggleTodoAction | ChangeTextAction;

type State = {
  text: string;
  todos: TodoState[];
};

const initialState: State = {
  text: '',
  todos: [],
};

//////////////////
// Reducer
//////////////////

export const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: '',
        todos: [
          ...state.todos,
          {
            // 既存の配列に新しい要素を追加
            id: state.todos.length,
            text: state.text,
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
        text: state.text,
      };
    case CHANGE_TEXT:
      return {
        text: action.payload.text,
        todos: [...state.todos],
      };
    default:
      const _: never = action; // action漏れの確認
      return state;
  }
};

export const actionCreator = {
  addTodo,
  toggleTodo,
  changeText,
};
