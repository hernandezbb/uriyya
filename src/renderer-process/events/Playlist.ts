import { ipcRenderer } from "electron";

export function getAll(): ViewModels.Playlist[] {
  return ipcRenderer.sendSync("getAllPlaylists", {});
}

export function getSongs(thePlaylistId: number): ViewModels.Song[] {
  return [{ id: 1, name: "Song 1" }];
}
