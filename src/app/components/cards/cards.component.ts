import {Component, Input, Output, EventEmitter, TrackByFn} from '@angular/core';
import {ICard} from '../../wallet.service';

@Component({
  selector: 'w-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  @Input() public cards: ICard[];
  @Input() public selectedCard: ICard;
  @Output() public selectCard: EventEmitter<ICard> = new EventEmitter();
  @Output() public addCard = new EventEmitter();
  public cardAdded = false;

  hideButtonAndNotifyParent() {
    this.cardAdded = true;
    this.addCard.next();
  }

  getCardId(index: number, card: ICard) {
    return card.id;
  }
}
