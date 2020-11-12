import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPasswordModalComponent } from './admin-password-modal.component';

describe('AdminPasswordModalComponent', () => {
  let component: AdminPasswordModalComponent;
  let fixture: ComponentFixture<AdminPasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
