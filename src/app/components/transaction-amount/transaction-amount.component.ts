class TransactionAmountComponent {
  transaction;

  static $inject = [];
  constructor() {}
}

export default {
  bindings: {
    transaction: '<'
  },
  controller: TransactionAmountComponent,
  templateUrl: './app/components/transaction-amount/transaction-amount.component.html'
};
