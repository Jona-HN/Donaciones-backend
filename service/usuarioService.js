const crearUsuario = async function(credenciales) {
    const db = require('../db').dbConnection;
    
    // Asignar un valor predeterminado al campo tipo_usuario (por ejemplo, 1)
    const tipoUsuarioPredeterminado = 1;

    let sql = `INSERT INTO usuarios (nombre, email, password, id_rol)
               VALUES (
                   '${credenciales.nombre}',
                   '${credenciales.email}',
                   '${credenciales.password}',
                   ${tipoUsuarioPredeterminado}
               )`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) {
                if (err.code == 'ER_DUP_ENTRY') {
                    resolve({ error: 'correo duplicado' })
                } else {
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

const getPerfilCoordinadorById = async function(id) {
    const db = require('../db').dbConnection;
    let sql = `SELECT
                    c.num_empleado,
                    u.nombre AS nombre,
                    ca.nombre AS carrera,
                    u.email,
                    c.ext_telefonica
                FROM coordinadores AS c
                INNER JOIN usuarios u
                ON c.id_usuario = u.id
                INNER JOIN carreras ca
                ON c.id_carrera = ca.id
                WHERE id_usuario = ${id}`;            

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            resolve(results[0]);
        });   
    });
}

module.exports.crearUsuario = crearUsuario;
module.exports.getUsuarioById = getUsuarioById;
module.exports.getPerfilCoordinadorById = getPerfilCoordinadorById;
