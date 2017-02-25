import {IComponentOptions} from 'angular';
import {TransactionType} from '../../wallet.service';
import transactionTypeIconTemplate from './transaction-type-icon.component.html';

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
  template: transactionTypeIconTemplate
} as IComponentOptions;
