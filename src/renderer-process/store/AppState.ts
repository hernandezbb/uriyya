import LibrariesState from './libraries/state';
import PlaylistsState from './playlists/state';
import SelectionState from './selection/state';
import SongsState from './songs/state';

export interface AppState {
  libraries: LibrariesState;
  playlists: PlaylistsState;
  songs: SongsState;
  selection: SelectionState;
}
