import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { ListComponent } from './components/list/list.component';
import { ReservedListComponent } from './components/reserved-list/reserved-list.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: MainLandingComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: ListComponent },
    { path: 'reserved', component: ReservedListComponent },
    { path: 'admin', component: AdminComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
