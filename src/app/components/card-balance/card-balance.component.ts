import {IComponentOptions} from 'angular';

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
  templateUrl: './app/components/card-balance/card-balance.component.html'
} as IComponentOptions;
