// VO para la tabla restaurante
class RestauranteVO {
    constructor(idRestaurante, jefe, aforo, fotos, URLweb, telefono, descripcion, visitas, email, nombre) {
        this.idRestaurante = idRestaurante; // SERIAL - PK
        this.jefe = jefe; // TEXT - FK (Usuarios.nombre)
        this.aforo = aforo; // INTEGER
        this.fotos = fotos; // TEXT
        this.URLweb = URLweb; // TEXT
        this.telefono = telefono; // INT
        this.descripcion = descripcion; // TEXT
        this.visitas = visitas; // INTEGER
        this.email = email; // TEXT
        this.nombre = nombre; // TEXT
    }
  
    // Getters
    getIdRestaurante() {
        return this.idRestaurante;
    }
  
    getJefe() {
        return this.jefe;
    }
  
    getAforo() {
        return this.aforo;
    }
  
    getFotos() {
        return this.fotos;
    }
  
    getURLweb() {
        return this.URLweb;
    }
  
    getTelefono() {
        return this.telefono;
    }
  
    getDescripcion() {
        return this.descripcion;
    }
  
    getVisitas() {
        return this.visitas;
    }
  
    getEmail() {
        return this.email;
    }
  
    getNombre() {
        return this.nombre;
    }
  
    // Setters
    setIdRestaurante(idRestaurante) {
        this.idRestaurante = idRestaurante;
    }
  
    setJefe(jefe) {
        this.jefe = jefe;
    }
  
    setAforo(aforo) {
        this.aforo = aforo;
    }
  
    setFotos(fotos) {
        this.fotos = fotos;
    }
  
    setURLweb(URLweb) {
        this.URLweb = URLweb;
    }
  
    setTelefono(telefono) {
        this.telefono = telefono;
    }
  
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
  
    setVisitas(visitas) {
        this.visitas = visitas;
    }
  
    setEmail(email) {
        this.email = email;
    }
  
    setNombre(nombre) {
        this.nombre = nombre;
    }

     // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
     toJson() {
        return JSON.stringify({
            idRestaurante: this.idRestaurante,
            jefe: this.jefe,
            aforo: this.aforo,
            fotos: this.fotos,
            URLweb: this.URLweb,
            telefono: this.telefono,
            descripcion: this.descripcion,
            visitas: this.visitas,
            email: this.email,
            nombre: this.nombre
        });
    }
}

  module.exports = RestauranteVO;
  