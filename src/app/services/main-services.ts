import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/shared/services/http-service';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { resolve } from 'url';

@Injectable()
export class MainService {

  public url: string = environment.serverUrl;
  // public allCards: Card[] = [
  //   {
  //     cardId: 1,
  //     familyId: 1,
  //     cardTitleTxt: 'New Toy',
  //     cardDsc: 'A Purple One',
  //     reservedFlg: 0,
  //     reservedNm: null,
  //     reservedEmailTxt: null
  //   },
  //   {
  //     cardId: 2,
  //     familyId: 1,
  //     cardTitleTxt: 'New Toy',
  //     cardDsc: 'A Green One',
  //     reservedFlg: 1,
  //     reservedNm: 'Kyle Cornwall',
  //     reservedEmailTxt: 'ckyle25@gmail.com'
  //   },
  //   {
  //     cardId: 3,
  //     familyId: 2,
  //     cardTitleTxt: 'New Toy',
  //     cardDsc: 'A Red One',
  //     reservedFlg: 0,
  //     reservedNm: null,
  //     reservedEmailTxt: null
  //   },
  //   {
  //     cardId: 4,
  //     familyId: 2,
  //     cardTitleTxt: 'New Toy',
  //     cardDsc: 'A Blue One',
  //     reservedFlg: 1,
  //     reservedNm: 'Jodi Cornwall',
  //     reservedEmailTxt: 'jodi.l.hawkins@gmail.com'
  //   },
  //   {
  //     cardId: 5,
  //     familyId: 3,
  //     cardTitleTxt: 'New Toy',
  //     cardDsc: 'A Yellow One',
  //     reservedFlg: 0,
  //     reservedNm: null,
  //     reservedEmailTxt: null
  //   },
  //   {
  //     cardId: 6,
  //     familyId: 3,
  //     cardTitleTxt: 'New Toy',
  //     cardDsc: 'A Pink One',
  //     reservedFlg: 1,
  //     reservedNm: 'Kyle Cornwall',
  //     reservedEmailTxt: 'ckyle25@gmail.com'
  //   },
  // ]

  constructor(
    private httpService: HttpService,
  ) {  }
  
  getCards(): Promise<any> {
    // return new Promise<Card[]>((resolve) => {
    //   setTimeout(() => {resolve(this.allCards)},1000)
    // })
    return this.httpService.getApiCall(`${this.url}api/getCards`);
  }

  reserveCard(cardid: number, name: string, email: string): Promise<any> {
    // return new Promise<any>((resolve) => {
    //   setTimeout(() => {
    //     this.allCards.forEach(card => {
    //       if (card.cardId === cardId) {
    //         card.reservedFlg = 1;
    //         card.reservedNm = name;
    //         card.reservedEmailTxt = email;
    //       }
    //     })
    //     resolve('Card Reserved')
    //   },1000)
    // })
    const body = {
      cardid,
      name,
      email
    }

    return this.httpService.putApiCall(`${this.url}api/reserveCard`, body);
  }

  releaseCard(cardid: number): Promise<any> {
    const body = {
      cardid
    }
    return this.httpService.putApiCall(`${this.url}api/releaseCard`, body);
  }

  addCard(familyid: number, cardtitletxt: string, carddsc: string): Promise<any> {
    const body = {
      familyid,
      cardtitletxt,
      carddsc
    }
    return this.httpService.postApiCall(`${this.url}api/addCard`, body);
  }

  deleteCard(cardid: number): Promise<any> {
    const body = {
      cardid
    }
    return this.httpService.deleteApiCall(`${this.url}api/deleteCard`, body);
  }
}
