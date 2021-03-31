import {Component, Input, OnInit, Output} from '@angular/core';

import {BookComponent} from '../../../model/book.model';
import {SearchService} from '../../../service/search.service';
import {PaginationModel} from '../../../model/pagination.model';

@Component({
  selector: 'result-table',
  templateUrl: 'result-table.component.html',
  providers: [SearchService]
})

export class ResultTableComponent implements OnInit {
  @Input() books: Array<BookComponent>;
  @Output() detailsBookISBN: string;
  showBooks: Array<BookComponent>;
  startIndex: number;
  endIndex: number;
  numberOfBooks: number;
  bookHeaders = [
    'isbn13',
    'title',
    'author',
    'publisher'
  ];

  constructor() {
  }

  ngOnInit() {
    this.startIndex = 0;
    this.endIndex = 10;
    this.showBooks = this.books.slice(this.startIndex, this.endIndex);
    this.numberOfBooks = this.books.length;
  }

  onDetails(bookISBN: string) {
    this.detailsBookISBN = bookISBN;
    console.log(this.detailsBookISBN);
  }

  onChangePage(indexes: PaginationModel) {
    this.startIndex = indexes.fromIndex;
    this.endIndex = indexes.toIndex;
    this.showBooks = this.books.slice(this.startIndex, this.endIndex);
  }
}
