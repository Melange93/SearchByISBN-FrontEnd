import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofhLogoComponent } from './bofh-logo.component';

describe('BofhLogoComponent', () => {
  let component: BofhLogoComponent;
  let fixture: ComponentFixture<BofhLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofhLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofhLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
