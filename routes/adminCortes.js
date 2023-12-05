const express = require('express');
const router = express.Router();
const controller = require('../controller/adminCortesController');

router.get('/', controller.consultarCortesAdmin);

module.exports = router;