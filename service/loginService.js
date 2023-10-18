const validarCredenciales = async function(credenciales) {
    const db = require('../db').dbConnection;
    let sql = `SELECT COUNT(*) AS count 
               FROM usuarios
               WHERE email = '${credenciales.email}'
               AND password = '${credenciales.password}'`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) throw err;

            let usuarioValido = results[0].count == 1;
    
            resolve(usuarioValido);
        });   
    });
}

module.exports.validarCredenciales = validarCredenciales;