(function() {
  'use strict';

  CardComponent.$inject = [];
  function CardComponent () {}

  angular
    .module('wallet')
    .directive('wCard', function() {
      return {
        restrict: 'E',
        scope: {
          card: '<',
          isSelected: '<',
          onSelect: '&'
        },
        bindToController: true,
        controller: CardComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/card/card.component.html'
      };
    });
}());
