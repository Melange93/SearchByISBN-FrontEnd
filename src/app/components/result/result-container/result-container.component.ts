import {Component, Input, OnInit, Output} from '@angular/core';
import {BookComponent} from '../../../model/book.model';
import {PaginationModel} from '../../../model/pagination.model';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css']
})
export class ResultContainerComponent implements OnInit {
  @Input() books: Array<BookComponent>;
  @Output() detailsBookISBN: string;
  showBooks: Map<number, BookComponent>;
  numberOfBooks: number;

  constructor() {
  }

  ngOnInit() {
    const startIndex = 0;
    const endIndex = 10;
    this.showBooks = this.createShowBooks(startIndex, endIndex);
    this.numberOfBooks = this.books.length;
  }

  onChangePage(indexes: PaginationModel) {
    this.showBooks = this.createShowBooks(indexes.fromIndex, indexes.toIndex);
    console.log('show book size' + this.showBooks.size);
  }

  createShowBooks(startIndex: number, endIndex: number): Map<number, BookComponent> {
    const showBooks = new Map<number, BookComponent>();
    for (let i = startIndex; i < endIndex; i++) {
      showBooks.set(i + 1, this.books[i]);
    }
    return showBooks;
  }
}
