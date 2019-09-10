import * as React from 'React';

import * as SidebarEvents from '../../events/sidebar';
import LibraryList from '../libraries/LibraryList';
import PlaylistList from '../playlists/PlaylistList';

export class Sidebar extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pane-sm sidebar" onContextMenu={this.handleContextMenu}>
        <nav className="nav-group">
          <h5 className="nav-group-title">Libraries</h5>
          {<LibraryList />}
          <h5 className="nav-group-title">Playlists</h5>
          {<PlaylistList />}
        </nav>
      </div>
    );
  }

  handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    SidebarEvents.showContextMenu();
  };
}