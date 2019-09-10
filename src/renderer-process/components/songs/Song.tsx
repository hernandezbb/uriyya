import * as React from 'react';

interface SongProps {
  id: number;
  name: string;
  isSelected: boolean;
  handleClick: (id: number) => void;
}

export class Song extends React.Component<SongProps, {}> {
  render() {
    return (
      <>
        <tr className={this.isSelected()} onClick={this.handleClick}>
          <th>{this.props.name}</th>
        </tr>
      </>
    );
  }

  isSelected(): string {
    return this.props.isSelected ? "selected" : "";
  }

  handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
    event.preventDefault();
    this.props.handleClick(this.props.id);
  };
}
