CardBalanceComponent.$inject = [];
function CardBalanceComponent () {}

export default {
  bindings: {
    balance: '<'
  },
  controller: CardBalanceComponent,
  templateUrl: './app/components/card-balance/card-balance.component.html'
};
