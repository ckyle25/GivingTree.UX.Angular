import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { WishesLandingComponent } from './components/wishes-landing/wishes-landing.component';
import { WishesNavbarComponent } from './components/wishes-navbar/wishes-navbar.component';
import { WishesRoutingModule } from './wishes-routing.module';

@NgModule({
  declarations: [
    WishesLandingComponent,
    WishesNavbarComponent
  ],
  imports: [
    SharedModule,
    WishesRoutingModule,
    EffectsModule.forFeature([])
  ],
  providers: [  ]
})
export class CaCommunityCareModule {}
