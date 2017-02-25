import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ICard} from '../../wallet.service';

@Component({
  selector: 'w-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() public card: ICard;
  @Input() public isSelected: boolean;
  @Output() public select = new EventEmitter();
}
