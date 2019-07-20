import { ipcRenderer } from 'electron';

export function getAll(): ViewModels.Library[] {
  const theLibraries = ipcRenderer.sendSync("get-all-libraries", []);
  return theLibraries;
}
