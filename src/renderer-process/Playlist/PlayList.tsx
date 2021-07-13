import * as React from 'react';
import { ListItem } from './ListItem';
import { song } from './song';

interface PlayListProps {
  songs?: song[];
}

export function PlayList(props: PlayListProps): JSX.Element {
  const [songs, setSongs] = React.useState(props.songs);

  const handlerSongClick = (theSongId: number): void => {
    // const theSong = songs.find((song) => song.id == theSongId);
    // theSong.isSelected = true;
    // const thePreviusSeleted = songs.find((song) => song.isSelected);
    // thePreviusSeleted.isSelected = false;
    // return setSongs([theSong, thePreviusSeleted, ...songs]);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
        </tr>
      </thead>
      <tbody id="tbSongs" className="bg-white divide-y divide-gray-200">
        {songs?.map((theSong) => (
          <ListItem
            key={theSong.id}
            song={theSong}
            handleClick={handlerSongClick}
          />
        ))}
      </tbody>
    </table>
  );
}
