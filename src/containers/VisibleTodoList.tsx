import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actionCreator, AppState, ActionType } from '../modules';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../modules/visibilityFilter/index';
import TodoList from '../components/TodoList';
import { makeGetVisibleTodos } from '../selectors';
import { TodoListState, TodoState } from '../types';

const makeMapStateToProps = () => {
  const getVisibleTodos = makeGetVisibleTodos();
  const mapStateToProps = (state: AppState) => {
    return {
      todos: getVisibleTodos(state),
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(actionCreator.todos.toggleTodo({ id }));
    },
  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(TodoList);
