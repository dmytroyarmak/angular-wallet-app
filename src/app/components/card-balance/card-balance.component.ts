class CardBalanceComponent {
  balance;

  static $inject = [];
  constructor() {}
}

export default {
  bindings: {
    balance: '<'
  },
  controller: CardBalanceComponent,
  templateUrl: './app/components/card-balance/card-balance.component.html'
};
