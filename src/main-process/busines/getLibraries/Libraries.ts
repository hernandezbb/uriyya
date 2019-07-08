import { LibrariesData } from "./LibrariesData";

export class Libraries {
  theLibrariesData: LibrariesData;

  constructor(theLibrariesData: LibrariesData) {
    this.theLibrariesData = theLibrariesData;
  }

  get = (): Models.Library[] => {
    return this.theLibrariesData.libraries;
  };
}
