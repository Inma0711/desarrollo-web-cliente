/*Escriba una función que reciba dos arrays y devuelva un nuevo array con
los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
array). El orden debe ser: primero los que están en el primer array y luego los que están
en el segundo.

CFGS Desarrollo de Aplicaciones Web / CFGS Desarrollo de Aplicaciones Multiplataforma
MEDAC, Instituto Oficial de Formación Profesional
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
[77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
[1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5]*/

let lista1 = [1, 2, 3, 3];
let lista2 = [3, 2, 1, 4, 5];

function listita(array1, array2) {
  let arrayfinal = Array();
  let arraytemp = new Array();

  arraytemp = [...array1, ...array2];
  arraytemp.sort();

  for (let i = 0; i < arraytemp.length; i++) {
    if (arraytemp[i] !== arraytemp[i + 1])
      arrayfinal.push(arraytemp[i]);
    else
      while (arraytemp[i] === arraytemp[i + 1])
        i++;
  }
  return arrayfinal;
}

console.log(listita(lista1, lista2));

