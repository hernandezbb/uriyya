import * as types from "./actionsTypes";
import State from "./state";

const initialState: State = {
  data: [{ id: 1, name: "hola" }],
  selectedLibrary: 0
};

export function libraryReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.CREATE_LIBRARY:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
}
