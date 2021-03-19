import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBooksPaginationComponent } from './result-books-pagination.component';

describe('ResultBooksPaginationComponent', () => {
  let component: ResultBooksPaginationComponent;
  let fixture: ComponentFixture<ResultBooksPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultBooksPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBooksPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
