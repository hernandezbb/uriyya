import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PlayList } from './Playlist/PlayList';
import 'tailwindcss/tailwind.css';
import { song } from './Playlist/song';

require('./app.css');

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function App(): JSX.Element {
  const songs: song[] = [
    { id: 1, name: 'Song 1', isSelected: false },
    { id: 2, name: 'Song 2', isSelected: false },
    { id: 3, name: 'Song 3', isSelected: false },
    { id: 4, name: 'Song 4', isSelected: false },
  ];

  return (
    <main>
      <PlayList songs={songs} />
    </main>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();
