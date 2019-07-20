import * as types from './actionsTypes';
import State from './state';

const initialState: State = {
  data: [],
  selectedPlaylist: 0
};

export function playlistReducer(state = initialState, action: types.ActionsTypes): State {
  switch (action.type) {
    case types.CREATE_PLAYLIST:
      return {
        ...state,
        data: [...state.data, action.payload as ViewModels.Playlist]
      };
    case types.GET_PLAYLISTS_SUCCES:
      return {
        ...state,
        data: action.payload as ViewModels.Playlist[]
      };
    default:
      return state;
  }
}
