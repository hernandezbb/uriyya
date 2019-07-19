import LibrariesState from "./libraries/state";
import PlaylistsState from "./playlists/state";

interface AppState {
  Libraries: LibrariesState;
  Playlists: PlaylistsState;
}

export default AppState;
