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

