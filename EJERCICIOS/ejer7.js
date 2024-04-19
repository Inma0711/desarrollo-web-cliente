/* EJERCICIO 7
Crea una funcion que reciba un array de valores enteros (positivos y 
    negativos), y devuelva otro array con la suma parcial de cada 
    elemento del array que se pasa como parametro*/

    function calcula(){
    let arr = [1,2,3,4,5,6]
    let arrRes =[];
    
    let sumaParcial = 0;
    for(i = 0; i < arr.length; i++){
        sumaParcial += arr[i];
        console.log(sumaParcial);

        arrRes.push(sumaParcial);
    }
    document.write(arrRes);

    }

