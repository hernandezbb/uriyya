export const LOAD_SONGS = "LOAD_LIBRARY_SONGS";

interface LoadSongsAction {
  type: typeof LOAD_SONGS;
  payload: ViewModels.Song[];
}

export type ActionsTypes = LoadSongsAction;
