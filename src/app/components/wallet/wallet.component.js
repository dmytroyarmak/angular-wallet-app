(function() {
  'use strict';

  WalletComponent.$inject = ['walletService'];
  function WalletComponent (walletService) {
    this.walletService = walletService;
    this.cards = null;
    this.selectedCard = null;
  }

  WalletComponent.prototype.$onInit = function() {
    var $ctrl = this;

    this.walletService
      .getCards()
      .then(function(cards) {
        $ctrl.cards = cards;
        $ctrl.onSelectCard(cards[0]);
      });
  };

  WalletComponent.prototype.onAddCard = function() {
    var $ctrl = this;

    this.walletService
      .addCard()
      .then(function(card) {
        $ctrl.cards = $ctrl.cards.concat(card);
      });
  };

  WalletComponent.prototype.onSelectCard = function(card) {
    if (card !== this.selectedCard) {
      this.selectedCard = card;
    }
  };

  angular
    .module('wallet')
    .component('wWallet', {
      bindings: {},
      controller: WalletComponent,
      templateUrl: './app/components/wallet/wallet.component.html'
    });
}());
