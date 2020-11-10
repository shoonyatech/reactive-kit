import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWindowComponent } from './code-window.component';

describe('CodeWindowComponent', () => {
  let component: CodeWindowComponent;
  let fixture: ComponentFixture<CodeWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
