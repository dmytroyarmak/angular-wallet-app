import {IComponentOptions} from 'angular';
import {ICard} from '../../wallet.service';
import cardTemplate from './card.component.html';

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
  template: cardTemplate
} as IComponentOptions;
