import { Action } from 'redux';

//////////////////
// Action
//////////////////

// ActionNames
export const ADD_TODO = 'ADD_TODO' as const;
export const CHANGE_TEXT = 'CHANGE_TEXT' as const;

export type CangeTextPayload = {
  text: string;
};

//////////////////
// ActionCreator
//////////////////

// interfaceでAddTodoActionを定義
export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
}

export const addTodo = (): AddTodoAction => ({
  type: ADD_TODO,
});

export interface ChangeTextAction extends Action {
  type: typeof CHANGE_TEXT;
  payload: CangeTextPayload;
}

export const changeText = (payload: CangeTextPayload): ChangeTextAction => ({
  type: CHANGE_TEXT,
  payload,
});
