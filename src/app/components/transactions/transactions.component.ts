import {IComponentOptions, IOnChangesObject, IChangesObject} from 'angular';
import {ICard, ITransaction, WalletService} from '../../wallet.service';
import transactionsTemplate from './transactions.component.html';

class TransactionsComponent {
  public card: ICard;
  public transactions: ITransaction[];

  static $inject = ['walletService'];
  constructor(private walletService: WalletService) {}

  $onChanges(changes: IOnChangesObject) {
    const cardChanges = changes['card'] as IChangesObject<ICard>;
    if (cardChanges && cardChanges.currentValue) {
      this.getTransactions(cardChanges.currentValue);
    }
  }

  getTransactions(card: ICard) {
    this.walletService
      .getTransactions(card.id)
      .then((transactions) => {
        this.transactions = transactions;
      });
  }
}

export default {
  bindings: {
    card: '<'
  },
  controller: TransactionsComponent,
  template: transactionsTemplate
} as IComponentOptions;
