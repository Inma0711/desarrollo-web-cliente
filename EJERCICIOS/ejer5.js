/*Pedir dos valores numéricos con prompt y mostrar su suma, resta,
multiplicación, división y resto.*/



let v1 = parseInt(prompt("Dame un valor")); 
let valor2 = parseInt(prompt("Dame otro valor")); 

let suma = v1 + valor2;
let resta = v1 - valor2;
let mult = valor2 * valor2;
let div = v1/valor2;
let rest = v1%valor2;

alert("La suma es: " + suma + 
      "\nLa resta es: " +  resta + 
      "\nLa multi es: " +  mult + 
      "\nLa divi es: " + div + 
      "\nEl resto es: " + rest);

