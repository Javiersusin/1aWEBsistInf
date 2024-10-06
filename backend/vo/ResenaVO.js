class ResenaVO {
    constructor(idResena, fecha, texto, valoracion, comentarista, local) {
        this._idResena = idResena;
        this._fecha = fecha;
        this._texto = texto;
        this._valoracion = valoracion;
        this._comentarista = comentarista;
        this._local = local;
    }

    // Getters
    get idResena() {
        return this._idResena;
    }

    get fecha() {
        return this._fecha;
    }

    get texto() {
        return this._texto;
    }

    get valoracion() {
        return this._valoracion;
    }

    get comentarista() {
        return this._comentarista;
    }

    get local() {
        return this._local;
    }

    // Setters
    set idResena(idResena) {
        this._idResena = idResena;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set texto(texto) {
        this._texto = texto;
    }

    set valoracion(valoracion) {
        // Ejemplo de validación: la valoración debe estar entre 1 y 5
        if (valoracion >= 1 && valoracion <= 5) {
            this._valoracion = valoracion;
        } else {
            throw new Error("La valoración debe estar entre 1 y 5");
        }
    }

    set comentarista(comentarista) {
        this._comentarista = comentarista;
    }

    set local(local) {
        this._local = local;
    }

    // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
    toJson() {
        return JSON.stringify({
            idResena: this._idResena,
            fecha: this._fecha,
            texto: this._texto,
            valoracion: this._valoracion,
            comentarista: this._comentarista,
            local: this._local
        });
    }
}

module.exports = ResenaVO;
