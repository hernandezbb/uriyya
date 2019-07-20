import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as libraryAPI from '../../events/libraries';
import { AppState } from '../appState';
import * as types from './actionsTypes';

function loadLibrariesSuccess(theLibraries: ViewModels.Library[]): types.ActionsTypes {
  return { type: types.LOAD_LIBRARIES_SUCCES, payload: theLibraries };
}

function addLibrary(theLibrary: ViewModels.Library): types.ActionsTypes {
  return { type: types.ADD_LIBRARY, payload: theLibrary };
}

export function loadLibraries(): ThunkAction<void, AppState, null, Action<types.ActionsTypes>> {
  return (dispatch: Dispatch<AnyAction>) => {
    var theLibraries = libraryAPI.getAll();
    return dispatch(loadLibrariesSuccess(theLibraries));
  };
}
