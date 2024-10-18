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
          const result = await pool.query('SELECT nombre , fotos FROM restaurante');
          return result.rows;
        } catch (error) {
          console.error('Error al obtener los restaurantes:', error);
          throw error;
        }
      }

      static async getRestauranteByJefe(jefe) {
        try {
            const result = await pool.query('SELECT * FROM restaurante WHERE jefe = $1', [jefe]);
            return result.rows[0]; // Devolver solo el primer resultado (si hay uno)
        } catch (error) {
            console.error('Error al obtener el restaurante:', error);
            throw error;
        }
      }

        //Metodo para actualizar los valores de un restaurante mediante el formulario
        static async updateRestaurante(jefe, nombre, email, descripcion, categoria, telefono, url, aforo, ubicacion, fotos) {
            try {
                const result = await pool.query(`
                    UPDATE restaurante 
                    SET nombre = $2, email = $3, descripcion = $4, categoria = $5, telefono = $6, URLweb = $7, aforo = $8, ubicacion = $9, fotos = $10
                    WHERE jefe = $1`, [jefe, nombre, email, descripcion, categoria, telefono, url, aforo, ubicacion, fotos]);
                return result;
            } catch (error) {
                console.error('Error al actualizar el restaurante:', error);
                throw error;
            }
        }
  }
  
  module.exports = RestauranteDAO;
  
