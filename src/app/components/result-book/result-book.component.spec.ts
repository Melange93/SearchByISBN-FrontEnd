import { TestBed, inject } from '@angular/core/testing';

import { ResultBookComponent } from './result-book.component';

describe('a result-book component', () => {
	let component: ResultBookComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ResultBookComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ResultBookComponent], (ResultBookComponent) => {
		component = ResultBookComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});