class WalletComponent {
  cards;
  selectedCard;

  static $inject = ['walletService'];
  constructor(private walletService) {}

  $onInit() {
    this.walletService
      .getCards()
      .then((cards) => {
        this.cards = cards;
        this.onSelectCard(cards[0]);
      });
  }

  onAddCard() {
    this.walletService
      .addCard()
      .then((card) => {
        this.cards = this.cards.concat(card);
      });
  }

  onSelectCard(card) {
    if (card !== this.selectedCard) {
      this.selectedCard = card;
    }
  }
}

export default {
  bindings: {},
  controller: WalletComponent,
  templateUrl: './app/components/wallet/wallet.component.html'
};
