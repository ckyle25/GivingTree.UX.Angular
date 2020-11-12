import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';

@Component({
  selector: 'add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent implements OnInit {

  cardTitle = new FormControl('', [Validators.required]);
  cardDsc = new FormControl('');
  familyId = new FormControl('', [Validators.required]);

  constructor(public activeModal: ActiveModal,
              public store: Store<IGlobalState>,
              private mainActionCreators: MainActionCreators) {}

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
    this.store.dispatch(this.mainActionCreators.addCard(parseInt(this.familyId.value), this.cardTitle.value, this.cardDsc.value))
  }

  cancel() {
      this.activeModal.dismiss();
  }


}
