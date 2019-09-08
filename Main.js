import Elevador from "./Elevador.js";

class Main {
    constructor() {
        let e1 = new Elevador(); 
        let btnElevador = document.querySelector("#btnElevador");
        btnElevador.addEventListener('click', () => {
            
            console.log("Este elevador tiene " + e1._pisos + " pisos");
            console.log(e1.movPiso());
           
        });
    }
}

let m = new Main();