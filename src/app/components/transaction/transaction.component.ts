TransactionComponent.$inject = [];
function TransactionComponent () {}

export default {
  bindings: {
    transaction: '<'
  },
  controller: TransactionComponent,
  templateUrl: './app/components/transaction/transaction.component.html'
};
