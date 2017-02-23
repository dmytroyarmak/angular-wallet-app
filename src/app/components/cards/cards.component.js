CardsComponent.$inject = [];
function CardsComponent () {
  this.cardAdded = false;
}

CardsComponent.prototype.hideButtonAndNotifyParent = function() {
  this.cardAdded = true;
  this.onAddCard();
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
