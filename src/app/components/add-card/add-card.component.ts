import {IComponentOptions} from 'angular';
import addCardTemplate from './add-card.component.html';

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
  template: addCardTemplate
} as IComponentOptions;
