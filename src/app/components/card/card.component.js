(function() {
  'use strict';

  CardComponent.$inject = [];
  function CardComponent () {}

  angular
    .module('wallet')
    .component('wCard', {
      bindings: {
        card: '<',
        isSelected: '<',
        onSelect: '&'
      },
      controller: CardComponent,
      templateUrl: './app/components/card/card.component.html'
    });
}());
