import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ActiveModal, HcModal, ModalOptions, ModalService} from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'reserve-modal',
  templateUrl: './reserve-modal.component.html',
  styleUrls: ['./reserve-modal.component.scss']
})
export class ReserveModalComponent implements OnInit {

  emailAddress = new FormControl('', [Validators.email, Validators.required]);
  name = new FormControl('', [Validators.required]);

  constructor(public activeModal: ActiveModal,
              public store: Store<IGlobalState>,
              private mainActionCreators: MainActionCreators) {}

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
    this.store.dispatch(this.mainActionCreators.reserveCard(this.activeModal.data, this.name.value, this.emailAddress.value))
    // this.openConfirmation();
  }

  cancel() {
      this.activeModal.dismiss();
  }

}
