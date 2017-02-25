import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export type CardType = 'DEBIT' | 'CREDIT';
export interface ICard {
  id: number;
  type: CardType;
  cardNumber: string;
  balance: number;
}

export type TransactionType = 'DEBIT' | 'CREDIT';
export interface ITransaction {
  id: number;
  reference: string;
  date: string;
  type: TransactionType;
  group: string;
  amount: number;
}

@Injectable()
export class WalletService {
  constructor(private http: Http) {}

  getCards(): Observable<ICard[]> {
    return this.http
      .get('./data/cards.json')
      .map(responce => responce.json());
  }

  addCard(): Observable<ICard> {
    return this.http
      .get('./data/cards/add.json')
      .map(responce => responce.json());
  }

  getTransactions(cardId: number): Observable<ITransaction[]> {
    return this.http
      .get(`./data/cards/${cardId}/transactions.json`)
      .map(responce => responce.json());
  }
}
