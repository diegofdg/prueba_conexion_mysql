// Importamos las dependencias
const util = require('util');
const conn = require('../conexion');

// Creamos la conexion con la base de datos
conn.connect((error) => {    
    if(error) {
        throw error;
    }
    console.log('Conexion establecida');
});

let query = util.promisify(conn.query).bind(conn);

// Exportamos el controlador que permite listar todas las categorias
exports.getCategoria = async (req,res) => {
    try {        
        await query ('SELECT * FROM categoria ORDER BY id', (error,regs,fields) => {
            if(error){
                res.status(413).send({'mje':'Error inesperado. '+error});
            } else {
                res.render('index', {
                    regs
                });                
            }         
        });
    }
    catch(error){
        res.status(413).send({'mje':'Error inesperado. '+error});
    }
}
