import * as React from 'react';

import { Actions } from '../actions/Actions';
import LibraryList from '../libraries/LibraryList';
import PlaylistList from '../playlists/PlaylistList';

export class Sidebar extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pane-sm sidebar">
        <nav className="nav-group listbar">
          {<LibraryList />}
          {<PlaylistList />}
        </nav>
        {<Actions />}
      </div>
    );
  }
}
