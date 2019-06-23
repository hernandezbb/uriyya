import * as React from "React";

export class Sidebar extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">Library</h5>
          <a className="nav-group-item active">
            <span className="icon icon-home" />
            Songs
          </a>
          <h5 className="nav-group-title">Playlists</h5>
          <span className="nav-group-item">
            <span className="icon icon-list" />
            Playlist 1
          </span>
          <span className="nav-group-item">
            <span className="icon icon-list" />
            Playlist 2
          </span>
        </nav>
      </div>
    );
  }
}
