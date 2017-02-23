(function() {
  'use strict';

  CardsComponent.$inject = ['$scope'];
  function CardsComponent ($scope) {
    $scope.cardAdded = false;
    $scope.hideButtonAndNotifyParent = hideButtonAndNotifyParent;

    //////////

    function hideButtonAndNotifyParent() {
      $scope.cardAdded = true;
      $scope.onAddCard();
    }
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
        controller: CardsComponent,
        templateUrl: './app/components/cards/cards.component.html'
      };
    });
}());
