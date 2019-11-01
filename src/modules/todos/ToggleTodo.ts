import { Action } from 'redux';

//////////////////
// Action
//////////////////

// ActionNames
export const TOGGLE_TODO = 'TOGGLE_TODO' as const;

export type ToggleTodoPayload = {
  // todoをトグルする時に必要なのはどのtodoかの情報
  id: number;
};

//////////////////
// ActionCreator
//////////////////

// interfaceでToggleTodoActionを定義
export interface ToggleTodoAction extends Action {
  type: typeof TOGGLE_TODO;
  payload: ToggleTodoPayload;
}

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
