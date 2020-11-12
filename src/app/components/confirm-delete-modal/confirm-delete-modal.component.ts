import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';

@Component({
  selector: 'confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.scss']
})
export class ConfirmDeleteModalComponent implements OnInit {

  constructor(public activeModal: ActiveModal,
              public store: Store<IGlobalState>,
              private mainActionCreators: MainActionCreators) {}

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
    this.store.dispatch(this.mainActionCreators.deleteCard(this.activeModal.data))
  }

  cancel() {
      this.activeModal.dismiss();
  }
}
