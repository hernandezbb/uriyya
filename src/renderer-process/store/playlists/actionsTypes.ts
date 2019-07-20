export const ADD_PLAYLIST: string = "CREATE_PLAYLIST";
export const LOAD_PLAYLISTS_SUCCES: string = "GET_PLAYLISTS_SUCCES";

interface AddAction {
  type: typeof ADD_PLAYLIST;
  payload: ViewModels.Playlist;
}

interface LoadSuccesAction {
  type: typeof LOAD_PLAYLISTS_SUCCES;
  payload: ViewModels.Playlist[];
}

export type ActionsTypes = AddAction | LoadSuccesAction;
