import * as types from "./actionsTypes";

export function createLibrary(
  theLibrary: ViewModels.Library
): types.ActionsTypes {
  return { type: types.CREATE_LIBRARY, payload: theLibrary };
}
