import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTriggerComponent } from './timer-trigger.component';

describe('TimerTriggerComponent', () => {
  let component: TimerTriggerComponent;
  let fixture: ComponentFixture<TimerTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
