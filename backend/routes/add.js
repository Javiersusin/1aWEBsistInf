const express = require('express');
const db = require('../database/db'); //Creo que deberia ser ../database/db la ruta correcta

const UsuarioVO = require('../vo/UsuarioVO');
const UsuarioDAO = require('../dao/UsuarioDAO');

// const RestauranteVO = require('../vo/RestauranteVO');
// const RestauranteDAO = require('../dao/RestauranteDAO');

// const ResenaVO = require('../vo/ResenaVO');
// const ResenaDAO = require('../dao/ResenaDAO');

// const HorarioVO = require('../vo/HorarioVO');
// const HorarioDAO = require('../dao/HorarioDAO');

// const CategoriaVO = require('../vo/CategoriaVO');
// const CategoriaDAO = require('../dao/CategoriaDAO');



const router = express.Router();

// Add a new review
router.post('/review', async (req, res) => {
    const { userId, restaurantId, rating, comment } = req.body;
    try {
        const result = await db.query('INSERT INTO reviews (user_id, restaurant_id, rating, comment) VALUES (?, ?, ?, ?)', [userId, restaurantId, rating, comment]);
        res.status(201).json({ message: 'Review added successfully', reviewId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add review' });
    }
});

// Add a new restaurant
router.post('/restaurant', async (req, res) => {
    const { name, address, cuisine } = req.body;
    try {
        const result = await db.query('INSERT INTO restaurants (name, address, cuisine) VALUES (?, ?, ?)', [name, address, cuisine]);
        res.status(201).json({ message: 'Restaurant added successfully', restaurantId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add restaurant' });
    }
});

// // Add a new user
// router.post('/user', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const result = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
//         res.status(201).json({ message: 'User added successfully', userId: result.insertId });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to add user' });
//     }
// });


// Ruta para agregar un nuevo usuario (esto no hace fallar)
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


// Add a new user with username validation
// router.post('/user', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         // Verificar si el nombre de usuario ya existe
//         const userExists = await db.query('SELECT * FROM users WHERE username = ?', [username]);

//         if (userExists.length > 0) { //Si el resultado de la consulta devuelve alguna fila, se cumple la condición del if
//             // Si el usuario ya existe, enviar un mensaje de error
//             return res.status(409).json({ message: 'El nombre de usuario ya está en uso' }); // Código 409: Conflicto
//         }

//         // Si el usuario no existe, proceder a la inserción
//         const result = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
//         res.status(201).json({ message: 'Usuario registrado exitosamente', userId: result.insertId });

//     } catch (error) {
//         console.error('Error al registrar el usuario:', error);
//         res.status(500).json({ error: 'Error al registrar el usuario' });
//     }
// });


module.exports = router;