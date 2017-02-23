(function() {
  'use strict';

  CardsComponent.$inject = [];
  function CardsComponent () {}

  angular
    .module('wallet')
    .directive('wCards', function() {
      return {
        restrict: 'E',
        controller: CardsComponent,
        templateUrl: './app/components/cards/cards.component.html'
      };
    });
}());
