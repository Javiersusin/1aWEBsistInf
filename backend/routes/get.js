const express = require('express');
const router = express.Router(); // Usa el router de Express

const db = require('../database/db'); // Importa el pool de conexiones a PostgreSQL
const RestauranteDAO = require('../dao/RestauranteDAO');
// Ruta para obtener los restaurantes, con su informacion
router.get('/mostrarRestaurantes', async (req, res) => {
    try {
    const datosRes = await RestauranteDAO.getRestaurante();
    res.json(datosRes);
    }
    catch (error) {
        console.error('Error al obtener datos del restaurante', error);
        res.status(500).json({ error: 'Error al obtener datos del restaurante' });
    }
});

router.get('/mostrarFormularioRestaurante', async (req, res) => {
    console.log(req.query);  // Verificar si llega el parámetro jefe
    const { jefe } = req.query;  // Asegúrate de que estás usando req.query, no req.body
    if (!jefe) {
        return res.status(404).json({ error: 'Jefe no encontrado' });
    }

    try {
        const restaurante = await RestauranteDAO.getRestauranteByJefe(jefe);  // Revisa si este método existe en el DAO
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }
        res.json(restaurante);
    } catch (error) {
        console.error('Error al obtener los datos del restaurante', error);
        res.status(500).json({ error: 'Error al obtener los datos del restaurante' });
    }
});

module.exports = router; // Exporta el router
