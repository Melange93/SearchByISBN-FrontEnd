import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookComponent} from '../model/book.model';
import {from} from 'rxjs';
import {PaginationModel} from '../model/pagination.model';

@Component({
  selector: 'app-result-books-pagination',
  templateUrl: './result-books-pagination.component.html',
  styleUrls: ['./result-books-pagination.component.css']
})
export class ResultBooksPaginationComponent implements OnInit {
  @Input() numberOfBooks: number;
  @Output() changePage = new EventEmitter<PaginationModel>(true);
  bookPerPage = 10;
  maxPage: number;
  currentPage = 1;

  constructor() {
  }

  ngOnInit() {
    this.maxPage = Math.ceil(this.numberOfBooks / this.bookPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
    const fromIndex = this.currentPage * this.bookPerPage - this.bookPerPage;
    const toIndex = this.currentPage * this.bookPerPage;
    const pagination = {
      fromIndex,
      toIndex
    };
    this.changePage.emit(pagination);
  }

}
