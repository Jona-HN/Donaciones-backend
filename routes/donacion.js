const express = require('express');
const router = express.Router();
const controller = require('../controller/donacionController');

router.get('/', controller.consultarDonaciones);

module.exports = router;