(function() {
  'use strict';

  TransactionAmountComponent.$inject = [];
  function TransactionAmountComponent () {}

  angular
    .module('wallet')
    .directive('wTransactionAmount', function() {
      return {
        restrict: 'E',
        scope: {
          transaction: '<'
        },
        controller: TransactionAmountComponent,
        templateUrl: './app/components/transaction-amount/transaction-amount.component.html'
      };
    });
}());
