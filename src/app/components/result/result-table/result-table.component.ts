import {Component, Input, OnInit, Output, Pipe} from '@angular/core';

import {BookComponent} from '../../../model/book.model';
import {SearchService} from '../../../service/search.service';
import {PaginationModel} from '../../../model/pagination.model';
import {EventEmitter} from 'events';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-result-table',
  templateUrl: 'result-table.component.html',
  providers: [SearchService]
})

export class ResultTableComponent implements OnInit {
  @Output() detailsBookISBN: string;
  @Input() showBooks: Map<number, BookComponent>;
  bookHeaders = [
    'isbn13',
    'title',
    'author',
    'publisher'
  ];

  constructor() {
  }

  ngOnInit() {}

  onDetails(bookISBN: string) {
    console.log(bookISBN);
  }

  getKeys(showBooks: Map<number, BookComponent>): number[] {
    console.log(showBooks);
    return Array.from(showBooks.keys());
  }
}
