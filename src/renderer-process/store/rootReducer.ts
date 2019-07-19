import { combineReducers } from "redux";
import { libraryReducer } from "./libraries/reducer";
import { playlistReducer } from "./playlists/reducer";

const rootReducer = combineReducers({
  Libraries: libraryReducer,
  Playlists: playlistReducer
});

export default rootReducer;
