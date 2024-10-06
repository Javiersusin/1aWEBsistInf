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
  constructor(nombre, correo, contrasena, tipoUsuario) {
      this._nombre = nombre; // TEXT - PK
      this._correo = correo; // TEXT - NOT NULL
      this._contrasena = contrasena; // TEXT - NOT NULL
      this._tipoUsuario = tipoUsuario; // TEXT - NOT NULL
  }

  // Getters
  get nombre() {
      return this._nombre;
  }

  get correo() {
      return this._correo;
  }

  get contrasena() {
      return this._contrasena;
  }

  get tipoUsuario() {
      return this._tipoUsuario;
  }

  // Setters
  set nombre(nombre) {
      this._nombre = nombre;
  }

  set correo(correo) {
      this._correo = correo;
  }

  set contrasena(contrasena) {
      this._contrasena = contrasena;
  }

  set tipoUsuario(tipoUsuario) {
      this._tipoUsuario = tipoUsuario;
  }

  // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
  toJson() {
    return JSON.stringify({
        nombre: this._nombre,
        correo: this._correo,
        contrasena: this._contrasena,
        tipoUsuario: this._tipoUsuario
    });
  }
}

//  Ejemplo de uso
// const usuario = new UsuarioVO("Juan", "juan@example.com", "1234", "admin");
// const usuarioJson = usuario.toJson();
// console.log(usuarioJson); 
module.exports = UsuarioVO;

