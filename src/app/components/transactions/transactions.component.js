(function() {
  'use strict';

  TransactionsComponent.$inject = ['walletService'];
  function TransactionsComponent (walletService) {
    this.walletService = walletService;
    this.transactions = null;
  }

  TransactionsComponent.prototype.$onChanges = function(changes) {
    if (changes.card && changes.card.currentValue) {
      this.getTransactions(changes.card.currentValue);
    }
  };

  TransactionsComponent.prototype.getTransactions = function(card) {
    var $ctrl = this;

    this.walletService
      .getTransactions(card.id)
      .then(function(transactions) {
        $ctrl.transactions = transactions;
      });
  }

  angular
    .module('wallet')
    .directive('wTransactions', function() {
      return {
        restrict: 'E',
        scope: {
          card: '<'
        },
        bindToController: true,
        controller: TransactionsComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/transactions/transactions.component.html'
      };
    });
}());
