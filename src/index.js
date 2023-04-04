var app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Microservice is listening on port ${port}`);
});