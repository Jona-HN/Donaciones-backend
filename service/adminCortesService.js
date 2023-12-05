const consultarCortesAdmin = async function() {
    const db = require('../db').dbConnection;
    let sql = `SELECT
                    co.id AS idCorte,
                    co.monto_total,
                    c.nombre AS carrera,
                    co.fecha_corte,
                    co.ultima_actualizacion,
                    co.estado
                FROM cortes AS co
                INNER JOIN carreras c
                ON co.id_carrera = c.id`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            resolve(results);
        });   
    });
}

module.exports.consultarCortesAdmin = consultarCortesAdmin;