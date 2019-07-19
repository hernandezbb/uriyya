export const CREATE_LIBRARY: string = "CREATE_LIBRARY";

interface CreateAction {
  type: typeof CREATE_LIBRARY;
  payload: ViewModels.Library;
}

export type ActionsTypes = CreateAction;
