import {Component, OnChanges, Input, Inject, SimpleChanges} from '@angular/core';
import {ICard, ITransaction, WalletService} from '../../wallet.service';

@Component({
  selector: 'w-transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnChanges {
  @Input() public card: ICard;
  public transactions: ITransaction[];

  constructor(@Inject('walletService') private walletService: WalletService) {}

  ngOnChanges(changes: SimpleChanges) {
    const cardChanges = changes['card'];
    if (cardChanges && cardChanges.currentValue) {
      this.getTransactions(cardChanges.currentValue);
    }
  }

  getTransactionId(index: number, transaction: ITransaction) {
    return transaction.id;
  }

  getTransactions(card: ICard) {
    this.walletService
      .getTransactions(card.id)
      .then((transactions) => {
        this.transactions = transactions;
      });
  }
}
