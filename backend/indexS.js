const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Importa las rutas del usuario
const app = express();
const port = 5432;

// Configura middleware
app.use(cors());
app.use(express.json());

// Usa las rutas del usuario bajo la URL base '/api/users'
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal. Por favor, inténtalo de nuevo.' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


