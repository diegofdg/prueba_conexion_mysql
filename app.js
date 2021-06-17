// Importamos las dependencias
const express=require('express');
const path = require('path');
require('dotenv').config({ path: 'variables.env'})

// Creamos una app con Express
const app=express();

// Habilitamos pug
app.set('view engine', 'pug');

// Añadimos la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Habilitamos las rutas
app.use(require('./routes/routes'));

// Declaramos las constantes de Host y Port que se usaran en la creacion del servidor
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

// Creamos el servidor
app.listen(port,host,() =>{
    console.log('El servidor '+host +' se está ejecutando en el puerto ' +port);
});



