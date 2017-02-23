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
        bindToController: true,
        controller: AddCardComponent,
        controllerAs: '$ctrl',
        templateUrl: './app/components/add-card/add-card.component.html'
      };
    });
}());
