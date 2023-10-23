const express = require('express');
const router = express.Router();
const controller = require('../controller/usuarioController');

router.post('/crear', controller.crearUsuario);

module.exports = router;