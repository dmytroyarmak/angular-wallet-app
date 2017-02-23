(function() {
  'use strict';

  TransactionComponent.$inject = [];
  function TransactionComponent () {}

  angular
    .module('wallet')
    .component('wTransaction', {
      bindings: {
        transaction: '<'
      },
      controller: TransactionComponent,
      templateUrl: './app/components/transaction/transaction.component.html'
    });
}());
