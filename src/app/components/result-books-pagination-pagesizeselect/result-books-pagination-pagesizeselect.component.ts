import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PaginationModel} from '../model/pagination.model';

@Component({
  selector: 'app-result-books-pagination-pagesizeselect',
  templateUrl: './result-books-pagination-pagesizeselect.component.html',
  styleUrls: ['./result-books-pagination-pagesizeselect.component.css']
})
export class ResultBooksPaginationPagesizeselectComponent implements OnInit {
  @Output() changeBookPerPage = new EventEmitter<number>(true);
  bookPerPage: number;
  bookPerPageOption = [
    {value: 10},
    {value: 20},
    {value: 50},
    {value: 100}
  ];

  constructor() {
  }

  ngOnInit() {
    this.bookPerPage = 10;
  }

  setBookPerPage(pageSize: number): void {
    this.bookPerPage = pageSize;
    this.changeBookPerPage.emit(this.bookPerPage);
  }
}
