const fs = require('fs').promises;
const path = require('path');
const pool = require('./db'); // Tu configuración de la base de datos

// Función para ejecutar los archivos SQL en orden
const ejecutarArchivosSQL = async () => {
  try {
    // Ruta a la carpeta donde están los archivos SQL
    const rutaCarpeta = path.join(__dirname, '../cod_SQL');

    // Leer los archivos SQL en el orden deseado
    const archivosSQL = [
      'borrar_tablas.sql',
      'crear_tablas.sql',
      'indices_tablas.sql',
      'poblar_tablas.sql'
    ];

    // Iterar sobre cada archivo y ejecutarlo
    for (const archivo of archivosSQL) {
      const rutaArchivo = path.join(rutaCarpeta, archivo);
      
      // Leer el contenido del archivo
      const contenidoSQL = await fs.readFile(rutaArchivo, 'utf8');

      // Dividir el contenido en consultas individuales usando ';' como separador
      const consultas = contenidoSQL
        .split(';')
        .map(query => query.trim())
        .filter(query => query.length > 0);

      // Iniciar una transacción
      await pool.query('BEGIN');

      for (const consulta of consultas) {
        await pool.query(consulta);
        console.log(`Ejecutada la consulta del archivo ${archivo}: ${consulta}`);
      }

      // Confirmar la transacción
      await pool.query('COMMIT');
      console.log(`El archivo ${archivo} se ejecutó correctamente.`);
    }
  } catch (error) {
    // En caso de error, revertir la transacción
    await pool.query('ROLLBACK');
    console.error('Error al ejecutar las consultas:', error);
  } finally {
    // Cerrar el pool de conexiones
    await pool.end();
  }
};

// Ejecutar la función
ejecutarArchivosSQL();
