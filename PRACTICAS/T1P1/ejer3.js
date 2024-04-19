/*Desarrolla un script que pida (mediante prompt) al usuario un número entero, positivo comprendido entre 5 y 10 (incluidos) y a continuación 
cree un array del tamaño indicado por ese número (hay que controlar que el número introducido es correcto. Si no es así, hay que volver a pedirlo).
Rellena ese array con números aleatorios enteros que resulten de multiplicar el número introducido por el número aleatorio resultante de lo siguiente:
 Math.floor(Math.random() * 10) –> números aleatorios de 0 a 9. 
Muestra por consola cada celda del array separada por espacio.
Muestra por consola un mensaje indicando todos los valores que superan la media resultante de la suma de todos los elementos del array.
Puedes lanzar la ejecución del script mediante un botón.
Nota: La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido 
el 0 pero no el 1).
*/ 

function array(){
    var array = [];
    var valor = 0;
    correcto = 0;
    var suma = 0;
    var media = 0;

   do{
    valor = parseInt(prompt("Introduce un numero"));

    if(isNaN(valor) || valor < 5 || valor > 10){
        alert("ERROR, vuelve a introducir un numero");
        
    }else{

 //       array = new Array(valor);
        correcto = 1;
       
    }

   }while(correcto==0);


   for(let i = 0; i < valor; i++){
    array.push((valor)*(Math.floor(Math.random() * 10)));
    suma += array[i];
   }
   media = suma/valor;

   for(let i = 0; i < array.length; i++){
    if(media<parseInt(array[i])){
       var num = array[i];
        console.log("Los valores que superan la media son: " + num);
    }

   }
   console.log(array);
   console.log(media);


}