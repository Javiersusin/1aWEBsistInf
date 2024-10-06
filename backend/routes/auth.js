// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const UserVO = require('../vo/UserVO');
const UserDAO = require('../dao/UserDAO');

// Ruta para manejar el inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Verificar que `username` y `password` no sean undefined o vacíos
  if (!username || !password) {
    return res.status(400).json({ message: 'El nombre de usuario y la contraseña son requeridos' });
  }

  try {
    // Crear un objeto UserVO con los datos ingresados por el usuario
    const userVO = new UserVO(username, password);

    // Validar las credenciales usando UserDAO
    const validPassword = await UserDAO.validatePassword(userVO);

    if (!validPassword) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Si la autenticación es correcta
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
