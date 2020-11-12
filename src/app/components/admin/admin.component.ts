import { Component, OnInit, ViewChild } from '@angular/core';
import { HcTableDataSource, HcSort, ModalService, HcModal, ModalOptions } from '@healthcatalyst/cashmere';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { IGlobalState } from 'src/app/models/global-state';
import { AddCardModalComponent } from '../add-card-modal/add-card-modal.component';
import { ConfirmDeleteModalComponent } from '../confirm-delete-modal/confirm-delete-modal.component';
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['cardid', 'familyid', 'cardtitletxt', 'carddsc', 'reservedflg', 'reservednm', 'reservedemailtxt', 'delete'];
  dataSource: HcTableDataSource<Card>;
  
  constructor(public store: Store<IGlobalState>,
              public modalService: ModalService) { }

  @ViewChild(HcSort)
  sort: HcSort;
  
  ngOnInit() {
    this.store.select(state => state.main).subscribe(main => this.dataSource = new HcTableDataSource(main.allCards));
    this.dataSource.sort = this.sort;
  }

  addCard() {
    let options: ModalOptions = {
      data: 'Add A Card',
      ignoreEscapeKey: true,
      ignoreOverlayClick: true,
      size: 'lg'
    };
    let subModal: HcModal<AddCardModalComponent> = this.modalService.open(AddCardModalComponent, options);
    subModal.result.subscribe(res => {});
  }

  deleteCard(cardid: number) {
    let options: ModalOptions = {
      data: cardid,
      ignoreEscapeKey: true,
      ignoreOverlayClick: true,
      size: 'lg'
    };
    let subModal: HcModal<ConfirmDeleteModalComponent> = this.modalService.open(ConfirmDeleteModalComponent, options);
    subModal.result.subscribe(res => {});
  }
}
