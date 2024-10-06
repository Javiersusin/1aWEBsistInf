const pool = require('../database/db');
const UserVO = require('../vo/UserVO');

class UserDAO {
    static async findByUsername(username) {
        const query = 'SELECT * FROM users WHERE username = $1';
        const result = await pool.query(query, [username]);
        if (result.rows.length > 0) {
            const { id, username, password } = result.rows[0];
            return new UserVO(id, username, password);
        } else {
            return null;
        }
    }

    // Crear un nuevo usuario
    static async createUser(username, password) {
        const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
        const result = await pool.query(query, [username, password]);
        const { id, username: createdUsername, password: createdPassword } = result.rows[0];
        return new UserVO(id, createdUsername, createdPassword);
    }

    // Obtener todos los usuarios
    static async findAll() {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);
        return result.rows.map(row => new UserVO(row.id, row.username, row.password));
    }

    // Actualizar un usuario por su ID
    static async updateUser(id, username, password) {
        const query = 'UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *';
        const result = await pool.query(query, [username, password, id]);
        if (result.rows.length > 0) {
            const { id: updatedId, username: updatedUsername, password: updatedPassword } = result.rows[0];
            return new UserVO(updatedId, updatedUsername, updatedPassword);
        } else {
            return null;
        }
    }

    // Eliminar un usuario por su ID
    static async deleteUser(id) {
        const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        if (result.rows.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = UserDAO;
