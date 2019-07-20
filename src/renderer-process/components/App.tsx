import * as React from 'react';

import { Header } from './common/Header';
import { MainContent } from './common/MainContent';
import { Sidebar } from './common/Sidebar';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}
