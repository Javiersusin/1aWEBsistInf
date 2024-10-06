// db.js
const { Pool } = require('pg');

// Crear un pool de conexiones a PostgreSQL
const pool = new Pool({
  user: 'postgres',           // El usuario que creaste durante la instalación
  host: 'localhost',         // El host donde corre PostgreSQL (localhost si es local)
  database: 'BiteFinder',       // Nombre de la base de datos que creaste en pgAdmin
  password: 'simonete30',      // La contraseña que configuraste durante la instalación
  port: 5432,                // El puerto por defecto para PostgreSQL
});

module.exports = pool;

