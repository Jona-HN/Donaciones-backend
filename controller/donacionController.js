const service = require('../service/donacionService');

const consultarDonaciones = async function(req, res) {
    let donaciones = await service.consultarDonaciones();

    await res.json(donaciones);
}

module.exports.consultarDonaciones = consultarDonaciones;