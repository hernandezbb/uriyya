import { Repository } from "../../data/getLibraries/Repository";
import { LibrariesData } from "../../busines/getLibraries/LibrariesData";

export class Data implements LibrariesData {
  constructor() {}
  libraries: Models.Library[] = new Repository().get();
}
