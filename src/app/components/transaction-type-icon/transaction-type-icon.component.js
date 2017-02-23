(function() {
  'use strict';

  TransactionTypeIconComponent.$inject = [];
  function TransactionTypeIconComponent () {}

  angular
    .module('wallet')
    .directive('wTransactionTypeIcon', function() {
      return {
        restrict: 'E',
        scope: {
          type: '<'
        },
        bindToController: true,
        controller: TransactionTypeIconComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/transaction-type-icon/transaction-type-icon.component.html'
      };
    });
}());
