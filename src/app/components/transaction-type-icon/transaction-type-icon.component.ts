TransactionTypeIconComponent.$inject = [];
function TransactionTypeIconComponent () {}

export default {
  bindings: {
    type: '<'
  },
  controller: TransactionTypeIconComponent,
  templateUrl: './app/components/transaction-type-icon/transaction-type-icon.component.html'
};
