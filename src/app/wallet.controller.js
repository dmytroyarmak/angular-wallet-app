(function() {
  'use strict';

  WalletController.$inject = ['$scope', 'walletService'];
  function WalletController ($scope, walletService) {
    $scope.cards = null;
    $scope.selectedCard = null;
    $scope.transactions = null;
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

        walletService
          .getTransactions(card.id)
          .then(function(transactions) {
            $scope.transactions = transactions;
          });
      }
    }
  }

  angular
    .module('wallet')
    .controller('WalletController', WalletController);

}());
