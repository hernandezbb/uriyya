import * as React from 'react';

import { AddLibrary } from './AddLibrary';
import { AddPlaylist } from './AddPlaylist';

export class Actions extends React.Component {
  render() {
    return (
      <div className="toolbar toolbar-footer actions">
        {<AddLibrary onClick={this.addNewLibraryClickHandler} />}
        {<AddPlaylist onClick={this.addNewPlaylistClickHandler} />}
      </div>
    );
  }

  addNewLibraryClickHandler = () => {};
  addNewPlaylistClickHandler = () => {};
}
