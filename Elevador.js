export default class Elevador {
    constructor() {
        this._pisos = 3;
        this._capacidad = 7;
        this._pisoActual = 1; //Planta baja
        this._puertaEstado = true;
        this._contador = 0;
    }
    get pisoActual() {
        return this._pisoActual;
    }
    get capacidad() {
        return this._capacidad;
    }
     
    movPiso() {
        
        let piso = prompt("Ingrese el piso deseado");
        
        if(piso < 1 || piso > this._pisos) {
            alert("No existe ese piso");
        }
        else if(piso == this._pisoActual) {
            alert("Usted ya está en este piso");
        }
        else if(piso != this._pisoActual) {
            console.log("Moviendóse al piso " + piso + "...........");
            this._pisoActual = piso;
        }
        return "Usted se encuentra en el piso " + this._pisoActual; 
    }
}