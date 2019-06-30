import * as React from "react";
import { Header } from "./common/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { SongList } from "./songList/SongList";
import * as PlaylistEvents from "../events/Playlist";
import * as LibraryEvents from "../events/Library";

interface AppState {
  theLibraries: ViewModels.Library[];
  thePlaylists: ViewModels.Playlist[];
  theSongs: ViewModels.Song[];
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theLibraries: LibraryEvents.getAll(),
      thePlaylists: PlaylistEvents.getAll(),
      theSongs: []
    };
    this.handleLibraryClick = this.handleLibraryClick.bind(this);
    this.handlePlaylistClick = this.handlePlaylistClick.bind(this);
  }

  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Sidebar
              theLibraries={this.state.theLibraries}
              thePlayLists={this.state.thePlaylists}
              handleLibraryClick={this.handleLibraryClick}
              handlePlaylistClick={this.handlePlaylistClick}
            />
            <SongList theSongs={this.state.theSongs} />
          </div>
        </div>
      </div>
    );
  }

  handleLibraryClick(id: number) {
    this.setState({ theSongs: LibraryEvents.getSongs(id) });
  }

  handlePlaylistClick(id: number) {
    this.setState({ theSongs: PlaylistEvents.getSongs(id) });
  }
}
