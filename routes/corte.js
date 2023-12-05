const express = require('express');
const router = express.Router();
const controller = require('../controller/corteController');

router.get('/', controller.consultarCortes);

module.exports = router;