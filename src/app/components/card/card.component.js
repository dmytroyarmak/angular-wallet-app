CardComponent.$inject = [];
function CardComponent () {}

export default {
  bindings: {
    card: '<',
    isSelected: '<',
    onSelect: '&'
  },
  controller: CardComponent,
  templateUrl: './app/components/card/card.component.html'
};
