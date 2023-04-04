const container  = require('../container/Container');


module.exports = async (req, res, next) => {
  try{
    const documents = await container.portfolioService.importPortfolio();
    res.json(documents);
  } catch (err) {
    next(err);
  }
}
