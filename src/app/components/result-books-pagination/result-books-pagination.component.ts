import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginationModel} from '../model/pagination.model';

@Component({
  selector: 'app-result-books-pagination',
  templateUrl: './result-books-pagination.component.html',
  styleUrls: ['./result-books-pagination.component.css']
})
export class ResultBooksPaginationComponent implements OnInit {
  @Output() changePage = new EventEmitter<PaginationModel>(true);
  @Input() numberOfBooks: number;
  bookPerPage: number;
  maxPage: number;
  currentPage = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.bookPerPage = 10;
    this.maxPage = this.calculateMaxPage();
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.emitChangePageEvent();
  }

  onPageSizeChange(bookPerPage: number) {
    this.bookPerPage = bookPerPage;
    this.currentPage = 1;
    this.maxPage = this.calculateMaxPage();
    this.emitChangePageEvent();
  }

  emitChangePageEvent(): void {
    const fromIndex = this.calculateFromIndex();
    const toIndex = this.calculateToIndex();
    const pagination = {
      fromIndex,
      toIndex
    };
    this.changePage.emit(pagination);
  }

  private calculateMaxPage(): number {
    return Math.ceil(this.numberOfBooks / this.bookPerPage);
  }

  private calculateFromIndex(): number {
    return this.currentPage * this.bookPerPage - this.bookPerPage;
  }

  private calculateToIndex(): number {
    return this.currentPage * this.bookPerPage;
  }
}
