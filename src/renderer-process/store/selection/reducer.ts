import * as types from './actionsTypes';
import State from './state';

const initialState: State = {
  selectedLibrary: 0,
  selectedPlaylist: 0,
  selectedSong: 0
};

export function selectionReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.SET_SELECTED_LIBRARY:
      return {
        ...state,
        selectedLibrary: action.payload,
        selectedPlaylist: 0
      };
    case types.SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.payload,
        selectedLibrary: 0
      };
    case types.SET_SELECTED_SONG:
      return {
        ...state,
        selectedSong: action.payload
      };
    default:
      return state;
  }
}
