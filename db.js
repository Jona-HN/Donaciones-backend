const mysql = require('mysql2');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'donacionesbackend',
    password : 'sistemadonaciones',
    database : 'donaciones'
});

db.connect((err => {
    if (err) throw err;
    
    console.log('Conexión a la base de datos exitosa');
}));

exports.dbConnection = db;