import { Action, AnyAction, Dispatch } from 'redux';

import * as types from './actionsTypes';

export function setSelectedLibrary(theLibraryId: number): types.ActionsTypes {
  return { type: types.SET_SELECTED_LIBRARY, payload: theLibraryId };
}

export function setSelectedPlaylist(thePlaylistId: number): types.ActionsTypes {
  return { type: types.SET_SELECTED_PLAYLIST, payload: thePlaylistId };
}

export function setSelectedSong(theSongId: number): types.ActionsTypes {
  return { type: types.SET_SELECTED_SONG, payload: theSongId };
}
