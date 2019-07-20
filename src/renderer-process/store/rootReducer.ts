import { combineReducers } from 'redux';

import { libraryReducer } from './libraries/reducer';
import { playlistReducer } from './playlists/reducer';
import { selectionReducer } from './selection/reducer';
import { songReducer } from './songs/reducer';

const rootReducer = combineReducers({
  libraries: libraryReducer,
  playlists: playlistReducer,
  songs: songReducer,
  selection: selectionReducer
});

export default rootReducer;
