(function() {
  'use strict';

  CardsComponent.$inject = [];
  function CardsComponent () {
    this.cardAdded = false;
  }

  CardsComponent.prototype.hideButtonAndNotifyParent = function() {
    this.cardAdded = true;
    this.onAddCard();
  }

  angular
    .module('wallet')
    .directive('wCards', function() {
      return {
        restrict: 'E',
        scope: {
          cards: '<',
          selectedCard: '<',
          onSelectCard: '&',
          onAddCard: '&'
        },
        bindToController: true,
        controller: CardsComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/cards/cards.component.html'
      };
    });
}());
