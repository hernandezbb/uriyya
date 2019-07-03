import { ipcRenderer } from "electron";

export function getSongsByPlaylistId(thePlaylistId: number): ViewModels.Song[] {
  return [{ id: 1, name: "Song 1" }];
}

export function getSongsByLibraryId(theLibraryId: number): ViewModels.Song[] {
  return [{ id: 2, name: "Song 2" }];
}
