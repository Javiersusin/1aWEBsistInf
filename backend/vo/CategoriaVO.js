class CategoriaVO {
    constructor(local, productoEspecialidad) {
        this.local = local; // INTEGER - FK (restaurante.idRestaurante)
        this.productoEspecialidad = productoEspecialidad; // TEXT - PK (local, productoEspecialidad)
    }
  
    // Getter para 'local'
    getLocal() {
      return this.local;
    }
  
    // Setter para 'local'
    setLocal(local) {
      this.local = local;
    }
  
    // Getter para 'productoEspecialidad'
    getProductoEspecialidad() {
      return this.productoEspecialidad;
    }
  
    // Setter para 'productoEspecialidad'
    setProductoEspecialidad(productoEspecialidad) {
      this.productoEspecialidad = productoEspecialidad;
    }

    // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
    toJson() {
        return JSON.stringify({
            local: this.local,
            productoEspecialidad: this.productoEspecialidad
        });
    }
}
  
module.exports = CategoriaVO;