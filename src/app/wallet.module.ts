import {module} from 'angular';

import WalletService from './wallet.service';
import WalletComponent from './components/wallet/wallet.component';
import CardsComponent from './components/cards/cards.component';
import CardComponent from './components/card/card.component';
import AddCardComponent from './components/add-card/add-card.component';
import CardBalanceComponent from './components/card-balance/card-balance.component';
import TransactionsComponent from './components/transactions/transactions.component';
import TransactionComponent from './components/transaction/transaction.component';
import TransactionTypeIconComponent from './components/transaction-type-icon/transaction-type-icon.component';
import TransactionAmountComponent from './components/transaction-amount/transaction-amount.component';

module('wallet', [])
  .service('walletService', WalletService)
  .component('wWallet', WalletComponent)
  .component('wCards', CardsComponent)
  .component('wCard', CardComponent)
  .component('wAddCard', AddCardComponent)
  .component('wCardBalance', CardBalanceComponent)
  .component('wTransactions', TransactionsComponent)
  .component('wTransaction', TransactionComponent)
  .component('wTransactionTypeIcon', TransactionTypeIconComponent)
  .component('wTransactionAmount', TransactionAmountComponent)
  .name;

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class WalletModule {
  ngDoBootstrap() {}
}
