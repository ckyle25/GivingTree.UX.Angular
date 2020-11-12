import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';

@Component({
  selector: 'reserved-list',
  templateUrl: './reserved-list.component.html',
  styleUrls: ['./reserved-list.component.scss']
})
export class ReservedListComponent implements OnInit {
  public numberOfCards: any[] = [0,1,2,3,4,5,6,7];
  public cards: Card[] = [];
  public currentDelay: number = 0;

  constructor(public store: Store<IGlobalState>,
    private mainActionCreators: MainActionCreators) { }

  ngOnInit() {
    this.store.select(state => state.main).subscribe(main => this.cards = main.allCards.filter(card => card.reservedflg == 1));
    this.store.dispatch(this.mainActionCreators.getCards())
  }

  getClass(ind: number): string {
    const cardStyle = `pop-in-${ind}`
    return cardStyle;
  }
}
