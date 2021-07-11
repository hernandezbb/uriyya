import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

function createWindow() {
  mainWindow = new BrowserWindow({
    center: true,
    height: 680,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      scrollBounce: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    width: 935,
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
  if (process.platform !== 'darwin') {
    // app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

require('./menu');
require('./events/getLibraries/Event');
require('./events/getPlaylists/Event');
