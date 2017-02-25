
// AngularJS 1 imports
import {module} from 'angular';

import WalletService from './wallet.service';
import WalletComponent from './components/wallet/wallet.component';
import CardsComponentDowngraded from './components/cards/cards.component.downgraded';
import CardComponent from './components/card/card.component';
import CardBalanceComponent from './components/card-balance/card-balance.component';
import TransactionsComponent from './components/transactions/transactions.component';
import TransactionComponent from './components/transaction/transaction.component';
import TransactionTypeIconComponent from './components/transaction-type-icon/transaction-type-icon.component';
import TransactionAmountComponent from './components/transaction-amount/transaction-amount.component';

// Angular 2+ imports
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule, downgradeComponent} from '@angular/upgrade/static';
import {CardsComponent} from './components/cards/cards.component';
import {CardComponentUpgraded} from './components/card/card.component.upgraded';
import {AddCardComponent} from './components/add-card/add-card.component';

// AngularJS 1 module
module('wallet', [])
  .service('walletService', WalletService)
  .component('wWallet', WalletComponent)
  .directive('wCards', CardsComponentDowngraded)
  .component('wCard', CardComponent)
  .component('wCardBalance', CardBalanceComponent)
  .component('wTransactions', TransactionsComponent)
  .component('wTransaction', TransactionComponent)
  .component('wTransactionTypeIcon', TransactionTypeIconComponent)
  .component('wTransactionAmount', TransactionAmountComponent)
  .name;

// Angular 2+ module
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    AddCardComponent,
    CardsComponent,
    CardComponentUpgraded
  ],
  entryComponents: [
    AddCardComponent,
    CardsComponent
  ]
})
export class WalletModule {
  ngDoBootstrap() {}
}
