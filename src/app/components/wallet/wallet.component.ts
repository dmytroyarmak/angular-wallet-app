import {Component, OnInit} from '@angular/core';
import {ICard, WalletService} from '../../wallet.service';

@Component({
  selector: 'w-wallet',
  templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit {
  public cards: ICard[];
  public selectedCard: ICard;

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.walletService
      .getCards()
      .subscribe((cards) => {
        this.cards = cards;
        this.onSelectCard(cards[0]);
      });
  }

  onAddCard() {
    this.walletService
      .addCard()
      .subscribe((card) => {
        this.cards = this.cards.concat(card);
      });
  }

  onSelectCard(card: ICard) {
    if (card !== this.selectedCard) {
      this.selectedCard = card;
    }
  }
}
