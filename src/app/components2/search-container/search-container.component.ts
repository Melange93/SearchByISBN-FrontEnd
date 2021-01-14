import { Component, OnInit } from '@angular/core';

import { Book } from '../../components2/model/book.model';
import { SearchService } from '../service/search.service';

@Component({
	selector: 'search-container',
	templateUrl: 'search-container.component.html',
	providers: [SearchService]
})

export class SearchContainerComponent implements OnInit {

	private searchISBN: string;
	books: Book[];

	constructor(
		private searchService: SearchService
	) { }

	ngOnInit() { }

	newSearchISBN(ISBN: string) {
		this.searchISBN = ISBN.trim();
		this.books = [];
		this.searchService.getSimpleSearchList(this.searchISBN).subscribe((res) => {
			this.books.push(res);
		});
	}
}