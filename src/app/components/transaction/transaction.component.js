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
        bindToController: true,
        controller: TransactionComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/transaction/transaction.component.html'
      };
    });
}());
