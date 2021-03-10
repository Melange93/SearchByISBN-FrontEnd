import {Component, Input, OnInit, Output} from '@angular/core';

import {BookComponent} from '../model/book.model';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'result-books',
  templateUrl: 'result-books.component.html',
  providers: [SearchService]
})

export class ResultBooksComponent implements OnInit {
  @Input() books: BookComponent[];
  @Output() detailsBookISBN: string;

  bookHeaders = [
    'isbn13',
    'title',
    'author',
    'publisher'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onDetails(bookISBN: string) {
    this.detailsBookISBN = bookISBN;
    console.log(this.detailsBookISBN);
  }
}
