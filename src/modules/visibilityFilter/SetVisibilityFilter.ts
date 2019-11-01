import { Action } from 'redux';

export const SHOW_ALL = 'SHOW_ALL' as const;
export const SHOW_COMPLETED = 'SHOW_COMPLETED' as const;
export const SHOW_ACTIVE = 'SHOW_ACTIVE' as const;

//////////////////
// Action
//////////////////
// ActionNames
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' as const;

export type FilterType = {
  type: typeof SHOW_ALL | typeof SHOW_COMPLETED | typeof SHOW_ACTIVE;
};

export const showAll = (): FilterType => {
  return {
    type: SHOW_ALL,
  };
};

export const showCompleted = (): FilterType => {
  return {
    type: SHOW_COMPLETED,
  };
};

export const showActive = (): FilterType => {
  return {
    type: SHOW_ACTIVE,
  };
};

export type SetVisibilityFilterPayload = {
  fillter: FilterType;
};

//////////////////
// ActionCreator
//////////////////
export interface SetVisibilityFilterAction extends Action {
  type: typeof SET_VISIBILITY_FILTER;
  payload: SetVisibilityFilterPayload;
}

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => ({
  type: SET_VISIBILITY_FILTER,
  payload,
});
