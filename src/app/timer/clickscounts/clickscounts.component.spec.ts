import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickscountsComponent } from './clickscounts.component';

describe('ClickscountsComponent', () => {
  let component: ClickscountsComponent;
  let fixture: ComponentFixture<ClickscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
