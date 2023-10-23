const crearUsuario = async function(credenciales) {
    const db = require('../db').dbConnection;
    let sql = `INSERT INTO usuarios (nombre, email, password)
               VALUES (
                   '${credenciales.nombre}',
                   '${credenciales.email}',
                   '${credenciales.password}'
               )`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            resolve(true);
        });   
    });
}

module.exports.crearUsuario = crearUsuario;