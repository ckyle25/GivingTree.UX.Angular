// Packages
import { ActionReducerMap, StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';

// Services & Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleModalModule } from 'ngx-simple-modal';

// Misc
import { IGlobalState } from 'src/app/models/global-state';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { RootNavbarComponent } from './components/root-navbar/root-navbar.component';
import { mainReducer } from './redux/reducer/main-reducer';
import { MainActionCreators } from './redux/actions/main-actions';
import { MainEffects } from './redux/effects/main-effects';
import { MainService } from './services/main-services';
import { InitialLoadComponent } from './components/initial-load/initial-load.component';
import { ListComponent } from './components/list/list.component';
import { ReservedListComponent } from './components/reserved-list/reserved-list.component';
import { CardComponent } from './components/card/card.component';
import { ReserveModalComponent } from './components/reserve-modal/reserve-modal.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { AdminPasswordModalComponent } from './components/admin-password-modal/admin-password-modal.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { AddCardModalComponent } from './components/add-card-modal/add-card-modal.component';
import { AlreadyReservedModalComponent } from './components/already-reserved-modal/already-reserved-modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { ReleaseCardModalComponent } from './components/release-card-modal/release-card-modal.component';

export const rootReducer: ActionReducerMap<IGlobalState> = {
    main: mainReducer
}

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    RootNavbarComponent,
    InitialLoadComponent,
    ListComponent,
    ReservedListComponent,
    CardComponent,
    ReserveModalComponent,
    ConfirmationModalComponent,
    AdminPasswordModalComponent,
    AdminComponent,
    ConfirmDeleteModalComponent,
    AddCardModalComponent,
    AlreadyReservedModalComponent,
    ErrorModalComponent,
    ReleaseCardModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    SimpleModalModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([MainEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    MainActionCreators,
    MainService
  ],
  entryComponents: [
    ReserveModalComponent,
    ConfirmationModalComponent,
    AdminPasswordModalComponent,
    ConfirmDeleteModalComponent,
    AddCardModalComponent,
    AlreadyReservedModalComponent,
    ErrorModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
