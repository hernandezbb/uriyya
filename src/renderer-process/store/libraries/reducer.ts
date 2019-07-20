import * as types from './actionsTypes';
import State from './state';

const initialState: State = {
  selectedLibrary: 0,
  data: []
};

export function libraryReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.CREATE_LIBRARY:
      return {
        ...state,
        data: [...state.data, action.payload as ViewModels.Library]
      };
    case types.GET_LIBRARIES_SUCCES:
      return { ...state, data: action.payload as ViewModels.Library[] };
    default:
      return state;
  }
}
