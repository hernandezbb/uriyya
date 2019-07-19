import * as types from "./actionsTypes";

export function createLibrary(thePlaylist: ViewModels.Playlist): types.ActionsTypes {
  return { type: types.CREATE_PLAYLIST, payload: thePlaylist };
}
