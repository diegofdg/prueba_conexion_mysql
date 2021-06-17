const mysql=require('mysql');

//conexion
let conn=mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NOMBRE,    
});


module.exports = conn;