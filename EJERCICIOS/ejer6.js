/* Crea un script que pida al usuario un numero entero positivo N mayor a 0.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir.
A continuación, debe realizar lo siguiente:
a) Calcular los divisores del número N y mostrarlos.
b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior y
mostrarla.
c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla)*/

let array = [];
let valor1;
do {
  valor1 = parseInt(prompt("Dame un valor: "));
} while (isNaN(valor1) || valor1 < 0 );

for (let i = 1; i < valor1; i++) {
  if (valor1 % i == 0) {
    array.push(i);
  }
  document.write(array[i] + " ");
}
