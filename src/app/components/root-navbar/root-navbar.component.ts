import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';
import { HcModal, ModalOptions, ModalService } from '@healthcatalyst/cashmere';
import { AdminPasswordModalComponent } from '../admin-password-modal/admin-password-modal.component';

@Component({
  selector: 'root-navbar',
  templateUrl: './root-navbar.component.html',
  styleUrls: ['./root-navbar.component.scss']
})
export class RootNavbarComponent implements OnInit {

  public userName: string;
  public logoutUrl: string;
  public result: string;

  constructor(public store: Store<IGlobalState>,
              private modalService: ModalService) { }

  ngOnInit() {
    this.logoutUrl = `${environment.serverUrl}auth/logout`;
  }

  adminLogin() {
    let options: ModalOptions = {
      data: 'I got this data from the class that opened me',
      ignoreEscapeKey: true,
      ignoreOverlayClick: true,
      size: 'lg'
    };
    let subModal: HcModal<AdminPasswordModalComponent> = this.modalService.open(AdminPasswordModalComponent, options);
    subModal.result.subscribe(res => {
      this.result = res
    });
  }
}
