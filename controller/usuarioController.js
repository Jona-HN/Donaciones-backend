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

module.exports.crearUsuario = crearUsuario;