import * as React from 'react';
import { song } from './song';

interface ListItemProps {
  song: song;
  handleClick: (id: number) => void;
}

export function ListItem(props: ListItemProps): JSX.Element {
  const handleClick = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    event.preventDefault();
    props.handleClick(props.song.id);
  };

  return (
    <>
      <tr
        className={props.song.isSelected ? 'selected' : undefined}
        onClick={handleClick}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {props.song.name}
        </td>
      </tr>
    </>
  );
}
