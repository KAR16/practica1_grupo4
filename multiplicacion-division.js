function multiplicacion(num1, num2) {
    console.log("Programa para multiplicar 2 números");
    var result = num1 * num2;
    return result;
}

function division(num1, num2){
    console.log("Programa para dividir 2 números");
    result = 0;
    if (num2 !== 0){
        result = num1 / num2;
    }else{
        console.log("Error: No se puede dividir dentro de cero.");
        result = null;
    }
    return result;
}

let num1 = 25;
let num2 = 3

//Función para multiplicar
let resMultiplicacion = multiplicacion(num1, num2);
console.log(num1 + " * "+ num2 + " = "+ resMultiplicacion);

//Función para dividir
let resDivision = division(num1, num2);
console.log(num1 + " / "+ num2 +" = "+ resDivision);

// Función para calcular el módulo de dos números
function modulo(num1, num2) {
    console.log("Programa para calcular el módulo de 2 números");
    result = 0;
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        console.log("Error: No se puede calcular el módulo por cero.");
        result = null;
    }
    return result;
}

// Función para calcular el módulo
let resModulo = modulo(num1, num2);
console.log(num1 + " % " + num2 + " = " + resModulo);

/ Función para calcular el módulo de dos números
function modulo(num1, num2) {
    console.log("Programa para calcular el módulo de 2 números");
    result = 0;
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        console.log("Error: No se puede calcular el módulo por cero.");
        result = null;
    }
    return result;
}

// Función para calcular el módulo
let resModulo = modulo(num1, num2);
console.log(num1 + " % " + num2 + " = " + resModulo);