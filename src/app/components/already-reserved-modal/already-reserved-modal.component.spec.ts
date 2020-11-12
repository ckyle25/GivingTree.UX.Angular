import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyReservedModalComponent } from './already-reserved-modal.component';

describe('AlreadyReservedModalComponent', () => {
  let component: AlreadyReservedModalComponent;
  let fixture: ComponentFixture<AlreadyReservedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyReservedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyReservedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
