// VO para la tabla restaurante
class RestauranteVO {
    constructor(idRestaurante, jefe, aforo, fotos, URLweb, telefono, descripcion, visitas, email, nombre) {
        this._idRestaurante = idRestaurante; // SERIAL - PK
        this._jefe = jefe; // TEXT - FK (Usuarios.nombre)
        this._aforo = aforo; // INTEGER
        this._fotos = fotos; // TEXT
        this._URLweb = URLweb; // TEXT
        this._telefono = telefono; // INT
        this._descripcion = descripcion; // TEXT
        this._visitas = visitas; // INTEGER
        this._email = email; // TEXT
        this._nombre = nombre; // TEXT
    }
  
    // Getters
    get idRestaurante() {
        return this._idRestaurante;
    }
  
    get jefe() {
        return this._jefe;
    }
  
    get aforo() {
        return this._aforo;
    }
  
    get fotos() {
        return this._fotos;
    }
  
    get URLweb() {
        return this._URLweb;
    }
  
    get telefono() {
        return this._telefono;
    }
  
    get descripcion() {
        return this._descripcion;
    }
  
    get visitas() {
        return this._visitas;
    }
  
    get email() {
        return this._email;
    }
  
    get nombre() {
        return this._nombre;
    }
  
    // Setters
    set idRestaurante(idRestaurante) {
        this._idRestaurante = idRestaurante;
    }
  
    set jefe(jefe) {
        this._jefe = jefe;
    }
  
    set aforo(aforo) {
        this._aforo = aforo;
    }
  
    set fotos(fotos) {
        this._fotos = fotos;
    }
  
    set URLweb(URLweb) {
        this._URLweb = URLweb;
    }
  
    set telefono(telefono) {
        this._telefono = telefono;
    }
  
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
  
    set visitas(visitas) {
        this._visitas = visitas;
    }
  
    set email(email) {
        this._email = email;
    }
  
    set nombre(nombre) {
        this._nombre = nombre;
    }

     // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
     toJson() {
        return JSON.stringify({
            idRestaurante: this._idRestaurante,
            jefe: this._jefe,
            aforo: this._aforo,
            fotos: this._fotos,
            URLweb: this._URLweb,
            telefono: this._telefono,
            descripcion: this._descripcion,
            visitas: this._visitas,
            email: this._email,
            nombre: this._nombre
        });
    }
}

  module.exports = RestauranteVO;
  