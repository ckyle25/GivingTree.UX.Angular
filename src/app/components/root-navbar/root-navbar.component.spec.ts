import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootNavbarComponent } from './root-navbar.component';

describe('RootNavbarComponent', () => {
  let component: RootNavbarComponent;
  let fixture: ComponentFixture<RootNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
