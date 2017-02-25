import {IComponentOptions} from 'angular';
import {TransactionType} from '../../wallet.service';

class TransactionTypeIconComponent {
  public type: TransactionType;

  static $inject: string[] = [];
  constructor() {}
}

export default {
  bindings: {
    type: '<'
  },
  controller: TransactionTypeIconComponent,
  templateUrl: './app/components/transaction-type-icon/transaction-type-icon.component.html'
} as IComponentOptions;
