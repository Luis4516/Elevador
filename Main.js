import Elevador from "./Elevador.js";

class Main {
    constructor() {
        let e1 = new Elevador(); 
        let btnElevador = document.querySelector("#btnElevador");
        btnElevador.addEventListener('click', () => {
            
            console.log("Este elevador tiene " + e1._pisos + " pisos");
            console.log(e1.movPiso());
           
        });

        let btnPisos = document.querySelector("#btnPisos");
        btnPisos.addEventListener('click', () => {
            console.log(e1.modPisos());
        });

        let btnCapacidad = document.querySelector("#btnCapacidad");
        btnCapacidad.addEventListener('click', () => {
            console.log(e1.modCap());
        });

        let btnAbrir = document.querySelector("#btnAbrir");
        btnAbrir.addEventListener('click', () => {
            console.log(e1.abrir());
        });

        let btnCerrar = document.querySelector("#btnCerrar");
        btnCerrar.addEventListener('click', () => {
            console.log(e1.cerrar());
        });
    }
}

let m = new Main();