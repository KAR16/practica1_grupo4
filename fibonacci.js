function fibonacci(limit) {
    console.log("Programa para determinar un Fibonacci");
    const arrFib = [0, 1];
    let fib;
    for (let i = 2; i <= limit; i++) {
        console.log(i);
        fib = arrFib[i - 1] + arrFib[i - 2];
        arrFib.push(fib);
    }
    console.log("El fibonacci de " + limit + " es: " + fib);
    return arrFib;
}

function esPrimo(numero) {
    console.log("Programa para determinar si un número es Primo");
    if (numero <= 1) {
        return false;
    }
    // Comprobamos si el número es divisible por algún número menor que él mismo
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;// Si no ha sido divisible por ningún número, es primo return true;
}

let num = 4;

//Función Fibonacci
const testFib = fibonacci(num);
console.log(testFib);

//Función Primo
if (esPrimo(num)) {
    console.log(num + " es primo");
} else {
    console.log(num + " no es primo");
}

// Función para determinar si un número es primo
function esPrimo(numero) {
    console.log("Programa para determinar si un número es Primo");
    if (numero <= 1) {
        return false;
    }
    // Comprobamos si el número es divisible por algún número menor que él mismo
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true; // Si no ha sido divisible por ningún número, es primo
}

// Función para generar una lista de números primos en un rango dado
function generarPrimosEnRango(inicio, fin) {
    console.log("Programa para generar números primos en un rango");
    const numerosPrimos = [];

    for (let numero = inicio; numero <= fin; numero++) {
        if (esPrimo(numero)) {
            numerosPrimos.push(numero);
        }
    }

    return numerosPrimos;
}

// Definir el rango en el que deseas buscar números primos
const rangoInicio = 10;
const rangoFin = 50;

// Llamar a la función para generar números primos en el rango especificado
const primosEnRango = generarPrimosEnRango(rangoInicio, rangoFin);

// Imprimir los números primos encontrados en el rango
console.log("Números primos en el rango de " + rangoInicio + " a " + rangoFin + ":");
console.log(primosEnRango);
