import * as React from "react";
import { Header } from "./common/Header";
import { Sidebar } from "./common/Sidebar";
import { Pane } from "./common/Pane";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Sidebar />
            <Pane />
          </div>
        </div>
      </div>
    );
  }
}
