import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as playlistAPI from '../../events/playlists';
import { AppState } from '../appState';
import * as types from './actionsTypes';

function loadPlaylistsSuccess(thePlaylists: ViewModels.Playlist[]): types.ActionsTypes {
  return { type: types.LOAD_PLAYLISTS_SUCCES, payload: thePlaylists };
}

function addPlaylist(thePlaylist: ViewModels.Playlist): types.ActionsTypes {
  return { type: types.ADD_PLAYLIST, payload: thePlaylist };
}

export function getLibraries(): ThunkAction<void, AppState, null, Action<types.ActionsTypes>> {
  return (dispatch: Dispatch<AnyAction>) => {
    var thePlaylists = playlistAPI.getAll();
    return dispatch(loadPlaylistsSuccess(thePlaylists));
  };
}
