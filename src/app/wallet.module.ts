
// AngularJS 1 imports
import {module} from 'angular';

import WalletService from './wallet.service';
import WalletComponent from './components/wallet/wallet.component';
import CardsComponentDowngraded from './components/cards/cards.component.downgraded';
import CardBalanceComponent from './components/card-balance/card-balance.component';
import TransactionsComponentDowngraded from './components/transactions/transactions.component.downgraded';

// Angular 2+ imports
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {walletServiceProvider} from './wallet.service.upgraded';
import {CardsComponent} from './components/cards/cards.component';
import {CardComponent} from './components/card/card.component';
import {AddCardComponent} from './components/add-card/add-card.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {TransactionAmountComponent} from './components/transaction-amount/transaction-amount.component';
import {TransactionTypeIconComponent} from './components/transaction-type-icon/transaction-type-icon.component';

// AngularJS 1 module
module('wallet', [])
  .service('walletService', WalletService)
  .component('wWallet', WalletComponent)
  .directive('wCards', CardsComponentDowngraded)
  .component('wCardBalance', CardBalanceComponent)
  .directive('wTransactions', TransactionsComponentDowngraded)
  .name;

// Angular 2+ module
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    walletServiceProvider
  ],
  declarations: [
    AddCardComponent,
    CardsComponent,
    CardComponent,
    TransactionsComponent,
    TransactionComponent,
    TransactionAmountComponent,
    TransactionTypeIconComponent
  ],
  entryComponents: [
    CardsComponent,
    TransactionsComponent
  ]
})
export class WalletModule {
  ngDoBootstrap() {}
}
