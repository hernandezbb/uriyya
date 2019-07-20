export const CREATE_PLAYLIST: string = "CREATE_PLAYLIST";
export const GET_PLAYLISTS_SUCCES: string = "GET_PLAYLISTS_SUCCES";

interface CreateAction {
  type: typeof CREATE_PLAYLIST;
  payload: ViewModels.Playlist;
}

interface GetSuccesAction {
  type: typeof GET_PLAYLISTS_SUCCES;
  payload: ViewModels.Library[];
}

export type ActionsTypes = CreateAction | GetSuccesAction;
