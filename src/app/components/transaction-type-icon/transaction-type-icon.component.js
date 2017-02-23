(function() {
  'use strict';

  TransactionTypeIconComponent.$inject = [];
  function TransactionTypeIconComponent () {}

  angular
    .module('wallet')
    .directive('wTransactionTypeIcon', function() {
      return {
        restrict: 'E',
        controller: TransactionTypeIconComponent,
        templateUrl: './app/components/transaction-type-icon/transaction-type-icon.component.html'
      };
    });
}());
