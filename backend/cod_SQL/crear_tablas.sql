CREATE TABLE Usuarios (
    nombre TEXT PRIMARY KEY,
    correo TEXT NOT NULL,
    contrasena TEXT NOT NULL,
    tipoUsuario TEXT NOT NULL
);

CREATE TABLE restaurante (
    idRestaurante SERIAL PRIMARY KEY,
    jefe TEXT,
    aforo INTEGER,
    fotos TEXT,
    URLweb TEXT,
    telefono INT,  
    descripcion TEXT,
    visitas INTEGER,
    email TEXT,
    nombre TEXT,  
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
