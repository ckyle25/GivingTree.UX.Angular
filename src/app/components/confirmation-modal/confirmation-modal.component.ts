import { Component, HostListener, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';

@HostListener('window:resize', ['$event'])
@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

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
