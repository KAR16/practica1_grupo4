function multiplicacion(num1, num2) {
    console.log("Programa para multiplicar 2 números");
    var result = num1 * num2;
    return result;
}

function division(num1, num2){
    console.log("Programa para dividir 2 números");
    var result = num1 / num2;
    return result;
}

let num1 = 25;
let num2 = 5

//Función para multiplicar
let resMultiplicacion = multiplicacion(num1, num2);
console.log(num1 + " * "+ num2 + " = "+ resMultiplicacion);

//Función para dividir
let resDivision = division(num1, num2);
console.log(num1 + " / "+ num2 +" = "+ resDivision);