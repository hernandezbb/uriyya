export const ADD_LIBRARY: string = "ADD_LIBRARY";
export const LOAD_LIBRARIES_SUCCES = "LOAD_LIBRARIES_SUCCES";

interface AddAction {
  type: typeof ADD_LIBRARY;
  payload: ViewModels.Library;
}

interface LoadSuccesAction {
  type: typeof LOAD_LIBRARIES_SUCCES;
  payload: ViewModels.Library[];
}

export type ActionsTypes = AddAction | LoadSuccesAction;
