import * as React from "react";
import { Header } from "./common/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Pane } from "./common/Pane";

export class App extends React.Component<{}, {}> {
  theLibraries: ViewModels.Library[] = [
    { id: 1, name: "Main" },
    { id: 2, name: "Main 2" },
    { id: 3, name: "Main 3" }
  ];
  thePlaylist: ViewModels.Playlist[] = [
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
    { id: 3, name: "Playlist 3" }
  ];

  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Sidebar
              theLibraries={this.theLibraries}
              thePlayLists={this.thePlaylist}
            />
            <Pane />
          </div>
        </div>
      </div>
    );
  }
}
