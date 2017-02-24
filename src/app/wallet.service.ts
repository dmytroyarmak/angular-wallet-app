export default class WalletService {
  static $inject = ['$http'];
  constructor(private $http) {}

  getCards() {
    return this.$http
      .get('./data/cards.json')
      .then(responce => responce.data);
  };

  addCard() {
    return this.$http
      .get('./data/cards/add.json')
      .then(responce => responce.data);
  };

  getTransactions(cardId) {
    return this.$http
      .get(`./data/cards/${cardId}/transactions.json`)
      .then(responce => responce.data);
  };
}
