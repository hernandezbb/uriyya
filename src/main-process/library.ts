import * as fs from "fs";
import * as path from "path";
import { dialog } from "electron";

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
  constructor() {}
  Import() {
    dialog.showOpenDialog(
      {
        title: "Select a directory",
        properties: ["openDirectory"]
      },
      theSelectedDirectories => {
        if (theSelectedDirectories) {
          var theSelectedPath = getTheSelectedPath(theSelectedDirectories);
          getFiles(theSelectedPath);
        }
      }
    );
  }
}

function getTheSelectedPath(theSelectedDirectories: string[]) {
  return theSelectedDirectories[0];
}

function getFiles(theDirectoryPath: string) {
  fs.readdir(theDirectoryPath, function(err, theItems) {
    if (theItems) {
      theItems = filterHiddenItems(theItems);

      theItems.forEach(theItem => {
        var theFullPath = theDirectoryPath + "/" + theItem;
        if (isASong(theFullPath)) {
          console.log(theFullPath);
        } else {
          getFiles(theFullPath);
        }
      });
    }
  });
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
