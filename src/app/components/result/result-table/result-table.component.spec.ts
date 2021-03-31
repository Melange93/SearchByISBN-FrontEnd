import {TestBed, inject} from '@angular/core/testing';

import {ResultTableComponent} from './result-table.component';

describe('a result-books component', () => {
  let component: ResultTableComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResultTableComponent
      ]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([ResultTableComponent], (ResultBooksComponent) => {
    component = ResultBooksComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
