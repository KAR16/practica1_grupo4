function potenciaCubica(num) {
    console.log("Programa elevar al cubo un número");
    var numero = Math.pow(num, 3);
    return numero;
}

let num = 4;
let numElevadoCubo = potenciaCubica(num);
console.log(num + " elevado al cubo = "+ numElevadoCubo);
