(function() {
  'use strict';

  WalletComponent.$inject = ['$scope', 'walletService'];
  function WalletComponent ($scope, walletService) {
    $scope.cards = null;
    $scope.selectedCard = null;
    $scope.cardAdded = false;
    $scope.onSelectCard = onSelectCard;
    $scope.onAddCard = onAddCard;

    walletService
      .getCards()
      .then(function(cards) {
        $scope.cards = cards;
        $scope.onSelectCard(cards[0]);
      });

    //////////

    function onAddCard() {
      walletService
        .addCard()
        .then(function(card) {
          $scope.cards = $scope.cards.concat(card);
          $scope.cardAdded = true;
        });
    }

    function onSelectCard(card) {
      if (card !== $scope.selectedCard) {
        $scope.selectedCard = card;
      }
    }
  }

  angular
    .module('wallet')
    .directive('wWallet', function() {
      return {
        restrict: 'E',
        controller: WalletComponent,
        templateUrl: './app/components/wallet/wallet.component.html'
      };
    });
}());
