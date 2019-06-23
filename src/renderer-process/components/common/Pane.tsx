import * as React from "React";

export class Pane extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pane">
        <table className="table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody id="tbSongs" />
        </table>
      </div>
    );
  }
}
