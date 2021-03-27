import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraphicalStreamComponent } from './graphical-stream.component';

describe('GraphicalStreamComponent', () => {
  let component: GraphicalStreamComponent;
  let fixture: ComponentFixture<GraphicalStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
