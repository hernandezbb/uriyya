import * as React from 'react';

import SongList from '../songs/SongList';

export class MainContent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pane">
        <SongList />
      </div>
    );
  }
}
