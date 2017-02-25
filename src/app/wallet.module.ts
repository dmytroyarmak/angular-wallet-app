import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {WalletService} from './wallet.service';
import {WalletComponent} from './components/wallet/wallet.component';
import {CardsComponent} from './components/cards/cards.component';
import {CardComponent} from './components/card/card.component';
import {AddCardComponent} from './components/add-card/add-card.component';
import {CardBalanceComponent} from './components/card-balance/card-balance.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {TransactionAmountComponent} from './components/transaction-amount/transaction-amount.component';
import {TransactionTypeIconComponent} from './components/transaction-type-icon/transaction-type-icon.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WalletService
  ],
  declarations: [
    WalletComponent,
    AddCardComponent,
    CardsComponent,
    CardComponent,
    CardBalanceComponent,
    TransactionsComponent,
    TransactionComponent,
    TransactionAmountComponent,
    TransactionTypeIconComponent
  ],
  bootstrap: [
    WalletComponent
  ]
})
export class WalletModule {}
