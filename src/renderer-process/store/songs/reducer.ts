import * as types from './actionsTypes';
import State from './state';

const initialState: State = {
  data: []
};

export function songReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.LOAD_SONGS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
