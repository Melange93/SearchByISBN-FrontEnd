import {TestBed, inject} from '@angular/core/testing';

import {SimpleSearchFieldComponent} from './simple-search-field.component';

describe('a simple-search-field component', () => {
  let component: SimpleSearchFieldComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimpleSearchFieldComponent
      ]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([SimpleSearchFieldComponent], (SimpleSearchFieldComponent) => {
    component = SimpleSearchFieldComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
