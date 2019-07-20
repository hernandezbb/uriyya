import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import AppState from '../../store/AppState';
import * as Actions from '../../store/playlists/actions';
import { Playlist } from './Playlist';

interface PlaylistListProps {
  Playlists?: ViewModels.Playlist[];
  actions?: typeof Actions;
}

interface PlaylistListState {
  selectedPlaylist: number;
}

class PlaylistList extends React.Component<PlaylistListProps, PlaylistListState> {
  constructor(props: PlaylistListProps) {
    super(props);
    this.state = {
      selectedPlaylist: 0
    };
  }

  componentDidMount() {
    this.props.actions.loadLibraries();
  }

  render() {
    return this.props.Playlists.map(thePlaylist => (
      <Playlist
        key={thePlaylist.id}
        {...thePlaylist}
        isActive={this.playlistIsActive(thePlaylist.id)}
        handleClick={this.playlistClickHandler}
      />
    ));
  }

  playlistIsActive(thePlaylistKey: number) {
    return thePlaylistKey == this.state.selectedPlaylist;
  }

  playlistClickHandler = (thePlaylistKey: number) => {
    this.setState({ selectedPlaylist: thePlaylistKey });
  };
}

function mapStateToProps({ Playlists }: AppState) {
  return {
    Playlists: Playlists.data
  };
}
function mapDispathToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(PlaylistList);
