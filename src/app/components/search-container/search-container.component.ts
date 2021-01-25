import {Component, Input, OnInit} from '@angular/core';

import {BookComponent} from '../model/book.model';
import {SearchService} from '../service/search.service';
import {SimpleSearchForm} from '../model/simple-search.form';

@Component({
  selector: 'search-container',
  templateUrl: 'search-container.component.html',
  providers: [SearchService]
})

export class SearchContainerComponent implements OnInit {

  @Input() search: SimpleSearchForm;

  books: BookComponent[];

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  newSimpleSearch(search: SimpleSearchForm) {
    console.log(search.searchInput.toString());
    console.log(search.searchOption.toString());
    this.books = [];
    this.searchService.getSimpleSearchList(this.search.searchInput).subscribe((res) => {
      this.books.push(res);
    });
  }
}
