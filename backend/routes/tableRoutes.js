const express = require('express');
const { createTable } = require('../controller/tableController');
const router = express.Router();

router.post('/create', createTable)


module.exports = router