const service = require('../service/loginService');

const validarCredenciales = async function(req, res) {
    const credenciales = {
        email: req.body.email,
        password: req.body.password
    };

    let usuarioValido = await service.validarCredenciales(credenciales);

    await res.json(usuarioValido);
}

const validarGoogle = async function(req, res) {
    const credenciales = {
        email: req.body.email
    };

    let usuarioValido = await service.validarGoogle(credenciales);

    await res.json(usuarioValido);
}

module.exports.validarCredenciales = validarCredenciales;
module.exports.validarGoogle = validarGoogle;