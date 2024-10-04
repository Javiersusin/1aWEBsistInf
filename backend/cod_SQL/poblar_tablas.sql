-- Insert data into Usuarios
INSERT INTO Usuarios (nombre, apellidos, correo, contrasena, tipoUsuario) VALUES
('Carlos', 'García', 'carlos@example.com', 'password123', 'jefe'),
('Maria', 'Lopez', 'maria@example.com', 'securepass', 'jefe'),
('Juan', 'Pérez', 'juan@example.com', 'juanpass', 'cliente'),
('Ana', 'Sánchez', 'ana@example.com', 'anasecure', 'cliente');

-- Check and insert a new restaurant only if the jefe exists
DO $$
DECLARE
    jefeId INTEGER;
    jefeCorreo TEXT;
BEGIN
    -- Insert for Carlos
    jefeCorreo := 'carlos@example.com';
    SELECT idUser INTO jefeId FROM Usuarios WHERE correo = jefeCorreo AND tipoUsuario = 'jefe';
    IF jefeId IS NOT NULL THEN
        INSERT INTO restaurante (jefe, aforo, fotos, URLweb, telefono, descripcion, visitas, email, nombre)
        VALUES (jefeId, 50, 'fotos/carlos_restaurante.jpg', 'http://carlosrestaurante.com', 123456789, 'Delicious Spanish cuisine', 500, 'info@carlosrestaurante.com', 'Carlos Restaurante');
    END IF;

    -- Insert for Maria
    jefeCorreo := 'maria@example.com';
    SELECT idUser INTO jefeId FROM Usuarios WHERE correo = jefeCorreo AND tipoUsuario = 'jefe';
    IF jefeId IS NOT NULL THEN
        INSERT INTO restaurante (jefe, aforo, fotos, URLweb, telefono, descripcion, visitas, email, nombre)
        VALUES (jefeId, 80, 'fotos/maria_restaurante.jpg', 'http://mariarestaurante.com', 987654321, 'Authentic Italian dishes', 800, 'info@mariarestaurante.com', 'Maria Restaurante');
    END IF;

    -- Insert for Juan (who is a cliente, should not work)
    jefeCorreo := 'juan@example.com';
    SELECT idUser INTO jefeId FROM Usuarios WHERE correo = jefeCorreo AND tipoUsuario = 'jefe';
    IF jefeId IS NOT NULL THEN
        INSERT INTO restaurante (jefe, aforo, fotos, URLweb, telefono, descripcion, visitas, email, nombre)
        VALUES (jefeId, 60, 'fotos/juan_restaurante.jpg', 'http://juanrestaurante.com', 654123987, 'Modern Mexican cuisine', 600, 'info@juanrestaurante.com', 'Juan Restaurante');
    ELSE
        RAISE NOTICE 'No se puede insertar el restaurante de Juan porque no es un jefe';
    END IF;

    -- Insert for Ana (who is also a cliente, should not work)
    jefeCorreo := 'ana@example.com';
    SELECT idUser INTO jefeId FROM Usuarios WHERE correo = jefeCorreo AND tipoUsuario = 'jefe';
    IF jefeId IS NOT NULL THEN
        INSERT INTO restaurante (jefe, aforo, fotos, URLweb, telefono, descripcion, visitas, email, nombre)
        VALUES (jefeId, 70, 'fotos/ana_restaurante.jpg', 'http://ana_restaurante.com', 654123456, 'Traditional Spanish dishes', 450, 'info@ana_restaurante.com', 'Ana Restaurante');
    ELSE
        RAISE NOTICE 'No se puede insertar el restaurante de Ana porque no es un jefe';
    END IF;
END $$;

-- Insert data into reseñas
INSERT INTO resenas (fecha, texto, valoracion, comentarista, local) VALUES
('2024-01-01', 'La comida estuvo excelente, lo recomiendo mucho.', 5, 3, 1),
('2024-02-15', 'El servicio fue malo, pero la comida fue decente.', 3, 4, 2);

-- Insert data into horarios
INSERT INTO horarios (rest, AbreManana, AbreNoche, diaSemana, CierraManana, CierraNoche) VALUES
(1, '08:00', '19:00', 'Lunes', '12:00', '23:00'),
(1, '08:00', '19:00', 'Martes', '12:00', '23:00'),
(2, '09:00', '20:00', 'Lunes', '13:00', '23:00'),
(2, '09:00', '20:00', 'Martes', '13:00', '23:00');

-- Insert data into categorias
INSERT INTO categorias (local, productoEspecialidad) VALUES
(1, 'Paella'),
(1, 'Tapas'),
(2, 'Pasta'),
(2, 'Pizza');
