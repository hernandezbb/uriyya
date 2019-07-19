import * as React from "React";
import LibraryList from "./LibraryList";
import PlaylistList from "./PlaylistList";
import * as SidebarEvents from "../../events/Sidebar";

interface SidebarProps {
  handleLibraryClick: (id: number) => void;
  handlePlaylistClick: (id: number) => void;
}

export class Sidebar extends React.Component<SidebarProps, {}> {
  constructor(props: SidebarProps) {
    super(props);
  }

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

  // libraryClickHandler = (theLibraryKey: number) => {
  //   this.setState({ selectedLibrary: theLibraryKey, selectedPlaylist: 0 });
  //   this.props.handleLibraryClick(theLibraryKey);
  // };

  // libraryIsActive(theLibraryKey: number) {
  //   return theLibraryKey == this.state.selectedLibrary;
  // }

  // playlistClickHandler = (thePlaylistKey: number) => {
  //   this.setState({ selectedPlaylist: thePlaylistKey });
  //   this.props.handlePlaylistClick(thePlaylistKey);
  // };

  // playlistIsActive(thePlaylistKey: number) {
  //   return thePlaylistKey == this.state.selectedPlaylist;
  // }
}
