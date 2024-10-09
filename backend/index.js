const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
//const addRoutes = require('./routes/add');

const app = express();
const port = 3000; // Cambia este valor según el puerto que desees usar

// Middleware para permitir solicitudes CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para analizar JSON en el cuerpo de las solicitudes
app.use(express.json()); 

// Usar la ruta de autenticación
app.use('/api', authRoutes);

// Usar la ruta que permite añadir elementos a la BD
//app.use('/api', addRoutes);


const { Pool } = require('pg');

// Verificar qué valores está tomando de las variables de entorno
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
// Crear una nueva instancia de Pool con las credenciales de la base de datos
const pool = new Pool({
  host: process.env.DB_HOST || 'db', // host es el nombre del servicio en docker-compose
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'lithop21',
  database: process.env.DB_NAME || 'BiteFinder',
  port: 5432,
});

module.exports = pool;

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); // Cambiado a localhost
});
