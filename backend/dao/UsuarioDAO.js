// backend/dao/UsuarioDAO.js
const pool = require('../database/db');
//const bcrypt = require('bcrypt');

class UsuarioDAO {
  // Método para buscar un usuario por nombre de usuario
  static async findUserByUsername(username) {
    try {
      const result = await pool.query('SELECT * FROM usuarios WHERE nombre = $1', [username]);
      return result.rows[0];
    } catch (error) {
      console.error('Error al buscar el usuario:', error);
      throw error;
    }
  }

  // Método para validar la contraseña
  static async validatePassword(userVO) {
    try {
      const user = await this.findUserByUsername(userVO.getNombre());

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      // Verifica si la contraseña es nula o no está definida
      if (!user.contrasena) {
        throw new Error('La contraseña no está definida para este usuario');
      }

      // Comparar la contraseña proporcionada con la almacenada en la base de datos
      const validPassword = user.contrasena === userVO.getContrasena();
      return validPassword;
    } catch (error) {
      console.error('Error al validar la contraseña:', error);
      throw error;
    }
  }
}

module.exports = UsuarioDAO;

