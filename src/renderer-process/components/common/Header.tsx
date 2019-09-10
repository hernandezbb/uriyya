import * as React from 'react';

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="toolbar toolbar-actions toolbar-header">
        <div id="controls">
          <div className="btn-group">
            <button className="btn  btn-large btn-default">
              <span className="icon icon-play"></span>
            </button>
            <button className="btn  btn-large btn-default">
              <span className="icon icon-stop"></span>
            </button>
            <button className="btn  btn-large btn-default">
              <span className="icon icon-to-end"></span>
            </button>
          </div>
        </div>

        <div id="playing">
          <label>Song Name</label>
        </div>

        <div id="search">
          {/* <span className="icon icon-search"></span> */}
          <input id="txtSearch" className="form-control" type="text" placeholder="Search"></input>
        </div>
      </header>
    );
  }
}
