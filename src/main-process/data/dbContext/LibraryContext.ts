import { app } from 'electron';
import * as DataStore from 'nedb';

export class LibraryContext {
  db: DataStore;

  constructor() {
    const theUserDatPath: string = app.getPath("userData");

    this.db = new DataStore({
      filename: `${theUserDatPath}/libraries.db`,
      autoload: true
    });
  }

  getAll = (): Models.Library[] => {
    return this.db.getAllData();
  };

  add = (theLibrary: Models.Library) => {
    this.db.insert(theLibrary);
  };
}
``