import {Component, Input} from '@angular/core';
import {ITransaction} from '../../wallet.service';

@Component({
  selector: 'w-transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent {
  @Input() public transaction: ITransaction;
}
