import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actionCreator, ActionType } from '../modules';
import AddTodo from '../components/AddTodo';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(actionCreator.todos.addTodo({ text }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
