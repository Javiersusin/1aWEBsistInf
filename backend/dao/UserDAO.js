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
}

module.exports = UserDAO;
