import {NgModule} from '@angular/core';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { CashmereModule } from '../cashmere/cashmere.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    LineGraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CashmereModule
  ],
  declarations: [
    LineGraphComponent
  ],
  providers: [

  ]
})
export class ChartingModule {}
