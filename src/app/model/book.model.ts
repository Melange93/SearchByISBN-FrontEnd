import {CoverType} from './coverType.model';
import {Edition} from './edition.model';

export class BookComponent {
  isbn13: string;
  author: string;
  title: string;
  publisher: string;
  editions: Edition[];
  coverType: CoverType;
}
