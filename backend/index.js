const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const addRoutes = require('./routes/add');
const getRoutes = require('./routes/get');
const updateRoutes = require('./routes/update');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Usar la ruta de autenticación
app.use('/api', authRoutes);

// Usar la ruta que permite añadir elementos a la BD
app.use('/api', addRoutes);

// Usar la ruta que permite coger elementos a la BD
app.use('/api', getRoutes);

// Usar la ruta que permite actualizar elementos de la BD
app.use('/api', updateRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido al backend');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


