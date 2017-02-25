import {IComponentOptions} from 'angular';
import {ITransaction} from '../../wallet.service';
import transactionTemplate from './transaction.component.html';

class TransactionComponent {
  public transaction: ITransaction;

  static $inject: string[] = [];
  constructor() {}
}

export default {
  bindings: {
    transaction: '<'
  },
  controller: TransactionComponent,
  template: transactionTemplate
} as IComponentOptions;
