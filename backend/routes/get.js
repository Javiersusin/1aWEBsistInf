const express = require('express');
const router = express.Router(); // Usa el router de Express

const db = require('../database/db'); // Importa el pool de conexiones a PostgreSQL
const RestauranteDAO = require('../dao/RestauranteDAO');
// Ruta para obtener los restaurantes
router.get('/mostrarRestaurantes', async (req, res) => {
    try {
    /*    const result = await pool.query('SELECT nombre FROM restaurante');//'SELECT nombre, fotos FROM restaurante'
        res.json(result.rows); // Enviar los restaurantes como JSON
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }*/
    const datosRes = await RestauranteDAO.getRestaurante();
    res.json(datosRes);

    }
    catch (error) {
        console.error('Error al obtener datos del restaurante', error);
        res.status(500).json({ error: 'Error al obtener datos del restaurante' });
    }
});

module.exports = router; // Exporta el router
