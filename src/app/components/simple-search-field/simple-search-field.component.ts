import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SimpleSearchForm} from '../model/simple-search.form';

@Component({
  selector: 'simple-search-field',
  templateUrl: 'simple-search-field.component.html'
})

export class SimpleSearchFieldComponent implements OnInit {

  @Output() search = new EventEmitter<SimpleSearchForm>();
  private searchInput = new EventEmitter<string>();
  private searchOption = new EventEmitter<string>();
  private selectedOption = 0;
  private searchOptions = [
    {id: 0, name: 'isbn'},
    {id: 1, name: 'title'},
    {id: 2, name: 'author'},
    {id: 3, name: 'publisher'}
  ];

  ngOnInit(): void {
  }

  onSearch(searchInput: string): void {
    this.searchInput.emit(searchInput);
    this.searchOption.emit(this.searchOptions[this.selectedOption].name);
  }
}
