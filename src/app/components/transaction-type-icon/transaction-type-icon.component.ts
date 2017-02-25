import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {TransactionType} from '../../wallet.service';

@Component({
  selector: 'w-transaction-type-icon',
  templateUrl: './transaction-type-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionTypeIconComponent {
  @Input() public type: TransactionType;
}
