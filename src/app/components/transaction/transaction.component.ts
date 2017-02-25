import {IComponentOptions} from 'angular';
import {ITransaction} from '../../wallet.service';

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
  templateUrl: './app/components/transaction/transaction.component.html'
} as IComponentOptions;
