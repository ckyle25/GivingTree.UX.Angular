import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishesLandingComponent } from './components/wishes-landing/wishes-landing.component';



const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: WishesLandingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishesRoutingModule { }
