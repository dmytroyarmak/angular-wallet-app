
// AngularJS 1 imports
import {module} from 'angular';

import WalletComponent from './components/wallet/wallet.component';
import CardsComponentDowngraded from './components/cards/cards.component.downgraded';
import CardBalanceComponentDowngraded from './components/card-balance/card-balance.component.downgraded';
import TransactionsComponentDowngraded from './components/transactions/transactions.component.downgraded';

// Angular 2+ imports
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {UpgradeModule, downgradeInjectable} from '@angular/upgrade/static';
import {WalletService} from './wallet.service';
import {CardsComponent} from './components/cards/cards.component';
import {CardComponent} from './components/card/card.component';
import {AddCardComponent} from './components/add-card/add-card.component';
import {CardBalanceComponent} from './components/card-balance/card-balance.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {TransactionAmountComponent} from './components/transaction-amount/transaction-amount.component';
import {TransactionTypeIconComponent} from './components/transaction-type-icon/transaction-type-icon.component';

// AngularJS 1 module
module('wallet', [])
  .factory('walletService', downgradeInjectable(WalletService))
  .component('wWallet', WalletComponent)
  .directive('wCards', CardsComponentDowngraded)
  .directive('wCardBalance', CardBalanceComponentDowngraded)
  .directive('wTransactions', TransactionsComponentDowngraded)
  .name;

// Angular 2+ module
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UpgradeModule
  ],
  providers: [
    WalletService
  ],
  declarations: [
    AddCardComponent,
    CardsComponent,
    CardComponent,
    CardBalanceComponent,
    TransactionsComponent,
    TransactionComponent,
    TransactionAmountComponent,
    TransactionTypeIconComponent
  ],
  entryComponents: [
    CardsComponent,
    CardBalanceComponent,
    TransactionsComponent
  ]
})
export class WalletModule {
  ngDoBootstrap() {}
}
