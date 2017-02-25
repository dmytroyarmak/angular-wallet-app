import {IHttpService, IPromise} from 'angular';

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

export class WalletService {
  static $inject = ['$http'];
  constructor(private $http: IHttpService) {}

  getCards(): IPromise<ICard[]> {
    return this.$http
      .get('./data/cards.json')
      .then(responce => responce.data);
  };

  addCard(): IPromise<ICard> {
    return this.$http
      .get('./data/cards/add.json')
      .then(responce => responce.data);
  };

  getTransactions(cardId: number): IPromise<ITransaction[]> {
    return this.$http
      .get(`./data/cards/${cardId}/transactions.json`)
      .then(responce => responce.data);
  };
}

export default WalletService;
