export const SET_SELECTED_LIBRARY: string = "SET_SELECTED_LIBRARY";
export const SET_SELECTED_PLAYLIST: string = "SET_SELECTED_PLAYLIST";
export const SET_SELECTED_SONG: string = "SET_SELECTED_SONG";

interface SetSelectedLibraryAction {
  type: typeof SET_SELECTED_LIBRARY;
  payload: number;
}

interface SetSelectedPlaylistAction {
  type: typeof SET_SELECTED_PLAYLIST;
  payload: number;
}

interface SetSelectedSongAction {
  type: typeof SET_SELECTED_SONG;
  payload: number;
}

export type ActionsTypes = SetSelectedLibraryAction | SetSelectedPlaylistAction | SetSelectedSongAction;
