import * as React from "React";

interface LibraryProps {
  id: number;
  name: string;
  isActive: boolean;
  handleClick: (id: number) => void;
}

export class Library extends React.Component<LibraryProps, {}> {
  constructor(props: LibraryProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <a className={`nav-group-item ${this.getActiveClass()}`}>
          <span className="icon icon-note" />
          {this.props.name}
        </a>
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
