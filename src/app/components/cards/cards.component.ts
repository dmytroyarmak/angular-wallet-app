class CardsComponent {
  cards;
  selectedCard;
  onSelectCard;
  onAddCard;
  cardAdded = false;

  static $inject = [];
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
};
