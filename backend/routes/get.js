const express = require('express');
const router = express.Router(); // Usa el router de Express

const db = require('../database/db'); //Creo que deberia ser ../database/db la ruta correcta
// Ruta para obtener los restaurantes
router.get('/mostrarRestaurantes', async (req, res) => {
    try {
        const result = await pool.query('SELECT nombre FROM restaurante');//'SELECT nombre, fotos FROM restaurante'
        res.json(result.rows); // Enviar los restaurantes como JSON
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
});

module.exports = router; // Exporta el router
