(function() {
  'use strict';

  TransactionAmountComponent.$inject = [];
  function TransactionAmountComponent () {}

  angular
    .module('wallet')
    .directive('wTransactionAmount', function() {
      return {
        restrict: 'E',
        controller: TransactionAmountComponent,
        templateUrl: './app/components/transaction-amount/transaction-amount.component.html'
      };
    });
}());
