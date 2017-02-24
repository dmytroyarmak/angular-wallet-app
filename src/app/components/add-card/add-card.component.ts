class AddCardComponent {
  onAdd;

  static $inject = [];
  constructor() {}
}

export default {
  bindings: {
    onAdd: '&'
  },
  controller: AddCardComponent,
  templateUrl: './app/components/add-card/add-card.component.html'
};
