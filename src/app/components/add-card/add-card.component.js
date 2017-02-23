(function() {
  'use strict';

  AddCardComponent.$inject = [];
  function AddCardComponent () {}

  angular
    .module('wallet')
    .component('wAddCard', {
      bindings: {
        onAdd: '&'
      },
      controller: AddCardComponent,
      templateUrl: './app/components/add-card/add-card.component.html'
    });
}());
