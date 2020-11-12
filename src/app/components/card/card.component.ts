import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HcModal, ModalOptions, ModalService } from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { IGlobalState } from 'src/app/models/global-state';
import { MainActionCreators } from 'src/app/redux/actions/main-actions';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';

@HostListener('window:resize', ['$event'])
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  innerWidth: number = window.innerWidth;
  result: any;

  @Input() card: Card = new Card();
  @Input() searching: boolean = false;

  constructor(private modalService: ModalService,
              public store: Store<IGlobalState>,
              private mainActionCreators: MainActionCreators,
              public router: Router) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  reserveCard() {
    let options: ModalOptions = {
      data: this.card.cardid,
      ignoreEscapeKey: true,
      ignoreOverlayClick: true,
      size: 'lg'
    };
    let subModal: HcModal<ReserveModalComponent> = this.modalService.open(ReserveModalComponent, options);
    subModal.result.subscribe(res => {
      this.result = res
    });
  }

  releaseCard() {
    this.store.dispatch(this.mainActionCreators.releaseCard(this.card.cardid))
    setTimeout(() => this.router.navigate(['landing/list']),1000) 
    // this.store.dispatch(this.mainActionCreators.getCards())
  }
}
