-- borrar las tablas en orden inverso a las dependencias, de lo contrario habrá fallos con las claves foráneas
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS horarios;
DROP TABLE IF EXISTS resenas;
DROP TABLE IF EXISTS restaurante;
DROP TABLE IF EXISTS Usuarios;
