import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { HcModal, ModalOptions, ModalService } from '@healthcatalyst/cashmere';
import { Card } from 'src/app/models/card';
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

  constructor(private modalService: ModalService) { }

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
}
