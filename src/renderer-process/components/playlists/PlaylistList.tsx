import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../store/appState';
import * as PlaylistActions from '../../store/playlists/actions';
import * as SelectionActions from '../../store/selection/actions';
import * as SongsActions from '../../store/songs/actions';
import { Playlist } from './Playlist';

interface PlaylistListProps {
  playlists?: ViewModels.Playlist[];
  selectedPlaylist?: number;

  playlistsActions?: typeof PlaylistActions;
  selectionActions?: typeof SelectionActions;
  songsActions?: typeof SongsActions;
}

class PlaylistList extends React.Component<PlaylistListProps> {
  componentDidMount() {
    this.props.playlistsActions.getLibraries();
  }

  render() {
    return (
      <>
        <h5 className="nav-group-title">Playlists</h5>
        {this.mapThePlaylists()}
      </>
    );
  }

  mapThePlaylists = (): JSX.Element[] => {
    return this.props.playlists.map(thePlaylist => (
      <Playlist
        key={thePlaylist.id}
        {...thePlaylist}
        isActive={this.isActive(thePlaylist.id)}
        handleClick={this.playlistClickHandler}
      />
    ));
  };

  isActive(thePlaylistId: number) {
    return thePlaylistId == this.props.selectedPlaylist;
  }

  playlistClickHandler = (thePlaylistId: number) => {
    this.props.selectionActions.setSelectedPlaylist(thePlaylistId);
    this.props.songsActions.getSongsByPlaylistId(thePlaylistId);
  };
}

function mapStateToProps({ playlists, selection }: AppState): PlaylistListProps {
  return {
    playlists: playlists.data,
    selectedPlaylist: selection.selectedPlaylist
  };
}

function mapDispathToProps(dispatch: Dispatch<AnyAction>): PlaylistListProps {
  return {
    playlistsActions: bindActionCreators(PlaylistActions, dispatch),
    selectionActions: bindActionCreators(SelectionActions, dispatch),
    songsActions: bindActionCreators(SongsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(PlaylistList);
