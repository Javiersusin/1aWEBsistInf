// db.js
const { Pool } = require('pg');

// Crear un pool de conexiones a PostgreSQL
const pool = new Pool({
  user: 'postgres.mxvqxeylelrehqjwbxmx',           // El usuario que creaste durante la instalación
  host: 'aws-0-eu-west-3.pooler.supabase.com',         // El host donde corre PostgreSQL (localhost si es local)
  database: 'postgres',       // Nombre de la base de datos que creaste en pgAdmin
  password: 'BiteFinderlithop21',      // La contraseña que configuraste durante la instalación
  port: 6543,                // El puerto por defecto para PostgreSQL
});

module.exports = pool;

