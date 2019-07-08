import { LibraryContext } from "../dbContext/LibraryContext";

export class Repository {
  theContext: LibraryContext;

  constructor() {
    this.theContext = new LibraryContext();
  }

  get = (): Models.Library[] => {
    return this.theContext.db.getAllData();
  };
}
