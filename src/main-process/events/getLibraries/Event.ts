import { ipcMain } from "electron";
import { Data } from "./Data";
import { Libraries } from "../../busines/getLibraries/Libraries";

ipcMain.on("get-all-libraries", (event: any) => {
  const theLibraries: Libraries = new Libraries(new Data());
  event.returnValue = theLibraries.get();
});
