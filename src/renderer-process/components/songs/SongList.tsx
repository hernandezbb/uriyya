import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../store/appState';
import * as SelectionActions from '../../store/selection/actions';
import * as SongsActions from '../../store/songs/actions';
import { Song } from './Song';

interface SongListProps {
  songs?: ViewModels.Song[];
  selectedSong?: number;

  songsActions?: typeof SongsActions;
  selectionActions?: typeof SelectionActions;
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
            <Song
              key={theSong.id}
              {...theSong}
              isSelected={this.isSelected(theSong.id)}
              handleClick={this.handlerSongClick}
            />
          ))}
        </tbody>
      </table>
    );
  }

  isSelected = (theSongId: number): boolean => {
    return this.props.selectedSong == theSongId;
  };

  handlerSongClick = (theSongId: number) => {
    this.props.selectionActions.setSelectedSong(theSongId);
  };
}

function mapStateToProps({ songs, selection }: AppState): SongListProps {
  return {
    songs: songs.data,
    selectedSong: selection.selectedSong
  };
}

function mapDispathToProps(dispatch: Dispatch<AnyAction>): SongListProps {
  return {
    songsActions: bindActionCreators(SongsActions, dispatch),
    selectionActions: bindActionCreators(SelectionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(SongList);
