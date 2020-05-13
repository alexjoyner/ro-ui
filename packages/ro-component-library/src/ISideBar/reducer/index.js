import { TOGGLE_SIDEBAR } from '../actions';

export const InitialState = {
  shown: true,
};

export const ISideBarReducer = (state = InitialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, shown: !state.shown };
    default: return state;
  }
};
