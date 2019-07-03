import * as React from "React";
import { Library } from "./Library";
import { Playlist } from "./Playlist";
import * as SidebarEvents from "../../events/Sidebar";
import * as PlaylistEvents from "../../events/Playlist";
import * as LibraryEvents from "../../events/Library";

interface SidebarProps {
  handleLibraryClick: (id: number) => void;
  handlePlaylistClick: (id: number) => void;
}

interface SidebarState {
  selectedLibrary: number;
  selectedPlaylist: number;
  theLibraries: ViewModels.Library[];
  thePlaylists: ViewModels.Playlist[];
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      selectedLibrary: 0,
      selectedPlaylist: 0,
      theLibraries: LibraryEvents.getAll(),
      thePlaylists: PlaylistEvents.getAll()
    };
  }

  render() {
    return (
      <div className="pane-sm sidebar" onContextMenu={this.handleContextMenu}>
        <nav className="nav-group">
          <h5 className="nav-group-title">Library</h5>
          {this.state.theLibraries.map(theLibrary => (
            <Library
              key={theLibrary.id}
              {...theLibrary}
              isActive={this.libraryIsActive(theLibrary.id)}
              handleClick={this.libraryClickHandler}
            />
          ))}
          <h5 className="nav-group-title">Playlists</h5>
          {this.state.thePlaylists.map(thePlaylist => (
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

  handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    SidebarEvents.showContextMenu();
  };

  libraryClickHandler = (theLibraryKey: number) => {
    this.setState({ selectedLibrary: theLibraryKey, selectedPlaylist: 0 });
    this.props.handleLibraryClick(theLibraryKey);
  };

  libraryIsActive(theLibraryKey: number) {
    return theLibraryKey == this.state.selectedLibrary;
  }

  playlistClickHandler = (thePlaylistKey: number) => {
    this.setState({ selectedPlaylist: thePlaylistKey, selectedLibrary: 0 });
    this.props.handlePlaylistClick(thePlaylistKey);
  };

  playlistIsActive(thePlaylistKey: number) {
    return thePlaylistKey == this.state.selectedPlaylist;
  }
}
