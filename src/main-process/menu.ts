import { app, Menu } from 'electron';

import { Library } from './library';

const theTemplate: Electron.MenuItemConstructorOptions[] = [
  {
    label: "File",
    submenu: [
      {
        label: "Library",
        submenu: [
          {
            label: "Import",
            click() {
              new Library().Import();
            }
          }
        ]
      }
    ]
  },
  {
    label: "Edit",
    submenu: [
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  },
  {
    role: "window",
    submenu: [{ role: "minimize" }, { role: "close" }]
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click() {
          require("electron").shell.openExternal(
            "https://github.com/hernandezbb/uriyya"
          );
        }
      }
    ]
  }
];

if (process.platform === "darwin") {
  theTemplate.unshift({
    label: app.getName().toUpperCase(),
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" }
    ]
  });

  // Edit menu
  theTemplate[2].submenu = [
    { role: "redo" },
    { type: "separator" },
    { role: "cut" },
    { role: "copy" },
    { role: "paste" },
    { role: "pasteandmatchstyle" },
    { role: "delete" },
    { role: "selectall" },
    { type: "separator" },
    {
      label: "Speech",
      submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }]
    }
  ];

  // Window menu
  theTemplate[4].submenu = [
    { role: "close" },
    { role: "minimize" },
    { role: "zoom" },
    { type: "separator" },
    { role: "front" }
  ];
}

const theMenu: Menu = Menu.buildFromTemplate(theTemplate);
Menu.setApplicationMenu(theMenu);
