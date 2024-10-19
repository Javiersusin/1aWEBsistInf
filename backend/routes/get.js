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

router.get('/numRestaurantes', async (req, res) => {
    try {
      const result = await db.query('SELECT COUNT(*) AS total FROM restaurante'); // Ajusta el nombre de tu tabla si es necesario
      const totalRestaurantes = result.rows[0].total;

      res.json({ totalRestaurantes });
    } catch (error) {
      console.error('Error al obtener el número de restaurantes:', error);
      res.status(500).json({ message: 'Error al obtener el número de restaurantes' });
    }
  });

router.get('/numResenas', async (req, res) => {
    try {
      const result = await db.query('SELECT COUNT(*) AS total FROM resenas'); // Ajusta el nombre de tu tabla si es necesario
      const totalResenas = result.rows[0].total;

      res.json({ totalResenas });
    } catch (error) {
      console.error('Error al obtener el número de reseñas:', error);
      res.status(500).json({ message: 'Error al obtener el número de reseñas' });
    }
  });

  router.get('/sumaVisitas', async (req, res) => {
    try {
      // Consulta SQL para sumar la columna "visitas"
      const result = await db.query('SELECT SUM(visitas) AS totalVisitas FROM restaurante');
      const totalVisitas = result.rows[0].totalvisitas || 0; // Si no hay visitas, devolver 0
  
      res.json({ totalVisitas });
    } catch (error) {
      console.error('Error al obtener la suma de visitas:', error);
      res.status(500).json({ message: 'Error al obtener la suma de visitas' });
    }
  });
  
  router.get('/restaurantesPorCategoria', async (req, res) => {
    const { categoria } = req.query;

    if (!categoria) {
        return res.status(400).json({ message: 'La categoría es requerida' });
    }

    try {
        const result = await db.query('SELECT * FROM restaurante WHERE categoria = $1', [categoria]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener restaurantes por categoría:', error);
        res.status(500).json({ message: 'Error al obtener restaurantes por categoría' });
    }
});


router.get('/topRestaurantes', async (req, res) => {
  try {
      // Consulta para obtener los 4 restaurantes con más visitas
      const result = await db.query('SELECT * FROM restaurante ORDER BY visitas DESC LIMIT 4');
      res.json(result.rows);
  } catch (error) {
      console.error('Error al obtener los restaurantes con más visitas:', error);
      res.status(500).json({ message: 'Error al obtener los restaurantes con más visitas' });
  }
});


module.exports = router; // Exporta el router
