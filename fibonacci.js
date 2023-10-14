console.log("Programa para determinar un Fibonacci");

function fibonacci(limit){
    const arrFib = [0, 1];
    let fib;
    for (let i = 2; i<= limit; i++){
        console.log(i);
        fib = arrFib[i - 1] + arrFib[i - 2];
        arrFib.push(fib);
    }
    console.log("El fibonacci de "+ limit + " es: "+ fib);
    return arrFib;
}

const testFib = fibonacci(3);
console.log(testFib);