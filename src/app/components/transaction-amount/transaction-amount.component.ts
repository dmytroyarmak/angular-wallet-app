import {Component, Input} from '@angular/core';
import {ITransaction} from '../../wallet.service';

@Component({
  selector: 'w-transaction-amount',
  templateUrl: './transaction-amount.component.html'
})
export class TransactionAmountComponent {
  @Input() public transaction: ITransaction;
}
