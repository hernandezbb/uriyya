import { ipcMain } from 'electron';

import { Libraries } from '../../busines/getLibraries/Libraries';
import { Data } from './Data';

ipcMain.on("get-all-libraries", (event: any) => {
  const theLibraries: Libraries = new Libraries(new Data());
  event.returnValue = theLibraries.get();
});
