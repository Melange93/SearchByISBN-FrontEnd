import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../components2/model/book.model';
import { SearchService } from '../service/search.service';

@Component({
	selector: 'result-books',
	templateUrl: 'result-books.component.html',
	providers: [SearchService]
})

export class ResultBooksComponent implements OnInit {
	@Input() books: Book[];

	constructor() { }

	ngOnInit() { }
}