import { Component, OnInit } from '@angular/core';

import { Book } from '../../components2/model/book.model';
import { SearchService } from '../../components2/service/search.service';

@Component({
	selector: 'app-books',
	templateUrl: 'book.component.html',
	providers: [SearchService]
})

export class BookComponent implements OnInit {
	books: Book[] = [];

	constructor(private bookService: SearchService) { }

	ngOnInit() {
	}
}