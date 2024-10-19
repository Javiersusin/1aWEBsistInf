// backend/routes/auth.js

const express = require('express');
const router = express.Router();

const UsuarioVO = require('../vo/UsuarioVO');
const UsuarioDAO = require('../dao/UsuarioDAO');
/*
// Ruta para manejar el inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Verificar que `username` y `password` no sean undefined o vacíos
  if (!username || !password) {
    return res.status(400).json({ message: 'El nombre de usuario y la contraseña son requeridos' });
  }

  try {
    // Crear un objeto UsuarioVO con los datos ingresados por el usuario
    const userVO = new UsuarioVO(username, password);
    const userVO2 = new UsuarioVO(username, password);
    // Validar las credenciales usando UsuarioDAO
    const validPassword = await UsuarioDAO.validatePassword(userVO);

    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    // Si la autenticación es correcta
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;*/
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Verificar que `username` y `password` no sean undefined o vacíos
  if (!username || !password) {
    return res.status(400).json({ message: 'El nombre de usuario y la contraseña son requeridos' });
  }

  try {
    // Crear un objeto UsuarioVO con los datos ingresados por el usuario
    const userVO = new UsuarioVO(username, password);

    // Validar las credenciales usando UsuarioDAO
    const validPassword = await UsuarioDAO.validatePassword(userVO);

    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Obtener el tipo de usuario desde la base de datos
    const user = await UsuarioDAO.findUserByUsername(username);
    const tipousuario = user.tipousuario;

    // Si la autenticación es correcta, enviar tipo de usuario
    res.json(tipousuario);
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
