class CardComponent {
  card;
  isSelected;
  onSelect;

  static $inject = [];
  constructor() {}
}

export default {
  bindings: {
    card: '<',
    isSelected: '<',
    onSelect: '&'
  },
  controller: CardComponent,
  templateUrl: './app/components/card/card.component.html'
};
