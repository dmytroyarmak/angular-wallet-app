import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'w-card-balance',
  templateUrl: './card-balance.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBalanceComponent {
  @Input() public balance: number;
}
