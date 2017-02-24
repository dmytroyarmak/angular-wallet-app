class TransactionsComponent {
  card;
  transactions;

  static $inject = ['walletService'];
  constructor(private walletService) {}

  $onChanges(changes) {
    if (changes.card && changes.card.currentValue) {
      this.getTransactions(changes.card.currentValue);
    }
  }

  getTransactions(card) {
    this.walletService
      .getTransactions(card.id)
      .then((transactions) => {
        this.transactions = transactions;
      });
  }
}

export default {
  bindings: {
    card: '<'
  },
  controller: TransactionsComponent,
  templateUrl: './app/components/transactions/transactions.component.html'
};
