WalletService.$inject = ['$http'];
function WalletService($http) {
  this.$http = $http;
}

WalletService.prototype.getCards = function() {
  return this.$http
    .get('./data/cards.json')
    .then(function(responce) {
      return responce.data;
    });
};

WalletService.prototype.addCard = function() {
  return this.$http
    .get('./data/cards/add.json')
    .then(function(responce) {
      return responce.data;
    });
};

WalletService.prototype.getTransactions = function(cardId) {
  return this.$http
    .get('./data/cards/' + cardId + '/transactions.json')
    .then(function(responce) {
      return responce.data;
    });
};

export default WalletService;
