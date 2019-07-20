import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as libraryAPI from '../../events/Library';
import AppState from '../AppState';
import * as types from './actionsTypes';

function getLibrariesSuccess(theLibraries: ViewModels.Library[]): types.ActionsTypes {
  return { type: types.GET_LIBRARIES_SUCCES, payload: theLibraries };
}

export function createLibrary(theLibrary: ViewModels.Library): types.ActionsTypes {
  return { type: types.CREATE_LIBRARY, payload: theLibrary };
}

export function loadLibraries(): ThunkAction<void, AppState, null, Action<types.ActionsTypes>> {
  return (dispatch: Dispatch<AnyAction>) => {
    var theLibraries = libraryAPI.getAll();
    return dispatch(getLibrariesSuccess(theLibraries));
  };
}
