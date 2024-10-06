const express = require('express');
const router = express.Router();
const UserDAO = require('../dao/UserDAO');

// Ruta de login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserDAO.findByUsername(username);
        if (user && user.password === password) {
            res.status(200).json({ message: 'Autenticación exitosa' });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await UserDAO.findByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario ya existe' });
        }
        const newUser = await UserDAO.createUser({ username, password });
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
});


module.exports = router;
