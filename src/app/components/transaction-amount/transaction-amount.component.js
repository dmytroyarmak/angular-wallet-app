(function() {
  'use strict';

  TransactionAmountComponent.$inject = [];
  function TransactionAmountComponent () {}

  angular
    .module('wallet')
    .component('wTransactionAmount', {
      bindings: {
        transaction: '<'
      },
      controller: TransactionAmountComponent,
      templateUrl: './app/components/transaction-amount/transaction-amount.component.html'
    });
}());
