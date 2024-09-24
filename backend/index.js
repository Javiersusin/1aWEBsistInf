const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a SQLite
const db = new sqlite3.Database('./mi_base_de_datos.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar a SQLite:', err);
  } else {
    console.log('Conectado a la base de datos SQLite');
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )`);
    
    // Insertar usuarios de ejemplo
    db.run(`INSERT OR IGNORE INTO usuarios (username, password) VALUES 
      ('admin', '12345'),
      ('user1', 'password1')`);
  }
});

// Ruta de autenticación
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM usuarios WHERE username = ? AND password = ?';
  db.get(query, [username, password], (err, row) => {
    if (err) {
      res.status(500).json({ message: 'Error en el servidor' });
    } else if (row) {
      res.status(200).json({ message: 'Inicio de sesión exitoso', username: row.username });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
