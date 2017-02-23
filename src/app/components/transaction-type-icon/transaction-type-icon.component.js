(function() {
  'use strict';

  TransactionTypeIconComponent.$inject = [];
  function TransactionTypeIconComponent () {}

  angular
    .module('wallet')
    .component('wTransactionTypeIcon', {
      bindings: {
        type: '<'
      },
      controller: TransactionTypeIconComponent,
      templateUrl: './app/components/transaction-type-icon/transaction-type-icon.component.html'
    });
}());
