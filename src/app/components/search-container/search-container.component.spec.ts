import {TestBed, inject} from '@angular/core/testing';

import {SearchContainerComponent} from './search-container.component';

describe('a search-container component', () => {
  let component: SearchContainerComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchContainerComponent
      ]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([SearchContainerComponent], (SearchContainerComponent) => {
    component = SearchContainerComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
