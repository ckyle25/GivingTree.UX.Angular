import { Injectable } from '@angular/core';
import { Action } from 'src/app/shared/models/action';
import { Auth0Info } from 'src/app/models/auth-0-info';

// Action Creators
export const INITIALIZE_APP = 'INITIALIZE_APP';
export const GET_CARDS = 'GET_CARDS';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR';
export const RESERVE_CARD = 'RESERVE_CARD';
export const RESERVE_CARD_SUCCESS = 'RESERVE_CARD_SUCCESS';
export const RESERVE_CARD_ERROR = 'RESERVE_CARD_ERROR';
export const RELEASE_CARD = 'RELEASE_CARD';
export const RELEASE_CARD_SUCCESS = 'RELEASE_CARD_SUCCESS';
export const RELEASE_CARD_ERROR = 'RELEASE_CARD_ERROR';
export const ADD_CARD = 'ADD_CARD';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR';
export const DELETE_CARD = 'DELETE_CARD';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_ERROR = 'DELETE_CARD_ERROR';

@Injectable()
export class MainActionCreators {
  constructor() { }

  initializeApp() {
    return {
      type: INITIALIZE_APP,
      payload: true
    }
  }

  getCards() {
    return {
      type: GET_CARDS,
      payload: ''
    }
  }

  reserveCard(cardid: number, name: string, email: string) {
    return {
      type: RESERVE_CARD,
      payload: {
        cardid,
        name,
        email
      }
    }
  }

  releaseCard(cardid: number) {
    return {
      type: RELEASE_CARD,
      payload: {
        cardid
      }
    }
  }

  addCard(familyid: number, cardtitletxt: string, carddsc: string) {
    return {
      type: ADD_CARD,
      payload: {
        familyid,
        cardtitletxt,
        carddsc
      }
    }
  }

  deleteCard(cardid: number) {
    return {
      type: DELETE_CARD,
      payload: {
        cardid
      }
    }
  }
}
