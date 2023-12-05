const express = require('express');
const router = express.Router();
const controller = require('../controller/usuarioController');

router.post('/crear', controller.crearUsuario);
router.get('/:id', controller.getUsuarioById);
router.get('/coordi/:id', controller.getPerfilCoordinadorById);

module.exports = router;