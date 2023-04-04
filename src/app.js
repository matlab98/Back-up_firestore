const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorHandler');


const app = express();
app.use(bodyParser.json());

const commandsRouter = require('./routes/commands');

// Register commands middleware
app.use('/syncDatabase', commandsRouter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;

