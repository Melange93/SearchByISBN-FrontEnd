import { TestBed, inject } from '@angular/core/testing';

import { ResultBooksComponent } from './result-books.component';

describe('a result-books component', () => {
	let component: ResultBooksComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ResultBooksComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ResultBooksComponent], (ResultBooksComponent) => {
		component = ResultBooksComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});