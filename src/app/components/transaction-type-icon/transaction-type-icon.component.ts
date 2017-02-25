import {Component, Input} from '@angular/core';
import {TransactionType} from '../../wallet.service';

@Component({
  selector: 'w-transaction-type-icon',
  templateUrl: './transaction-type-icon.component.html'
})
export class TransactionTypeIconComponent {
  @Input() public type: TransactionType;
}
