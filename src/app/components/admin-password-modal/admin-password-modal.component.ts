import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiveModal } from '@healthcatalyst/cashmere';

@Component({
  selector: 'admin-password-modal',
  templateUrl: './admin-password-modal.component.html',
  styleUrls: ['./admin-password-modal.component.scss']
})
export class AdminPasswordModalComponent implements OnInit {

  password = new FormControl('', [Validators.required]);

  constructor(public activeModal: ActiveModal,
              private router: Router) {}

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
    if (this.password.value === 'rs2020') {
      this.router.navigate(['landing/admin'])
    } else {
      alert('Password Incorrect')
      this.router.navigate(['landing/list'])
    }
  }

  cancel() {
      this.activeModal.dismiss();
      this.router.navigate(['landing/list'])
  }

}
