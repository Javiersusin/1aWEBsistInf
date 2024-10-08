class HorarioVO {
    constructor(rest, AbreManana, AbreNoche, diaSemana, CierraManana, CierraNoche) {
        this.rest = rest;
        this.AbreManana = AbreManana;
        this.AbreNoche = AbreNoche;
        this.diaSemana = diaSemana;
        this.CierraManana = CierraManana;
        this.CierraNoche = CierraNoche;
    }

    // Getters
    getRest() {
        return this.rest;
    }

    getAbreManana() {
        return this.AbreManana;
    }

    getAbreNoche() {
        return this.AbreNoche;
    }

    getDiaSemana() {
        return this.diaSemana;
    }

    getCierraManana() {
        return this.CierraManana;
    }

    getCierraNoche() {
        return this.CierraNoche;
    }

    // Setters
    setRest(rest) {
        this.rest = rest;
    }

    setAbreManana(AbreManana) {
        this.AbreManana = AbreManana;
    }

    setAbreNoche(AbreNoche) {
        this.AbreNoche = AbreNoche;
    }

    setDiaSemana(diaSemana) {
        this.diaSemana = diaSemana;
    }

    setCierraManana(CierraManana) {
        this.CierraManana = CierraManana;
    }

    setCierraNoche(CierraNoche) {
        this.CierraNoche = CierraNoche;
    }

    // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
    toJson() {
        return JSON.stringify({
            rest: this.rest,
            AbreManana: this.AbreManana,
            AbreNoche: this.AbreNoche,
            diaSemana: this.diaSemana,
            CierraManana: this.CierraManana,
            CierraNoche: this.CierraNoche
        });
    }
}

// // Ejemplo de uso
// const horario = new HorarioVO(1, "08:00", "20:00", "Lunes", "12:00", "22:00");
// const json = horario.toJson();
// console.log(json); // Salida: {"rest":1,"AbreManana":"08:00","AbreNoche":"20:00","diaSemana":"Lunes","CierraManana":"12:00","CierraNoche":"22:00"}

// const nuevoHorario = HorarioVO.fromJson(json);
// console.log(nuevoHorario); // Salida: HorarioVO { _rest: 1, _AbreManana: '08:00', _AbreNoche: '20:00', _diaSemana: 'Lunes', _CierraManana: '12:00', _CierraNoche: '22:00' }
module.exports = HorarioVO;

