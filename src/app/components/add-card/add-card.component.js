AddCardComponent.$inject = [];
function AddCardComponent () {}

export default {
  bindings: {
    onAdd: '&'
  },
  controller: AddCardComponent,
  templateUrl: './app/components/add-card/add-card.component.html'
};
