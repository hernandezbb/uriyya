import * as types from "./actionsTypes";
import State from "./state";

const initialState: State = {
  data: [{ id: 1, name: "playlist" }],
  selectedPlaylist: 0
};

export function playlistReducer(
  state = initialState,
  action: types.ActionsTypes
): State {
  switch (action.type) {
    default:
      return state;
  }
}
