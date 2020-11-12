import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseCardModalComponent } from './release-card-modal.component';

describe('ReleaseCardModalComponent', () => {
  let component: ReleaseCardModalComponent;
  let fixture: ComponentFixture<ReleaseCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseCardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
