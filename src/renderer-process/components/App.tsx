import * as React from "react";
import { Header } from "./common/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { SongList } from "./songList/SongList";
import * as SongEvents from "../events/Song";

interface AppState {
  theSongs: ViewModels.Song[];
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theSongs: []
    };
  }

  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Sidebar
              handleLibraryClick={this.handleLibraryClick}
              handlePlaylistClick={this.handlePlaylistClick}
            />
            <SongList theSongs={this.state.theSongs} />
          </div>
        </div>
      </div>
    );
  }

  handleLibraryClick = (theLibraryId: number) => {
    this.setState({ theSongs: SongEvents.getSongsByLibraryId(theLibraryId) });
  };

  handlePlaylistClick = (thePlaylistId: number) => {
    this.setState({ theSongs: SongEvents.getSongsByPlaylistId(thePlaylistId) });
  };
}
