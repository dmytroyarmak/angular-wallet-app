TransactionAmountComponent.$inject = [];
function TransactionAmountComponent () {}

export default {
  bindings: {
    transaction: '<'
  },
  controller: TransactionAmountComponent,
  templateUrl: './app/components/transaction-amount/transaction-amount.component.html'
};
