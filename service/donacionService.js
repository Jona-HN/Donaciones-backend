const consultarDonaciones = async function() {
    const db = require('../db').dbConnection;
    let sql = `SELECT
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

module.exports.consultarDonaciones = consultarDonaciones;