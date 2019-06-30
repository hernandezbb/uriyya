import * as React from "React";
import { Library } from "./Library";
import { Playlist } from "./Playlist";

interface SidebarProps {
  thePlayLists: ViewModels.Playlist[];
  theLibraries: ViewModels.Library[];
}

interface SidebarState {
  selectedLibrary: number;
  selectedPlaylist: number;
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = { selectedLibrary: 0, selectedPlaylist: 0 };
  }

  render() {
    return (
      <div className="pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">Library</h5>
          {this.props.theLibraries.map(theLibrary => (
            <Library
              key={theLibrary.id}
              {...theLibrary}
              isActive={this.libraryIsActive(theLibrary.id)}
              handleClick={this.libraryClickHandler}
            />
          ))}
          <h5 className="nav-group-title">Playlists</h5>
          {this.props.thePlayLists.map(thePlaylist => (
            <Playlist
              key={thePlaylist.id}
              {...thePlaylist}
              isActive={this.playlistIsActive(thePlaylist.id)}
              handleClick={this.playlistClickHandler}
            />
          ))}
        </nav>
      </div>
    );
  }

  libraryClickHandler = (theLibraryKey: number) => {
    this.setState({ selectedLibrary: theLibraryKey, selectedPlaylist: 0 });
  };

  libraryIsActive(theLibraryKey: number) {
    return theLibraryKey == this.state.selectedLibrary;
  }

  playlistClickHandler = (thePlaylistKey: number) => {
    this.setState({ selectedPlaylist: thePlaylistKey, selectedLibrary: 0 });
  };

  playlistIsActive(thePlaylistKey: number) {
    return thePlaylistKey == this.state.selectedPlaylist;
  }
}
