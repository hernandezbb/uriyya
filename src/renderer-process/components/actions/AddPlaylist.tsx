import * as React from 'react';

interface AddPlaylistProps {
  onClick: () => void;
}

export class AddPlaylist extends React.Component<AddPlaylistProps> {
  render() {
    return (
      <button className="btn btn-default">
        <span className="icon icon-list-add icon-text"></span>
        New Playlist
      </button>
    );
  }
}
