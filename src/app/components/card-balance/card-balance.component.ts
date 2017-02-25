import {Component, Input} from '@angular/core';

@Component({
  selector: 'w-card-balance',
  templateUrl: './card-balance.component.html'
})
export class CardBalanceComponent {
  @Input() public balance: number;
}
