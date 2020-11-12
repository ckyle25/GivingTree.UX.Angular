import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmrActionButtonComponent } from './emr-action-button.component';

describe('EmrActionButtonComponent', () => {
  let component: EmrActionButtonComponent;
  let fixture: ComponentFixture<EmrActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmrActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmrActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
