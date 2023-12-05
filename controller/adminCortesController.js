const service = require('../service/adminCortesService');

const consultarCortesAdmin = async function(req, res) {
    let cortes = await service.consultarCortesAdmin();

    await res.json(cortes);
}

module.exports.consultarCortesAdmin = consultarCortesAdmin;