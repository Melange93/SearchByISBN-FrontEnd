import {Component, Input, OnInit} from '@angular/core';

import {BookComponent} from '../model/book.model';
import {SearchService} from '../service/search.service';
import {SimpleSearchForm} from '../model/simple-search.form';

@Component({
  selector: 'search-container',
  templateUrl: 'search-container.component.html',
  providers: [SearchService],
  styleUrls: ['./search-container.component.css']
})

export class SearchContainerComponent implements OnInit {

  books: BookComponent[];

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  newSimpleSearch(search: SimpleSearchForm) {
    this.books = [];
    this.searchService.getSimpleSearchListByParam(search.searchOption.toString().toLowerCase(), search.searchInput.toString())
      .subscribe((res) =>
        res.forEach(value => this.books.push(value))
      );
  }
}
