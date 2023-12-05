const service = require('../service/adminService');

const consultarDonacionesAdmin = async function(req, res) {
    let donaciones = await service.consultarDonacionesAdmin();

    await res.json(donaciones);
}

const cambiarEstadoCorte = async (req, res) => {
    const { id, estado } = req.body;

    try {
        // Llamamos a la función del servicio para cambiar el estado
        const result = await cortesService.cambiarEstadoDonacion(id, estado);

        // Verificamos si se actualizó correctamente
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Estado actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'No se encontró el corte con ese ID' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports.cambiarEstadoCorte = cambiarEstadoCorte;
module.exports.consultarDonacionesAdmin = consultarDonacionesAdmin;