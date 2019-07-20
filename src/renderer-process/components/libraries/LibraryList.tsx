import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../store/appState';
import * as LibraryActions from '../../store/libraries/actions';
import * as SelectionAcitions from '../../store/selection/actions';
import * as SongsActions from '../../store/songs/actions';
import { Library } from './Library';

interface LibraryListProps {
  libraries?: ViewModels.Library[];
  selectedLibrary?: number;

  librariesActions?: typeof LibraryActions;
  selectionActions?: typeof SelectionAcitions;
  songsActions?: typeof SongsActions;
}

class LibraryList extends React.Component<LibraryListProps> {
  componentDidMount() {
    this.props.librariesActions.loadLibraries();
  }

  render() {
    return this.props.libraries.map(theLibrary => (
      <Library
        key={theLibrary.id}
        {...theLibrary}
        isActive={this.isActive(theLibrary.id)}
        handleClick={this.libraryClickHandler}
      />
    ));
  }

  isActive(theLibraryId: number) {
    return theLibraryId == this.props.selectedLibrary;
  }

  libraryClickHandler = (theLibraryId: number) => {
    this.props.selectionActions.setSelectedLibrary(theLibraryId);
    this.props.songsActions.getSongsByLibraryId(theLibraryId);
  };
}

function mapStateToProps({ libraries, selection }: AppState): LibraryListProps {
  return {
    libraries: libraries.data,
    selectedLibrary: selection.selectedLibrary
  };
}

function mapDispathToProps(dispatch: Dispatch<AnyAction>): LibraryListProps {
  return {
    librariesActions: bindActionCreators(LibraryActions, dispatch),
    selectionActions: bindActionCreators(SelectionAcitions, dispatch),
    songsActions: bindActionCreators(SongsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LibraryList);
