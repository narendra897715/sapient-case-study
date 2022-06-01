import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSubjectComponent } from './events-subject.component';

describe('EventsSubjectComponent', () => {
  let component: EventsSubjectComponent;
  let fixture: ComponentFixture<EventsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
