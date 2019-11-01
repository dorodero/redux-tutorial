import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actionCreator, AppState, ActionType } from '../modules';
import Link from '../components/Link';
import { FilterType } from '../modules/visibilityFilter/index';

type OwnProps = {
  filter: FilterType;
};

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter.visibility,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(
        actionCreator.visibilityFilter.setVisibilityFilter({
          fillter: ownProps.filter,
        }),
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
