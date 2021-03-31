import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTablePaginationPagesizeComponent } from './result-table-pagination-pagesize.component';

describe('ResultBooksPaginationPagesizeselectComponent', () => {
  let component: ResultTablePaginationPagesizeComponent;
  let fixture: ComponentFixture<ResultTablePaginationPagesizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTablePaginationPagesizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTablePaginationPagesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
