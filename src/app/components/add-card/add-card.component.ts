import {IComponentOptions} from 'angular';

class AddCardComponent {
  public onAdd: Function;

  static $inject: string[] = [];
  constructor() {}
}

export default {
  bindings: {
    onAdd: '&'
  },
  controller: AddCardComponent,
  templateUrl: './app/components/add-card/add-card.component.html'
} as IComponentOptions;
