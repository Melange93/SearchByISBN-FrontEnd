import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBooksPaginationPagesizeselectComponent } from './result-books-pagination-pagesizeselect.component';

describe('ResultBooksPaginationPagesizeselectComponent', () => {
  let component: ResultBooksPaginationPagesizeselectComponent;
  let fixture: ComponentFixture<ResultBooksPaginationPagesizeselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultBooksPaginationPagesizeselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBooksPaginationPagesizeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
