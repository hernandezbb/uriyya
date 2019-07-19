export const CREATE_PLAYLIST: string = "CREATE_PLAYLIST";

interface CreateAction {
  type: typeof CREATE_PLAYLIST;
  payload: ViewModels.Playlist;
}

export type ActionsTypes = CreateAction;
