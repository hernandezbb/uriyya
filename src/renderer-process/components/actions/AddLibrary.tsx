import * as React from 'react';

interface AddLibraryProps {
  onClick: () => void;
}

export class AddLibrary extends React.Component<AddLibraryProps> {
  render() {
    return (
      <button className="btn btn-default">
        <span className="icon icon-plus-circled icon-text"></span>
        New Library
      </button>
    );
  }
}
