import { remote } from "electron";
const { Menu, MenuItem } = remote;

export function showContextMenu(): void {
  const menu: Electron.Menu = new Menu();
  menu.append(
    new MenuItem({
      label: "Add Library",
      click: () => {
        console.log("Add Library");
      }
    })
  );
  menu.append(
    new MenuItem({
      label: "Add Playlist",
      click: () => {
        console.log("Add Playlist");
      }
    })
  );

  menu.popup({ window: remote.getCurrentWindow() });
}
