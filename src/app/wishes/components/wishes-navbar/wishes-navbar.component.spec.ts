import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishesNavbarComponent } from './wishes-navbar.component';

describe('WishesNavbarComponent', () => {
  let component: WishesNavbarComponent;
  let fixture: ComponentFixture<WishesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
