const express = require('express');
const cors = require('cors');
const UserDAO = require('./dao/UserDAO');
const app = express();
const port = 5432;

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserDAO.findByUsername(username);
    
    if (user && user.password === password) {
        res.status(200).json({ message: 'Autenticación exitosa' });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
