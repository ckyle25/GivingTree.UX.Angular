import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashmereModule } from './modules/cashmere/cashmere.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmrActionButtonComponent } from './components/emr-action-button/emr-action-button.component';
import { ChartingModule } from './modules/charting/charting.module';
import { SafePipe } from './pipes/safe.pipe';
import { HttpService } from './services/http-service';
import { DualListBoxComponent } from './components/dual-list-box/dual-list-box.component';

@NgModule({
  exports: [
    CommonModule,
    CashmereModule,
    EmrActionButtonComponent,
    ChartingModule,
    DualListBoxComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CashmereModule,
    RouterModule,
    ChartingModule
  ],
  declarations: [
    SafePipe,
    EmrActionButtonComponent,
    DualListBoxComponent
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule {}
