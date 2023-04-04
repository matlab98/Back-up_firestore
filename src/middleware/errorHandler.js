function errorHandler(err, req, res, next) {
    console.error(err);
    //res.status(500).send('Something went wrong');

    console.error(err.stack);
  
    if (err instanceof FirebaseError) {
      res.status(500).send('Firebase error: ' + err.message);
    } else if (err instanceof SyntaxError) {
      res.status(400).send('Invalid request body: ' + err.message);
    } else {
      res.status(500).send('Something went wrong');
    }
  }
  
  module.exports = {
    errorHandler,
  };
  
  