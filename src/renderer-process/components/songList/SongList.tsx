import * as React from 'React';

import { Song } from './Song';

interface PaneProps {
  theSongs: ViewModels.Song[];
}

export class SongList extends React.Component<PaneProps, {}> {
  render() {
    return (
      <div className="pane">
        <table className="table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody id="tbSongs">
            {this.props.theSongs.map(theSong => (
              <Song key={theSong.id} {...theSong} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
