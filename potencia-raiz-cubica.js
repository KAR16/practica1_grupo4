function potenciaCubica(num) {
    console.log("Programa elevar al cubo un número");
    var numero = Math.pow(num, 3);
    return numero;
}

function raizCubica(num){
    console.log("Programa sacar la raíz cúbica de un número");
    var numero = Math.round(Math.pow(num, 1/3));
    return numero;
}

let num = 125;

//Función Potencia Cúbica
let numElevadoCubo = potenciaCubica(num);
console.log(num + " elevado al cubo = "+ numElevadoCubo);

//Función Raíz Cúbica
let numRaizCubica = raizCubica(num);
console.log("La raíz cúbica de "+ num +" es = "+ numRaizCubica);