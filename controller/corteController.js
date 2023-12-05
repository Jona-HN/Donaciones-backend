const service = require('../service/corteService');

const consultarCortes = async function(req, res) {
    let cortes = await service.consultarCortes();

    await res.json(cortes);
}

module.exports.consultarCortes = consultarCortes;