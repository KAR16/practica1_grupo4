//Programa para validar si una palabra es palíndroma o no.
/*Práctica GitHub - Grupo #4*/

console.log("Programa para validar una palabra Palíndroma");

var palabra = "A man, a plan, a canal. Panama";
var palabra2 = "Hola";

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
console.log(palabra + " es palíndroma: " + palindrome(palabra));
console.log(palabra2 + " es palíndroma: " + palindrome(palabra2));