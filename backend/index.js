// backend/index.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000; // Cambia este valor según el puerto que desees usar

// Middleware para permitir solicitudes CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para analizar JSON en el cuerpo de las solicitudes
app.use(express.json()); 

// Usar la ruta de autenticación
app.use('/api', authRoutes);

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
