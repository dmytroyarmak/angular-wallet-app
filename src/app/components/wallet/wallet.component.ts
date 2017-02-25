import {IComponentOptions} from 'angular';
import {ICard, WalletService} from '../../wallet.service';
import walletTemplate from './wallet.component.html';

class WalletComponent {
  public cards: ICard[];
  public selectedCard: ICard;

  static $inject = ['walletService'];
  constructor(private walletService: WalletService) {}

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

  onSelectCard(card: ICard) {
    if (card !== this.selectedCard) {
      this.selectedCard = card;
    }
  }
}

export default {
  bindings: {},
  controller: WalletComponent,
  template: walletTemplate
} as IComponentOptions;
