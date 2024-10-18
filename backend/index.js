const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const addRoutes = require('./routes/add');
const getRoutes = require('./routes/get');
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

/*
// Configurar la conexión a PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'lithop21',
  database: process.env.DB_NAME || 'BiteFinder',
  port: 5432,
});*/

app.get('/', (req, res) => {
  res.send('Bienvenido al backend');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
//module.exports = pool;


/*PS D:\One Drive\OneDrive\Escritorio\SIST-inf-1AWEB> docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS                    NAMES
058db2d44482   sist-inf-1aweb-backend   "docker-entrypoint.s…"   26 minutes ago   Up 26 minutes   0.0.0.0:3000->3000/tcp   node_backend
d12624eedd11   postgres:15              "docker-entrypoint.s…"   26 minutes ago   Up 26 minutes   0.0.0.0:5432->5432/tcp   postgres_db
PS D:\One Drive\OneDrive\Escritorio\SIST-inf-1AWEB> docker exec -it postgres_db psql -U postgres -d BiteFinder
y aqui ya las consultas sql 1 a 1*/