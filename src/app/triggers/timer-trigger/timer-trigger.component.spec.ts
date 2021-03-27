import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimerTriggerComponent } from './timer-trigger.component';

describe('TimerTriggerComponent', () => {
  let component: TimerTriggerComponent;
  let fixture: ComponentFixture<TimerTriggerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerTriggerComponent ],
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
