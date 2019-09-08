export default class Elevador {
    constructor() {
        this._pisos = 3;
        this._capacidad = 7;
        this._pisoActual = 1; //Planta baja
        this._estadoP = false;

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

    modPisos() {
        let cantPisos = prompt("Ingrese el maximo de pisos")
        this._pisos = cantPisos;
        return "Ahora hay " + this._pisos + " pisos";
    }

    modCap() {
        let cap = prompt("Ingrese la capacidad maxima de personas")
        this._capacidad = cap;
        return "Ahora la capacidad es de " + this._capacidad + " personas";
    }

    abrir() {
        if(this._estadoP == true) {
            console.log("La puerta ya está abierta");
        }
        else {
            console.log("Puerta abierta exitosamente");
            this._estadoP = true;
        }
        return "";
    }

    cerrar() {
        if(this._estadoP == false) {
            console.log("La puerta ya está cerrada");
        }
        else {
            console.log("Puerta cerrada exitosamente");
            this._estadoP = false;
        }
        return "";
    }
}