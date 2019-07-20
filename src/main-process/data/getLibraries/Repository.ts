import { LibraryContext } from '../dbContext/LibraryContext';

export class Repository {
  theContext: LibraryContext;

  constructor() {
    this.theContext = new LibraryContext();
  }

  get = (): Models.Library[] => {
    return [
      {
        id: 1,
        name: "Hello",
        path: "",
        songs: []
      }
    ];
    // return this.theContext.db.getAllData();
  };
}
