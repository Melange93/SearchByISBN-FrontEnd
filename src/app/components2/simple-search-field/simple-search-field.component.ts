import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'simple-search-field',
	templateUrl: 'simple-search-field.component.html'
})

export class SimpleSearchFieldComponent implements OnInit {

	@Output() searchISBN = new EventEmitter<string>();

	ngOnInit(): void { }

	onSearch(ISBN: string): void {
		this.searchISBN.emit(ISBN);
	}
}