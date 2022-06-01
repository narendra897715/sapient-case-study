import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSubjectComponent } from './counter-subject.component';

describe('CounterSubjectComponent', () => {
  let component: CounterSubjectComponent;
  let fixture: ComponentFixture<CounterSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
