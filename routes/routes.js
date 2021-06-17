// Importamos las dependencias
const express = require('express');
const router = express.Router();
const categoria = require('../controllers/categoria_controller');

// Creamos la ruta para realizar una consulta
router.get('/', categoria.getCategoria);

// Exportamos el modulo de las rutas
module.exports = router;