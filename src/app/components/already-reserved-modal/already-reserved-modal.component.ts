import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';

@Component({
  selector: 'already-reserved-modal',
  templateUrl: './already-reserved-modal.component.html',
  styleUrls: ['./already-reserved-modal.component.scss']
})
export class AlreadyReservedModalComponent implements OnInit {

  innerWidth: number = window.innerWidth;

  constructor(public activeModal: ActiveModal,
              public store: Store<IGlobalState>,
              private mainActionCreators: MainActionCreators) {}

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
    this.store.dispatch(this.mainActionCreators.getCards());
  }

  cancel() {
      this.activeModal.dismiss();
  }
}
