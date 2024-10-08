// backend/vo/UserVO.js

// class UserVO {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   // Getters
//   getUsername() {
//     return this.username;
//   }

//   getPassword() {
//     return this.password;
//   }

//   // Setters
//   setUsername(username) {
//     this.username = username;
//   }

//   setPassword(password) {
//     this.password = password;
//   }
// }

// VO para la tabla Usuarios
class UsuarioVO {
  constructor(nombre, correo= '', contrasena, tipoUsuario= '') {
      this.nombre = nombre; // TEXT - PK
      this.correo = correo; // TEXT - NOT NULL
      this.contrasena = contrasena; // TEXT - NOT NULL
      this.tipoUsuario = tipoUsuario; // TEXT - NOT NULL
  }

  // Getters
  getNombre() {
      return this.nombre;
  }

  getCorreo() {
      return this.correo;
  }

  getContrasena() {
      return this.contrasena;
  }

  getTipoUsuario() {
      return this.tipoUsuario;
  }

  // Setters
  setNombre(nombre) {
      this.nombre = nombre;
  }

  setCorreo(correo) {
      this.correo = correo;
  }

  setContrasena(contrasena) {
      this.contrasena = contrasena;
  }

  setTipoUsuario(tipoUsuario) {
      this.tipoUsuario = tipoUsuario;
  }

  // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
  toJson() {
    return JSON.stringify({
        nombre: this.nombre,
        correo: this.correo,
        contrasena: this.contrasena,
        tipoUsuario: this.tipoUsuario
    });
  }
}

//  Ejemplo de uso
// const usuario = new UsuarioVO("Juan", "juan@example.com", "1234", "admin");
// const usuarioJson = usuario.toJson();
// console.log(usuarioJson); 
module.exports = UsuarioVO;

