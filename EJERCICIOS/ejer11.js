/*Define un array con los siguientes colores: red, yellow, green, white,
blue, brown, pink y black. A continuación crea un generador aleatorio de banderas:
1. Se pide el numero de franjas de va a tener la bandera (entre 1 y 5).
2. El programa obtiene de forma aleatoria 5 colores del array.
3. Usando document.write, crea una tabla de una fila y tantas columnas como
colores tenga la bandera generada. Usa el atributo style para rellenar el fondo de
cada celda del color adecuado.
a) En el paso 2 se pueden repetir colores en la bandera.
b) en el paso 2 NO se pueden repetir colores en la bandera.
c) En el paso 2 se pueden repetir colores mientras no sean consecutivos (es decir, no puede
haber dos franjas juntas con el mismo color)*/ 


let colores = ['red', 'yellow', 'green', 'white', 'blue', 'brown', 'pink', 'black'];

let ale = 0;
do {
  ale = parseInt(prompt("Elige un numero del 1 al 5"));
}while(ale < 1 || ale > 5);

let array = []; 

for(let i = 0; i < ale; i++){
   let prov = colores[~~(Math.random()*colores.length)]; 

   let repetido = false;

    for (let j = 0; j < array.length; j++){
        if(prov == array[j]){
            repetido = true;
        }
    }
    if (!repetido)
        array.push(prov);
    else
        i--;
}

document.write("<table>");
for(let j = 0; j < array.length; j++){
    document.write("<tr><td style=\"background-color: " + array[j] + "\"></td></tr>");

}
document.write("</table>");

