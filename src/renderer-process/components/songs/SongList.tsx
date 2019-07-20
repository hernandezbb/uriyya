import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../store/appState';
import * as SongsActions from '../../store/songs/actions';
import { Song } from './Song';

interface SongListProps {
  songs?: ViewModels.Song[];

  songsActions?: typeof SongsActions;
}

class SongList extends React.Component<SongListProps> {
  render() {
    return (
      <table className="table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody id="tbSongs">
          {this.props.songs.map(theSong => (
            <Song key={theSong.id} {...theSong} />
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ songs }: AppState): SongListProps {
  return {
    songs: songs.data
  };
}

function mapDispathToProps(dispatch: Dispatch<AnyAction>): SongListProps {
  return {
    songsActions: bindActionCreators(SongsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(SongList);
