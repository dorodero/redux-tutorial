import { Action } from 'redux';

//////////////////
// Action
//////////////////

// ActionNames
export const ADD_TODO = 'ADD_TODO' as const;

export type AddTodoPayload = {
  // todoを追加する時に必要なのはtodoの内容
  text: string;
};

//////////////////
// ActionCreator
//////////////////

// interfaceでAddTodoActionを定義
export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => ({
  type: ADD_TODO,
  payload,
});
