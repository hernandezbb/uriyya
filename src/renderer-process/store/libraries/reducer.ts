import * as types from './actionsTypes';
import State from './state';

const initialState: State = {
  data: []
};

export function libraryReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.ADD_LIBRARY:
      return {
        ...state,
        data: [...state.data, action.payload as ViewModels.Library]
      };
    case types.LOAD_LIBRARIES_SUCCES:
      return { ...state, data: action.payload as ViewModels.Library[] };
    default:
      return state;
  }
}
