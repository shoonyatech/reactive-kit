import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManualTriggerComponent } from './manual-trigger.component';

describe('ManualTriggerComponent', () => {
  let component: ManualTriggerComponent;
  let fixture: ComponentFixture<ManualTriggerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualTriggerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
