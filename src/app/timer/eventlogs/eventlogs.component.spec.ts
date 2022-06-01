import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlogsComponent } from './eventlogs.component';

describe('EventlogsComponent', () => {
  let component: EventlogsComponent;
  let fixture: ComponentFixture<EventlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
