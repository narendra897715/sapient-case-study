import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsSubjectComponent } from './actions-subject.component';

describe('ActionsSubjectComponent', () => {
  let component: ActionsSubjectComponent;
  let fixture: ComponentFixture<ActionsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
