import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ITransaction} from '../../wallet.service';

@Component({
  selector: 'w-transaction-amount',
  templateUrl: './transaction-amount.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionAmountComponent {
  @Input() public transaction: ITransaction;
}
