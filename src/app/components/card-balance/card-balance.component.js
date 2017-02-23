(function() {
  'use strict';

  CardBalanceComponent.$inject = [];
  function CardBalanceComponent () {}

  angular
    .module('wallet')
    .directive('wCardBalance', function() {
      return {
        restrict: 'E',
        scope: {
          balance: '<'
        },
        bindToController: true,
        controller: CardBalanceComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/card-balance/card-balance.component.html'
      };
    });
}());
