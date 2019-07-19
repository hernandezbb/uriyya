import * as React from "react";
import { Playlist } from "./Playlist";
import { connect } from "react-redux";
import AppState from "../../store/AppState";
// import liraryActions from "../../redux/actions/PlaylistActions";

interface PlaylistListProps {
  Playlists?: ViewModels.Playlist[];
}

interface PlaylistListState {
  selectedPlaylist: number;
}

class PlaylistList extends React.Component<
  PlaylistListProps,
  PlaylistListState
> {
  constructor(props: PlaylistListProps) {
    super(props);
    this.state = {
      selectedPlaylist: 0
    };
  }

  render() {
    return this.props.Playlists.map(thePlaylist => (
      <Playlist
        key={thePlaylist.id}
        {...thePlaylist}
        isActive={this.PlaylistIsActive(thePlaylist.id)}
      />
    ));
  }

  PlaylistIsActive(thePlaylistKey: number) {
    return thePlaylistKey == this.state.selectedPlaylist;
  }

  PlaylistClickHandler = (thePlaylistKey: number) => {
    this.setState({ selectedPlaylist: thePlaylistKey });
  };
}

function mapStateToProps({ Playlists }: AppState) {
  return {
    Playlists: Playlists.data
  };
}

export default connect(mapStateToProps)(PlaylistList);
