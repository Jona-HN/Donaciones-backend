const consultarDonacionesAdmin = async function() {
    const db = require('../db').dbConnection;
    let sql = `SELECT
                    d.id,
                    u.nombre AS donante,
                    d.monto,
                    c.nombre AS carrera,
                    d.fecha_pago,
                    d.ultima_actualizacion,
                    d.estado
                FROM donaciones AS d
                INNER JOIN usuarios u
                ON d.id_usuario = u.id
                INNER JOIN carreras c
                ON d.id_carrera = c.id`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            resolve(results);
        });   
    });
}

const cambiarEstadoCorte = async function(id, estado) {
    const db = require('../db').dbConnection;
    let sql = 'UPDATE cortes SET estado = ? WHERE id = ?';

    return new Promise((resolve, reject) => {
        db.query(sql, [estado, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });   
    });
}

module.exports.cambiarEstadoCorte = cambiarEstadoCorte;
module.exports.consultarDonacionesAdmin = consultarDonacionesAdmin;