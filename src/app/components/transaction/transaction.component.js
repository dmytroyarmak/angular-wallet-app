(function() {
  'use strict';

  TransactionComponent.$inject = [];
  function TransactionComponent () {}

  angular
    .module('wallet')
    .directive('wTransaction', function() {
      return {
        restrict: 'E',
        scope: {
          transaction: '<'
        },
        controller: TransactionComponent,
        templateUrl: './app/components/transaction/transaction.component.html'
      };
    });
}());
