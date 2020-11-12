import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';

@Component({
  selector: 'release-card-modal',
  templateUrl: './release-card-modal.component.html',
  styleUrls: ['./release-card-modal.component.scss']
})
export class ReleaseCardModalComponent implements OnInit {

  emailAddress = new FormControl('', [Validators.email, Validators.required]);
  public myCards: Card[] = [];

  constructor(public store: Store<IGlobalState>,
    private mainActionCreators: MainActionCreators) { }

  ngOnInit() {
    this.store.dispatch(this.mainActionCreators.getCards())
  }

  searchCards() {
    this.store.select(state => state.main).subscribe(main => this.myCards = main.allCards.filter(card => card.reservedemailtxt == this.emailAddress.value));
  }

  getClass(ind: number): string {
    const cardStyle = `pop-in-${ind}`
    return cardStyle;
  }
}
