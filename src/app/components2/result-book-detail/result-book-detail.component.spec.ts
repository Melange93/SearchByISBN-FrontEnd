import { TestBed, inject } from '@angular/core/testing';

import { ResultBookDetailComponent } from './result-book-detail.component';

describe('a result-book-detail component', () => {
	let component: ResultBookDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ResultBookDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ResultBookDetailComponent], (ResultBookDetailComponent) => {
		component = ResultBookDetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});