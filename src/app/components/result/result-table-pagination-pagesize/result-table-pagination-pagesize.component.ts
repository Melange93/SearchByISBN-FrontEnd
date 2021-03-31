import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-result-table-pagination-pagesize',
  templateUrl: './result-table-pagination-pagesize.component.html',
  styleUrls: ['./result-table-pagination-pagesize.component.css']
})
export class ResultTablePaginationPagesizeComponent implements OnInit {
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
