import * as types from './actionsTypes';
import State from './state';

const initialState: State = {
  data: []
};

export function playlistReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.ADD_PLAYLIST:
      return {
        ...state,
        data: [...state.data, action.payload as ViewModels.Playlist]
      };
    case types.LOAD_PLAYLISTS_SUCCES:
      return {
        ...state,
        data: action.payload as ViewModels.Playlist[]
      };
    default:
      return state;
  }
}
