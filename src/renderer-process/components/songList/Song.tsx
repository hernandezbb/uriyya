import * as React from "react";

interface SongProps {
  id: number;
  name: string;
}

export class Song extends React.Component<SongProps, {}> {
  render() {
    return (
      <>
        <tr>
          <th>{this.props.name}</th>
        </tr>
      </>
    );
  }
}
