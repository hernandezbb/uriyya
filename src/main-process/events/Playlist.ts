import { ipcMain } from "electron";

ipcMain.on("getAllPlaylists", (event: any) => {
  event.returnValue = [
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
    { id: 3, name: "Playlist 3" }
  ];
});
