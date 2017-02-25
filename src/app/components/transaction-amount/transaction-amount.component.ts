import {IComponentOptions} from 'angular';
import {ITransaction} from '../../wallet.service';
import transactionAmountTemplate from './transaction-amount.component.html';

class TransactionAmountComponent {
  public transaction: ITransaction;

  static $inject: string[] = [];
  constructor() {}
}

export default {
  bindings: {
    transaction: '<'
  },
  controller: TransactionAmountComponent,
  template: transactionAmountTemplate
} as IComponentOptions;
