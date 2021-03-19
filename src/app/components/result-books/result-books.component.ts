import {Component, Input, OnInit, Output} from '@angular/core';

import {BookComponent} from '../model/book.model';
import {SearchService} from '../service/search.service';
import {PaginationModel} from '../model/pagination.model';

@Component({
  selector: 'result-books',
  templateUrl: 'result-books.component.html',
  providers: [SearchService]
})

export class ResultBooksComponent implements OnInit {
  @Input() books: Array<BookComponent>;
  @Output() detailsBookISBN: string;
  showBooks: Array<BookComponent>;
  startIndex = 0;
  endIndex = 10;
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
    this.showBooks = this.books.slice(this.startIndex, this.endIndex);
    this.numberOfBooks = this.books.length;
  }

  onDetails(bookISBN: string) {
    this.detailsBookISBN = bookISBN;
    console.log(this.detailsBookISBN);
  }

  onChangePage(indexes: PaginationModel) {
    this.showBooks = this.books.slice(indexes.fromIndex, indexes.toIndex);
  }
}
