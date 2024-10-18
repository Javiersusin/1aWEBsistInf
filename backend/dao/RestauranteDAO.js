const pool = require('../database/db');

class RestauranteDAO {
    static async createRestaurante(jefe, aforo, fotos, urlweb, telefono, descripcion, email, nombre, ubicacion) {
        try {
          console.log('Datos antes de insertar en la base de datos:', { jefe, aforo,  fotos, urlweb, telefono, descripcion, email, nombre, ubicacion });
          const result = await pool.query(
            'INSERT INTO restaurante (jefe, aforo,  fotos, urlweb, telefono, descripcion, email, nombre, ubicacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [jefe, aforo, fotos, urlweb, telefono, descripcion, email, nombre, ubicacion]
          );
          return result;
        } catch (error) {
          console.error('Error al crear el restaurante:', error);
          throw error;
        }
      }
      static async getRestaurante() {
        try {
          const result = await pool.query('SELECT * FROM restaurante');
          return result.rows;
        } catch (error) {
          console.error('Error al obtener los restaurantes:', error);
          throw error;
        }
      }

      static async getRestauranteByName(nombreRestaurante) {
        try {
            const result = await pool.query('SELECT * FROM restaurante WHERE nombre = $1', [nombreRestaurante]);
            return result.rows[0]; // Devolver solo el primer resultado (si hay uno)
        } catch (error) {
            console.error('Error al obtener el restaurante:', error);
            throw error;
        }
    }
    

    
      
  }
  
  module.exports = RestauranteDAO;
  
