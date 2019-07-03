import { ipcRenderer } from "electron";

export function getAll(): ViewModels.Playlist[] {
  return ipcRenderer.sendSync("get-all-playlists", {});
}
