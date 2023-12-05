const validarCredenciales = async function(credenciales) {
    const db = require('../db').dbConnection;
    let sql = `SELECT id, id_rol, nombre
               FROM usuarios
               WHERE email = '${credenciales.email}'
               AND password = '${credenciales.password}'`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;
            let usuario = {};

            if (results[0]) {
                usuario = {
                    id: results[0].id,
                    nombre: results[0].nombre,
                    rol: results[0].id_rol
                };
            }
    
            resolve(usuario);
        });   
    });
}

const validarGoogle = async function(credenciales) {
    const db = require('../db').dbConnection;
    let sql = `SELECT id, nombre, id_rol
               FROM usuarios
               WHERE email = '${credenciales.email}'`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;
            let usuario = {};

            if (results[0]) {
                usuario = {
                    id: results[0].id,
                    nombre: results[0].nombre,
                    rol: results[0].id_rol
                };
            }
    
            resolve(usuario);
        });
    });
}

module.exports.validarCredenciales = validarCredenciales;
module.exports.validarGoogle = validarGoogle;