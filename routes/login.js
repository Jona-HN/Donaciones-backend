const express = require('express');
const router = express.Router();
const controller = require('../controller/loginController');

router.post('/', controller.validarCredenciales);
router.post('/google', controller.validarGoogle);

module.exports = router;