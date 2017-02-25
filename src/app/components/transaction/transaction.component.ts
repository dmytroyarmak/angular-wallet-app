import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ITransaction} from '../../wallet.service';

@Component({
  selector: 'w-transaction',
  templateUrl: './transaction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionComponent {
  @Input() public transaction: ITransaction;
}
