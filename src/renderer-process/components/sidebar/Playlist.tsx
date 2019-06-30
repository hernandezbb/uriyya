import * as React from "react";

interface PlaylistProps {
  id: number;
  name: string;
  isActive: boolean;
  handleClick: (id: number) => void;
}

export class Playlist extends React.Component<PlaylistProps, {}> {
  constructor(props: PlaylistProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <span className={`nav-group-item ${this.getActiveClass()}`}>
          <span className="icon icon-list " />
          {this.props.name}
        </span>
      </div>
    );
  }

  getActiveClass(): string {
    return this.props.isActive ? "active" : "";
  }

  handleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    this.props.handleClick(this.props.id);
  }
}
