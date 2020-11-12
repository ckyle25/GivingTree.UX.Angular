import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as mainActions from '../actions/main-actions';
import { mergeMap, switchMap } from 'rxjs/operators';
import { MainService } from 'src/app/services/main-services';
import { Action } from 'src/app/shared/models/action';
import { Auth0Info } from 'src/app/models/auth-0-info';
import { HcModal, ModalOptions, ModalService } from '@healthcatalyst/cashmere';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/models/global-state';

@Injectable()
export class MainEffects {

  public currentUserAuth0Info: Auth0Info;

  constructor(
    private actions$: Actions,
    private mainService: MainService,
    private modalService: ModalService,
    private store: Store<IGlobalState>,
    private mainActionCreators: mainActions.MainActionCreators
  ) { }

  getCards$ = createEffect(() => this.actions$.pipe(
    ofType(mainActions.GET_CARDS || mainActions.RESERVE_CARD_SUCCESS),
    mergeMap(() => this.mainService.getCards()
      .then(res => ({type: mainActions.GET_CARDS_SUCCESS, payload: res}))
      .catch(reason => ({type: mainActions.GET_CARDS_ERROR})))
  ));

  reserveCard$ = createEffect(() => this.actions$.pipe(
    ofType(mainActions.RESERVE_CARD),
    mergeMap((action: Action) => {
      const body: any = {
        cardid: action.payload.cardid,
        name: action.payload.name,
        email: action.payload.email
      }
      return this.mainService.reserveCard(body.cardid, body.name, body.email)
        .then(res => {
          this.openConfirmation(1)
          return ({type: mainActions.RESERVE_CARD_SUCCESS, payload: res.responseText})
        })
        .catch(reason => ({type: mainActions.RESERVE_CARD_ERROR}))
    })));

  releaseCard$ = createEffect(() => this.actions$.pipe(
    ofType(mainActions.RELEASE_CARD),
    mergeMap((action: Action) => {
      const body: any = {
        cardid: action.payload.cardid,
      }
      return this.mainService.releaseCard(body.cardid)
        .then(res => ({type: mainActions.RELEASE_CARD_SUCCESS, payload: res.responseText}))
        .catch(reason => ({type: mainActions.RELEASE_CARD_ERROR}))
    })));

  addCard$ = createEffect(() => this.actions$.pipe(
    ofType(mainActions.ADD_CARD),
    mergeMap((action: Action) => {
      const body: any = {
        familyid: action.payload.familyid,
        cardtitletxt: action.payload.cardtitletxt,
        carddsc: action.payload.carddsc
      }
      return this.mainService.addCard(body.familyid, body.cardtitletxt, body.carddsc)
        .then(res => {
          this.store.dispatch(this.mainActionCreators.getCards())
          return ({type: mainActions.ADD_CARD_SUCCESS, payload: res.responseText})
        })
        .catch(reason => ({type: mainActions.ADD_CARD_ERROR}))
    })));

    deleteCard$ = createEffect(() => this.actions$.pipe(
      ofType(mainActions.DELETE_CARD),
      mergeMap((action: Action) => {
        const body: any = {
          cardid: action.payload.cardid,
        }
        return this.mainService.deleteCard(body.cardid)
          .then(res => {
            this.store.dispatch(this.mainActionCreators.getCards())
            return ({type: mainActions.DELETE_CARD_SUCCESS, payload: res.responseText})
          })
          .catch(reason => ({type: mainActions.DELETE_CARD_ERROR}))
      })));

  openConfirmation(data: any) {
    let subOptions: ModalOptions = {
      data: data,
      ignoreEscapeKey: true,
      ignoreOverlayClick: true,
      size: 'lg'
    };
    let subSubModal: HcModal<ConfirmationModalComponent> = this.modalService.open(ConfirmationModalComponent, subOptions);
  }
  // getUser$ = createEffect(() => this.actions$.pipe(
  //   ofType(mainActions.GET_USER),
  //   mergeMap((action: Action) => {
  //     this.currentUserAuth0Info = action.payload;
  //     return this.mainService.getUser(action.payload.auth0Id)
  //       .then(res => {
  //         let currentUserInfo: User = res;
  //         if (res.userId) {
  //           if (!res.firstName) {
  //             currentUserInfo.firstName = this.currentUserAuth0Info.firstName;
  //           }
  //           if (!res.lastName) {
  //             currentUserInfo.lastName = this.currentUserAuth0Info.lastName;
  //           }
  //           if (!res.email) {
  //             currentUserInfo.email = this.currentUserAuth0Info.email;
  //           }
  //           if (!res.image) {
  //             currentUserInfo.image = this.currentUserAuth0Info.image;
  //           }
  //           this.mainService.updateUser(currentUserInfo);
  //         }
  //         return ({type: mainActions.GET_USER_SUCCESS, payload: currentUserInfo});
  //       })
  //       .catch(() => ({type: mainActions.GET_USER_ERROR}));
  //   }
  // )));
}
