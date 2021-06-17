// Importamos las dependencias
const express = require('express');
const router = express.Router();
var categoria = require('../controllers/categoria_controller');

// Creamos la ruta para realizar una consulta
router.get('/categoria', categoria.getCategoria);

// Exportamos el modulo de las rutas
module.exports = router;