const service = require('../service/donacionService');

const consultarDonaciones = async function(req, res) {
    const filtros = {
        idCarrera: req.body.idCarrera
    }

    let donaciones = await service.consultarDonaciones(filtros);

    await res.json(donaciones);
}

module.exports.consultarDonaciones = consultarDonaciones;