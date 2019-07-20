import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as playlistAPI from '../../events/Playlist';
import AppState from '../AppState';
import * as types from './actionsTypes';

function getPlaylistsSuccess(thePlaylists: ViewModels.Playlist[]): types.ActionsTypes {
  return { type: types.GET_PLAYLISTS_SUCCES, payload: thePlaylists };
}

export function createPlaylist(thePlaylist: ViewModels.Playlist): types.ActionsTypes {
  return { type: types.CREATE_PLAYLIST, payload: thePlaylist };
}

export function loadLibraries(): ThunkAction<void, AppState, null, Action<types.ActionsTypes>> {
  return (dispatch: Dispatch<AnyAction>) => {
    var thePlaylists = playlistAPI.getAll();
    return dispatch(getPlaylistsSuccess(thePlaylists));
  };
}
