-- Índices para la tabla Usuarios
CREATE INDEX idx_usuarios_correo ON Usuarios (correo);

-- Índices para la tabla restaurante
CREATE INDEX idx_restaurante_jefe ON restaurante (jefe);
CREATE INDEX idx_restaurante_aforo ON restaurante (aforo);
CREATE INDEX idx_restaurante_visitas ON restaurante (visitas);
CREATE INDEX idx_restaurante_nombre ON restaurante (nombre);
CREATE INDEX idx_restaurante_email ON restaurante (email);
CREATE INDEX idx_restaurante_telefono ON restaurante (telefono);

-- Índices para la tabla resenas
CREATE INDEX idx_resenas_comentarista ON resenas (comentarista);
CREATE INDEX idx_resenas_local ON resenas (local);
CREATE INDEX idx_resenas_valoracion ON resenas (valoracion);
CREATE INDEX idx_resenas_fecha ON resenas (fecha);

-- Índices para la tabla horarios
CREATE INDEX idx_horarios_rest ON horarios (rest);
CREATE INDEX idx_horarios_diaSemana ON horarios (diaSemana);

-- Índices para la tabla categorias
CREATE INDEX idx_categorias_local ON categorias (local);
CREATE INDEX idx_categorias_productoEspecialidad ON categorias (productoEspecialidad);
