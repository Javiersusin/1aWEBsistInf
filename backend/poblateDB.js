const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conectar a la base de datos
const dbPath = path.resolve(__dirname, 'database', 'users.db');
const db = new sqlite3.Database(dbPath);

// Insertar datos de ejemplo
const insert = `INSERT INTO users (username, password) VALUES (?, ?)`;

db.run(insert, ['admin', '12345']);
db.run(insert, ['user1', 'password1']);

db.close();
