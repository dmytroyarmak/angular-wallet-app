class TransactionTypeIconComponent {
  type;

  static $inject = [];
  constructor() {}
}

export default {
  bindings: {
    type: '<'
  },
  controller: TransactionTypeIconComponent,
  templateUrl: './app/components/transaction-type-icon/transaction-type-icon.component.html'
};
