import { LibrariesData } from '../../busines/getLibraries/LibrariesData';
import { Repository } from '../../data/getLibraries/Repository';

export class Data implements LibrariesData {
  constructor() {}
  libraries: Models.Library[] = new Repository().get();
}
