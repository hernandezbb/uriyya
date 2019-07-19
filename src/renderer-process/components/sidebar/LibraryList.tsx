import * as React from "react";
import { Library } from "./Library";
import { connect } from "react-redux";
import AppState from "../../store/AppState";
// import liraryActions from "../../redux/actions/libraryActions";

interface LibraryListProps {
  Libraries?: ViewModels.Library[];
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

  render() {
    return this.props.Libraries.map(theLibrary => (
      <Library
        key={theLibrary.id}
        {...theLibrary}
        isActive={this.libraryIsActive(theLibrary.id)}
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

export default connect(mapStateToProps)(LibraryList);
