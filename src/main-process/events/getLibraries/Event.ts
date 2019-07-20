import { ipcMain } from 'electron';

import { Libraries } from '../../busines/getLibraries/Libraries';
import { Data } from './Data';

ipcMain.on("get-all-libraries", (event: any) => {
  // const theLibraries: Libraries = new Libraries(new Data());
  // event.returnValue = theLibraries.get();
  event.returnValue = [{ id: 1, name: "Library 1" }, { id: 2, name: "Library 2" }, { id: 3, name: "Library 3" }];
});
