import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss']
})
export class MainLandingComponent implements OnInit {

  public firstDisplay: boolean = true;
  public loginUrl: string;

  constructor(public store: Store<IGlobalState>,
              public mainActionCreators: MainActionCreators) { }

  ngOnInit() {
    this.store.dispatch(this.mainActionCreators.getCards());
    this.loginUrl = `${environment.serverUrl}auth/login`;
    setTimeout(() => {
      this.firstDisplay = false;
     }, 4000);
  }
}
