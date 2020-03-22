import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actionCreator, ActionType, AppState } from '../modules';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (states: AppState) => {
  return {
    text: states.todos.text,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    onSubmit: () => {
      dispatch(actionCreator.todos.addTodo());
    },
    onChange: (text: string) => {
      dispatch(actionCreator.todos.changeText({ text }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
