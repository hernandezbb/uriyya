import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as songsAPI from '../../events/songs';
import { AppState } from '../appState';
import * as types from './actionsTypes';

function loadSongs(theSongs: ViewModels.Song[]): types.ActionsTypes {
  return { type: types.LOAD_SONGS, payload: theSongs };
}

export function getSongsByLibraryId(
  theLibraryId: number
): ThunkAction<void, AppState, null, Action<types.ActionsTypes>> {
  return (dispatch: Dispatch<AnyAction>) => {
    var theSongs = songsAPI.getSongsByLibraryId(theLibraryId);
    return dispatch(loadSongs(theSongs));
  };
}

export function getSongsByPlaylistId(
  thePlaylistId: number
): ThunkAction<void, AppState, null, Action<types.ActionsTypes>> {
  return (dispatch: Dispatch<AnyAction>) => {
    var theSongs = songsAPI.getSongsByPlaylistId(thePlaylistId);
    return dispatch(loadSongs(theSongs));
  };
}
