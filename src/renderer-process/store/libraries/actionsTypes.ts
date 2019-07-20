export const CREATE_LIBRARY: string = "CREATE_LIBRARY";
export const GET_LIBRARIES_SUCCES = "LOAD_LIBRARIES_SUCCES";

interface CreateAction {
  type: typeof CREATE_LIBRARY;
  payload: ViewModels.Library;
}

interface GetSuccesAction {
  type: typeof GET_LIBRARIES_SUCCES;
  payload: ViewModels.Library[];
}

export type ActionsTypes = CreateAction | GetSuccesAction;
