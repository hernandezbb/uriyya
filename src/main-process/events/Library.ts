import { ipcMain } from "electron";

ipcMain.on("get-all-libraries", (event: any) => {
  // event.returnValue = [
  //   { id: 1, name: "Library 1" },
  //   { id: 2, name: "Library 2" },
  //   { id: 3, name: "Library 3" }
  // ];
  event.returnValue = [];
});
