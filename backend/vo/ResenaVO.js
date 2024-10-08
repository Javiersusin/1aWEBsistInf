class ResenaVO {
    constructor(idResena, fecha, texto, valoracion, comentarista, local) {
        this.idResena = idResena;
        this.fecha = fecha;
        this.texto = texto;
        this.valoracion = valoracion;
        this.comentarista = comentarista;
        this.local = local;
    }

    // Getters
    getIdResena() {
        return this.idResena;
    }

    getFecha() {
        return this.fecha;
    }

    getTexto() {
        return this.texto;
    }

    getValoracion() {
        return this.valoracion;
    }

    getComentarista() {
        return this.comentarista;
    }

    getLocal() {
        return this.local;
    }

    // Setters
    setIdResena(idResena) {
        this.idResena = idResena;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    setTexto(texto) {
        this.texto = texto;
    }

    setValoracion(valoracion) {
        // Ejemplo de validación: la valoración debe estar entre 1 y 5
        if (valoracion >= 1 && valoracion <= 5) {
            this.valoracion = valoracion;
        } else {
            throw new Error("La valoración debe estar entre 1 y 5");
        }
    }

    setComentarista(comentarista) {
        this.comentarista = comentarista;
    }

    setLocal(local) {
        this.local = local;
    }

    // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
    toJson() {
        return JSON.stringify({
            idResena: this.idResena,
            fecha: this.fecha,
            texto: this.texto,
            valoracion: this.valoracion,
            comentarista: this.comentarista,
            local: this.local
        });
    }
}

module.exports = ResenaVO;
