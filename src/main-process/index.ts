import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as os from "os";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    center: true,
    height: 680,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      scrollBounce: true
    },
    width: 935
  });

  mainWindow.loadFile("dist/index.html");

  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
  if (process.platform !== "darwin") {
    // app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

require("./menu");
