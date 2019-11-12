import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actionCreator, AppState, ActionType } from '../modules';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../modules/visibilityFilter/index';
import TodoList from '../components/TodoList';

const mapStateToProps = (state: AppState) => {
  // stateのfillterのタイプでTodoListコンポーネントのpropsであるTodosの状態は決めれるので
  // VisibleTodoListタグには引数となる属性は必要ない
  const filter = () => {
    switch (state.visibilityFilter.visibility.type) {
      case SHOW_ALL:
        return state.todos.todos;
      case SHOW_COMPLETED:
        return state.todos.todos.filter(e => e.completed);
      case SHOW_ACTIVE:
        return state.todos.todos.filter(e => !e.completed);
      default:
        throw new Error('Unknown filter.');
    }
  };
  return {
    todos: filter(),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(actionCreator.todos.toggleTodo({ id }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
