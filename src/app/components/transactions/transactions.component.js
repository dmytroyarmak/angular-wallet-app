(function() {
  'use strict';

  TransactionsComponent.$inject = ['$scope', 'walletService'];
  function TransactionsComponent ($scope, walletService) {
    $scope.transactions = null;

    $scope.$watch('card', function(card) {
      if (card) {
        getTransactions(card);
      }
    });

    //////////

    function getTransactions(card) {
      walletService
        .getTransactions(card.id)
        .then(function(transactions) {
          $scope.transactions = transactions;
        });
    }
  }

  angular
    .module('wallet')
    .directive('wTransactions', function() {
      return {
        restrict: 'E',
        scope: {
          card: '<'
        },
        controller: TransactionsComponent,
        templateUrl: './app/components/transactions/transactions.component.html'
      };
    });
}());
