const express = require('express');
const router = express.Router();
const controller = require('../controller/adminController');

router.get('/', controller.consultarDonacionesAdmin);
router.post('/cambiarEstadoCorte', controller.cambiarEstadoCorte);

module.exports = router;