const express = require('express');
const router = express.Router();

// Command handlers
const exportHandler = require('../handlers/export');
const importHandler = require('../handlers/import');

// Register command handlers
router.get('/export', exportHandler);
router.post('/import', importHandler);

module.exports = router;
