const express = require('express');

const UsuarioDAO = require('../dao/UsuarioDAO');

const RestauranteDAO = require('../dao/RestauranteDAO');

// const ResenaVO = require('../vo/ResenaVO');
// const ResenaDAO = require('../dao/ResenaDAO');

// const HorarioVO = require('../vo/HorarioVO');
// const HorarioDAO = require('../dao/HorarioDAO');

// const CategoriaVO = require('../vo/CategoriaVO');
// const CategoriaDAO = require('../dao/CategoriaDAO');



const router = express.Router();

// Add a new review
//router.post('/review', async (req, res) => {
//    const { userId, restaurantId, rating, comment } = req.body;
//    try {
//        const result = await db.query('INSERT INTO reviews (user_id, restaurant_id, rating, comment) VALUES (?, ?, ?, ?)', [userId, restaurantId, rating, comment]);
//        res.status(201).json({ message: 'Review added successfully', reviewId: result.insertId });
//    } catch (error) {
//        res.status(500).json({ error: 'Failed to add review' });
//    }
//});


// Ruta para agregar un nuevo usuario a la base de datos
router.post('/user', async (req, res) => {
    const { username, email, tipoUsuario, password } = req.body;
    
    try {

        console.log("Datos recibidos del frontend:", { username, email, tipoUsuario, password });

        // Verificar si el nombre de usuario ya existe
        const userExists = await UsuarioDAO.findUserByUsername(username);

        if (userExists) {
            // Si el usuario ya existe, enviar un mensaje de error
            return res.status(409).json({ message: 'El nombre de usuario ya está en uso' });
        }

        // Si el usuario no existe, crear un nuevo usuario en la base de datos
        const result = await UsuarioDAO.createUser(username, email, tipoUsuario, password);
        
        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: result.insertId });

    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
});


// Ruta para agregar un nuevo restaurante a la base de datos
router.post('/restaurant', async (req, res) => {
  const { jefe, aforo, fotos, urlweb, telefono, descripcion, email, nombre, ubicacion, categoria} = req.body;

  try {
    const result = await RestauranteDAO.createRestaurante(jefe, aforo, fotos, urlweb, telefono, descripcion, email, nombre, ubicacion, categoria);
    res.status(201).json({ message: 'Restaurante registrado exitosamente', idRestaurante: result.insertId });
  } catch (error) {
    console.error('Error al registrar el restaurante:', error);
    res.status(500).json({ error: 'Error al registrar el restaurante' });
  }
});

module.exports = router;