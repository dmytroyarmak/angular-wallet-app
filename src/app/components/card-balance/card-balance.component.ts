import {IComponentOptions} from 'angular';
import cardBalanceTemplate from './card-balance.component.html';

class CardBalanceComponent {
  public balance: number;

  static $inject: string[] = [];
  constructor() {}
}

export default {
  bindings: {
    balance: '<'
  },
  controller: CardBalanceComponent,
  template: cardBalanceTemplate
} as IComponentOptions;
