import {
  FilterType,
  setVisibilityFilter,
  SetVisibilityFilterAction,
  showAll,
  SET_VISIBILITY_FILTER,
} from './SetVisibilityFilter';
export {
  FilterType,
  showAll,
  showCompleted,
  showActive,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from './SetVisibilityFilter';

// Actionの型をまとめた、Actions型をエクスポート
// 複数ある場合、union型で繋ぐ
export type Actions = SetVisibilityFilterAction;

export type State = {
  visibility: FilterType;
};

const initState: State = {
  visibility: showAll(),
};

export const reducer = (state: State = initState, action: Actions) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        visibility: action.payload.fillter,
      };
    default:
      // Actionが1つなのでneverは割り当てられない
      return state;
  }
};

export const actionCreator = {
  setVisibilityFilter,
};
