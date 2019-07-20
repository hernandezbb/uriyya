import { dialog } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

import { LibraryContext } from './data/dbContext/LibraryContext';

const SONGS_EXTENSIONS = [
  ".mp3",
  ".wav",
  ".mpeg",
  ".aac",
  ".mp4",
  ".flac",
  ".mpeg"
];

export class Library {
  library: Models.Library;

  constructor() {
    this.library = new Models.Library();
  }

  Import = () => {
    dialog.showOpenDialog(
      {
        title: "Select a directory",
        properties: ["openDirectory"]
      },
      theSelectedDirectories => {
        if (theSelectedDirectories) {
          var theSelectedPath = getTheSelectedPath(theSelectedDirectories);
          this.library.path = theSelectedPath;
          this.library.name = theSelectedPath;

          var theSongs: Models.Song[] = getFiles(theSelectedPath);
          this.library.songs = theSongs;

          new LibraryContext().add(this.library);
        }
      }
    );
  };
}

function getTheSelectedPath(theSelectedDirectories: string[]) {
  return theSelectedDirectories[0];
}

function getFiles(theDirectoryPath: string): Models.Song[] {
  var theSongs: Models.Song[] = [];
  var theItems = fs.readdirSync(theDirectoryPath);
  if (theItems) {
    theItems = filterHiddenItems(theItems);
    theItems.forEach(theItem => {
      var theFullPath = theDirectoryPath + "/" + theItem;
      if (isASong(theFullPath)) {
        theSongs.push({ name: "", path: theFullPath });
      } else {
        getFiles(theFullPath);
      }
    });
  }
  return theSongs;
}

function filterHiddenItems(theItems: string[]) {
  return theItems.filter(thePath => !/(^|\/)\.[^\/\.]/g.test(thePath));
}

function isASong(thePath: string) {
  var theStat = fs.statSync(thePath);
  if (theStat.isFile()) {
    return isACompatibleSong(thePath);
  } else {
    return false;
  }
}

function isACompatibleSong(thePath: string) {
  var theExtension = getExtention(thePath);
  return SONGS_EXTENSIONS.includes(theExtension);
}

function getExtention(thePath: string) {
  return path.extname(thePath);
}
