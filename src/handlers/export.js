const container  = require('../container/Container');


module.exports = async (req, res, next) => {
  try{
    const documents = await container.portfolioService.exportPortfolio();
    res.json(documents);
  } catch (err) {
    next(err);
  }
}
