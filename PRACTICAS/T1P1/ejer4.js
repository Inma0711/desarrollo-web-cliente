/*4. Define un array bidimensional de tamaño NxN y guárdalo en una variable 
llamada matriz. Este valor N será introducido por el usuario (mediante prompt) 
y deberá estar comprendido entre 2 – 5 (incluidos).

a) (0,5 puntos) Rellena la matriz con valores aleatorios entre 1 y 99.

b) (1 punto) Muestra por consola el contenido de matriz respetando el número de
filas y columnas. Es decir, todos los valores de una fila deben salir en horizontal 
separados por espacios y debajo, la siguiente fila. Además, todos los valores deben ocupar 2 espacios. 
Si un valor ocupa solo un espacio, ponle un 0 delante.

c) (0,5 puntos) Calcula la media de la suma de todos sus elementos y muestra un mensaje por consola para indicar ese valor.

d) (1 punto) Crea un array – resultado - de 2 dimensiones y añade en la fila 0 todos los elementos que superan la media anterior y en la fila 1 todos los elementos 
que se encuentran por debajo de la media. Muestra el array bidimensional por consola siguiendo las reglas del apartado b. Nota: Usa bucles. 
Quiero evaluarte competencias de bucles aquí.

e) (1 punto) Pide un valor entre 0 o 1 al usuario para realizar una ordenación del array resultado del apartado d) de forma que se ordene de forma ascendente (0)
o descendente (1) cada una de las filas de la matriz y muestra el resultado por consola. 
Nota: En este apartado sí puedes usar cualquier herramienta del lenguaje.

*/
 

function matriz(){
   
    var dimension = 0;
    var matriz = [];
    var media = 0;
    var suma = 0;

    dimension = parseInt(prompt("Introduce un valor"));
    

    for(var i = 0; i < dimension; i++){
        matriz[i] = new Array(dimension);

        for(j = 0; j < dimension; j++){
            matriz[i][j]=(Math.floor(Math.random() * 100));
            console.log(matriz[i][j]);
            suma += matriz[i][j];

        }
     
    }
   

//APARTADO C
media= suma/dimension;
console.log("La media es: " + media);


}