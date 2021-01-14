import { CoverType } from './coverType.model';
import { Edition } from './edition.model';

export class Book {
	isbn: string;
	author: string;
	title: string;
	publisher: string;
	editions: Edition[];
	coverType: CoverType;
}