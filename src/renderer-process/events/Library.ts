import { ipcRenderer } from "electron";

export function getAll(): ViewModels.Playlist[] {
  return ipcRenderer.sendSync("getAllLibraries", {});
}

export function getSongs(theLibraryId: number): ViewModels.Song[] {
  return [{ id: 2, name: "Song 2" }];
}
