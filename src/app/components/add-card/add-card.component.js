(function() {
  'use strict';

  AddCardComponent.$inject = [];
  function AddCardComponent () {}

  angular
    .module('wallet')
    .directive('wAddCard', function() {
      return {
        restrict: 'E',
        scope: {
          onAdd: '&'
        },
        controller: AddCardComponent,
        templateUrl: './app/components/add-card/add-card.component.html'
      };
    });
}());
