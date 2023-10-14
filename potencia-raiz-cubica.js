function potenciaCubica(num) {
    console.log("Programa elevar al cubo un número");
    var numero = Math.pow(num, 3);
    return numero;
}

function potenciaCuadrada(num){
    console.log("Programa elevar al cuadrado un número");
    var numero = Math.pow(num, 2);
    return numero;
}

function raizCubica(num){
    console.log("Programa sacar la raíz cúbica de un número");
    var numero = Math.round(Math.pow(num, 1/3));
    return numero;
}

function raizCuadrada(num){
    console.log("Programa sacar la raíz cuadrada de un número");
    var numero = Math.round(Math.pow(num, 1/2));
    return numero;
}

let num = 125;

//Función Potencia Cúbica
let numElevadoCubo = potenciaCubica(num);
console.log(num + " elevado al cubo = "+ numElevadoCubo + "\n");

//Función Potencia Cuadrada
let numElevadoCuadrado = potenciaCuadrada(num);
console.log(num + " elevado al cuadrado = "+ numElevadoCuadrado+ "\n");

//Función Raíz Cúbica
let numRaizCubica = raizCubica(num);
console.log("La raíz cúbica de "+ num +" es = "+ numRaizCubica+ "\n");

//Función Raíz Cúbica
let numRaizCuadrada = raizCuadrada(num);
console.log("La raíz cuadrada de "+ num +" es = "+ numRaizCuadrada+ "\n");