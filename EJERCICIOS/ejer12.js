/*Usando el array de colores del ejercicio anterior, crea un script que solicite
8 palabras al usuario y las almacene en otro array.
Ordena ese array (el del usuario) de forma que si aparecen colores del array de colores,
estos queden al principio del array y el resto de palabras al final. Muestralo por consola.
Ejemplo:
Array de palabras del usuario:
casa blue green orden brown bombilla bici pink
Array resultante:
blue green brown pink casa orden bombilla bici*/

let colores = [
  "red",
  "yellow",
  "green",
  "white",
  "blue",
  "brown",
  "pink",
  "black",
];

let array = [];

print("Array del usuario: ");
for (let i = 0; i < 8; i++) {
  let p = prompt("Introduzca una palabra: ");
  array.push(p);
  //document.write(array[i] + " ");
}

console.log(array);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < colores.length; j++) {
    if (array[i] == colores[j]) {
      array.unshift(array.splice(i, 1)[0]);
    }
  }
}
console.log(array);
