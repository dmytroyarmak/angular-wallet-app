class TransactionComponent {
  transaction;

  static $inject = [];
  constructor() {}
}

export default {
  bindings: {
    transaction: '<'
  },
  controller: TransactionComponent,
  templateUrl: './app/components/transaction/transaction.component.html'
};
