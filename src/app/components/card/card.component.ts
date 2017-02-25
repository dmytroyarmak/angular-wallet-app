import {IComponentOptions} from 'angular';
import {ICard} from '../../wallet.service';

class CardComponent {
  public card: ICard;
  public isSelected: boolean;
  public onSelect: Function;

  static $inject: string[] = [];
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
} as IComponentOptions;
