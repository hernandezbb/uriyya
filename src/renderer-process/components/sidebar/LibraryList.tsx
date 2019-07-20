import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import AppState from '../../store/AppState';
import * as Actions from '../../store/libraries/actions';
import { Library } from './Library';

interface LibraryListProps {
  Libraries?: ViewModels.Library[];
  actions?: typeof Actions;
}

interface LibraryListState {
  selectedLibrary: number;
}

class LibraryList extends React.Component<LibraryListProps, LibraryListState> {
  constructor(props: LibraryListProps) {
    super(props);
    this.state = {
      selectedLibrary: 0
    };
  }

  componentDidMount() {
    this.props.actions.loadLibraries();
  }

  render() {
    return this.props.Libraries.map(theLibrary => (
      <Library
        key={theLibrary.id}
        {...theLibrary}
        isActive={this.libraryIsActive(theLibrary.id)}
        handleClick={this.libraryClickHandler}
      />
    ));
  }

  libraryIsActive(theLibraryKey: number) {
    return theLibraryKey == this.state.selectedLibrary;
  }

  libraryClickHandler = (theLibraryKey: number) => {
    this.setState({ selectedLibrary: theLibraryKey });
  };
}

function mapStateToProps({ Libraries }: AppState) {
  return {
    Libraries: Libraries.data
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
)(LibraryList);
