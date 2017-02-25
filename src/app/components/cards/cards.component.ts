import {IComponentOptions} from 'angular';
import {ICard} from '../../wallet.service';

class CardsComponent {
  public cards: ICard[];
  public selectedCard: ICard;
  public onSelectCard: Function;
  public onAddCard: Function;
  public cardAdded = false;

  static $inject: string[] = [];
  constructor() {}

  hideButtonAndNotifyParent() {
    this.cardAdded = true;
    this.onAddCard();
  }
}

export default {
  bindings: {
    cards: '<',
    selectedCard: '<',
    onSelectCard: '&',
    onAddCard: '&'
  },
  controller: CardsComponent,
  templateUrl: './app/components/cards/cards.component.html'
} as IComponentOptions;
