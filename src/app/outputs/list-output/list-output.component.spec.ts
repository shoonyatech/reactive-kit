import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListOutputComponent } from './list-output.component';

describe('ListOutputComponent', () => {
  let component: ListOutputComponent;
  let fixture: ComponentFixture<ListOutputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
