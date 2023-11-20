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
            if (err) {
                if (err.code == 'ER_DUP_ENTRY') {
                    resolve({ error: 'correo duplicado' })
                }
                else {
                    throw err;
                }
            }

            resolve({ creado: true });
        });   
    });
}

const getUsuarioById = async function(id) {
    const db = require('../db').dbConnection;
    let sql = `SELECT id, nombre
               FROM usuarios
               WHERE id = '${id}'`;            

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            let usuario = {};

            if (results[0]) {
                usuario = {
                    id: results[0].id,
                    nombre: results[0].nombre
                };
            }
    
            resolve(usuario);
        });   
    });
}

module.exports.crearUsuario = crearUsuario;
module.exports.getUsuarioById = getUsuarioById;