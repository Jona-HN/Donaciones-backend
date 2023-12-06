const service = require('../service/usuarioService');

const crearUsuario = async function(req, res) {
    const credenciales = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    };

    let usuarioCreado = await service.crearUsuario(credenciales);

    await res.json(usuarioCreado);
}

const getUsuarioById = async function(req, res) {
    let usuario = await service.getUsuarioById(req.params.id);

    await res.json(usuario);
}

const getPerfilCoordinadorById = async function(req, res) {
    let coordinador = await service.getPerfilCoordinadorById(req.params.id);

    await res.json(coordinador);
}

const getPerfilAdministradorById = async function(req, res) {
    let administrador = await service.getPerfilAdministradorById(req.params.id);

    await res.json(administrador);
}

module.exports.crearUsuario = crearUsuario;
module.exports.getUsuarioById = getUsuarioById;
module.exports.getPerfilCoordinadorById = getPerfilCoordinadorById;
module.exports.getPerfilAdministradorById = getPerfilAdministradorById;