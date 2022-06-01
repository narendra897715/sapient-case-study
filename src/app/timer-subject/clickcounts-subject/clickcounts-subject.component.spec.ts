import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcountsSubjectComponent } from './clickcounts-subject.component';

describe('ClickcountsSubjectComponent', () => {
  let component: ClickcountsSubjectComponent;
  let fixture: ComponentFixture<ClickcountsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickcountsSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickcountsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
