const consultarCortes = async function() {
    const db = require('../db').dbConnection;
    let sql = `SELECT
                    co.id,
                    ca.nombre AS carrera,
                    co.monto_total,
                    co.fecha_corte,
                    co.ultima_actualizacion,
                    co.estado
                FROM cortes AS co
                INNER JOIN carreras ca
                ON co.id_carrera = ca.id`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            resolve(results);
        });   
    });
}

module.exports.consultarCortes = consultarCortes;