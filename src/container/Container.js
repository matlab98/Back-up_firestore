const firebase = require('../config/auth');
const { PortfolioService } = require('../services/portfolioService');

class Container {
  constructor() {
    this.firebase = firebase;
    this.portfolioService = new PortfolioService(this.firebase);
  }
}

module.exports = new Container();
