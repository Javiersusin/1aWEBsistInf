CREATE TABLE Usuarios (
    nombre TEXT PRIMARY KEY,
    correo TEXT NOT NULL,
    contrasena TEXT NOT NULL,
    tipoUsuario TEXT NOT NULL
);

CREATE TABLE restaurante (
    idRestaurante SERIAL PRIMARY KEY,
    jefe TEXT,
    aforo INTEGER NOT NULL,
    categoria TEXT NOT NULL,
    fotos TEXT NOT NULL,
    URLweb TEXT NULL,
    ubicacion TEXT NOT NULL,
    telefono INT NOT NULL,  
    descripcion TEXT NOT NULL,
    visitas INTEGER NOT NULL,
    email TEXT NOT NULL,
    nombre TEXT NOT NULL,  
    FOREIGN KEY (jefe) REFERENCES Usuarios(nombre) ON DELETE CASCADE
);

CREATE TABLE resenas (
    idResena SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    texto TEXT NOT NULL,
    valoracion INTEGER NOT NULL,
    comentarista TEXT NOT NULL,
    local INTEGER NOT NULL,
    FOREIGN KEY (comentarista) REFERENCES Usuarios(nombre) ON DELETE CASCADE,
    FOREIGN KEY (local) REFERENCES restaurante(idRestaurante) ON DELETE CASCADE
);

CREATE TABLE horarios (
    rest INTEGER NOT NULL, 
    AbreManana TEXT NOT NULL,
    AbreNoche TEXT NOT NULL,
    diaSemana TEXT NOT NULL,
    CierraManana TEXT NOT NULL,
    CierraNoche TEXT NOT NULL,
    PRIMARY KEY (diaSemana, rest),
    FOREIGN KEY (rest) REFERENCES restaurante(idRestaurante) ON DELETE CASCADE
);

CREATE TABLE categorias (
    local INTEGER NOT NULL,
    productoEspecialidad TEXT NOT NULL,
    FOREIGN KEY(local) REFERENCES restaurante(idRestaurante) ON DELETE CASCADE,
     PRIMARY KEY(local,productoEspecialidad)
);
