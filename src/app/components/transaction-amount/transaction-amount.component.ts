import {IComponentOptions} from 'angular';
import {ITransaction} from '../../wallet.service';

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
  templateUrl: './app/components/transaction-amount/transaction-amount.component.html'
} as IComponentOptions;
