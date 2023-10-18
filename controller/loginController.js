const service = require('../service/loginService');

const validarCredenciales = async function(req, res) {
    const credenciales = {
        email: req.body.email,
        password: req.body.password
    };

    let usuarioValido = await service.validarCredenciales(credenciales);

    await res.json(usuarioValido);
}

module.exports.validarCredenciales = validarCredenciales;