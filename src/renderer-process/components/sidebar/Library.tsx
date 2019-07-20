import * as React from 'React';

interface LibraryProps {
  id: number;
  name: string;
  isActive: boolean;
  handleClick: (id: number) => void;
}

export class Library extends React.Component<LibraryProps, {}> {
  constructor(props: LibraryProps) {
    super(props);
  }

  render() {
    return (
      <>
        <a className={this.getClass()} onClick={this.handleClick}>
          <span className="icon icon-note" />
          {this.props.name}
        </a>
      </>
    );
  }

  getClass(): string {
    return `nav-group-item ${this.props.isActive ? "active" : ""}`;
  }

  handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.props.handleClick(this.props.id);
  };
}
