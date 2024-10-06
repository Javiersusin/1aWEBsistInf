class HorarioVO {
    constructor(rest, AbreManana, AbreNoche, diaSemana, CierraManana, CierraNoche) {
        this._rest = rest;
        this._AbreManana = AbreManana;
        this._AbreNoche = AbreNoche;
        this._diaSemana = diaSemana;
        this._CierraManana = CierraManana;
        this._CierraNoche = CierraNoche;
    }

    // Getters
    get rest() {
        return this._rest;
    }

    get AbreManana() {
        return this._AbreManana;
    }

    get AbreNoche() {
        return this._AbreNoche;
    }

    get diaSemana() {
        return this._diaSemana;
    }

    get CierraManana() {
        return this._CierraManana;
    }

    get CierraNoche() {
        return this._CierraNoche;
    }

    // Setters
    set rest(rest) {
        this._rest = rest;
    }

    set AbreManana(AbreManana) {
        this._AbreManana = AbreManana;
    }

    set AbreNoche(AbreNoche) {
        this._AbreNoche = AbreNoche;
    }

    set diaSemana(diaSemana) {
        this._diaSemana = diaSemana;
    }

    set CierraManana(CierraManana) {
        this._CierraManana = CierraManana;
    }

    set CierraNoche(CierraNoche) {
        this._CierraNoche = CierraNoche;
    }

    // Método para serializar la instancia a JSON, esto nos servirá para poder enviar datos a un servidor, almacenarlos en una base de datos, etc..
    toJson() {
        return JSON.stringify({
            rest: this._rest,
            AbreManana: this._AbreManana,
            AbreNoche: this._AbreNoche,
            diaSemana: this._diaSemana,
            CierraManana: this._CierraManana,
            CierraNoche: this._CierraNoche
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

