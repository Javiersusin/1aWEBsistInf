class CategoriaVO {
    constructor(local, productoEspecialidad) {
        this._local = local; // INTEGER - FK (restaurante.idRestaurante)
        this._productoEspecialidad = productoEspecialidad; // TEXT - PK (local, productoEspecialidad)
    }
  
    // Getter para 'local'
    get local() {
      return this._local;
    }
  
    // Setter para 'local'
    set local(local) {
      this._local = local;
    }
  
    // Getter para 'productoEspecialidad'
    get productoEspecialidad() {
      return this._productoEspecialidad;
    }
  
    // Setter para 'productoEspecialidad'
    set productoEspecialidad(productoEspecialidad) {
      this._productoEspecialidad = productoEspecialidad;
    }

    // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
    toJson() {
        return JSON.stringify({
            local: this._local,
            productoEspecialidad: this._productoEspecialidad
        });
    }
}
  
module.exports = CategoriaVO;