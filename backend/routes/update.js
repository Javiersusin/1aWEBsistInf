const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Asegúrate de que esta sea la conexión correcta a la base de datos
const RestauranteDAO = require('../dao/RestauranteDAO');

// Esto en principi va bien, no debería de dar problemas
router.put('/actualizarRestaurante', async (req, res) => {
    const { jefe, nombre, email, descripcion, categoria, telefono, url, aforo, ubicacion, fotos } = req.body;

    try {
        console.log('Datos recibidos del frontend:', { jefe, nombre, email, descripcion, categoria, telefono, url, aforo, ubicacion, fotos });

        // Llama al método de tu DAO para actualizar el restaurante
        const result = await RestauranteDAO.updateRestaurante(jefe, nombre, email, descripcion, categoria, telefono, url, aforo, ubicacion, fotos);
        
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Restaurante actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Restaurante no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el restaurante:', error);

        // Verificamos si el error es de categoría inválida
        if (error.constraint && error.constraint === 'restaurante_categoria_check') {
            // Si el error se debe a la restricción de la categoría
            res.status(400).json({ error: 'La categoría introducida no es válida, opciones disponibles: Pizzas, Hamburguesas, Sushi, Repostería o Cócteles.' });
        } else {
            // Otros errores
            res.status(500).json({ error: 'Error al actualizar el restaurante' });
        }

        res.status(500).json({ error: 'Error al actualizar el restaurante' });
    }
});


module.exports = router;