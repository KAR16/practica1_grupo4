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
let num2 = 0

//Función para multiplicar
let resMultiplicacion = multiplicacion(num1, num2);
console.log(num1 + " * "+ num2 + " = "+ resMultiplicacion);

//Función para dividir
let resDivision = division(num1, num2);
console.log(num1 + " / "+ num2 +" = "+ resDivision);