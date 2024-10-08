/*const express = require('express');
const db = require('../db'); 

const UsuarioVO = require('../vo/UsuarioVO');
const UsuarioDAO = require('../dao/UsuarioDAO');

const RestauranteVO = require('../vo/RestauranteVO');
const RestauranteDAO = require('../dao/RestauranteDAO');

const ResenaVO = require('../vo/ResenaVO');
const ResenaDAO = require('../dao/ResenaDAO');

const HorarioVO = require('../vo/HorarioVO');
const HorarioDAO = require('../dao/HorarioDAO');

const CategoriaVO = require('../vo/CategoriaVO');
const CategoriaDAO = require('../dao/CategoriaDAO');



const router = express.Router();

// Add a new review
router.post('/review', async (req, res) => {
    const { userId, restaurantId, rating, comment } = req.body;
    try {
        const result = await db.query('INSERT INTO reviews (user_id, restaurant_id, rating, comment) VALUES (?, ?, ?, ?)', [userId, restaurantId, rating, comment]);
        res.status(201).json({ message: 'Review added successfully', reviewId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add review' });
    }
});

// Add a new restaurant
router.post('/restaurant', async (req, res) => {
    const { name, address, cuisine } = req.body;
    try {
        const result = await db.query('INSERT INTO restaurants (name, address, cuisine) VALUES (?, ?, ?)', [name, address, cuisine]);
        res.status(201).json({ message: 'Restaurant added successfully', restaurantId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add restaurant' });
    }
});

// Add a new user
router.post('/user', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const result = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user' });
    }
});

module.exports = router;*/