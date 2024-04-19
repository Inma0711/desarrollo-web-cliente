/*function Sumar(){
    let a = prompt("Escribe un valor: ");
    let b = prompt("Escribe un valor: ");

    a = Number(a);
    b = Number(b);

    if(isNaN(a) || isNaN(b)){
        alert("NO ES VALIDO");
    }else{
        alert("La suma es: " + (a+b));
    }
  
}

function Restar(){
    let a = prompt("Escribe un valor: ");
    let b = prompt("Escribe un valor: ");

    a = Number(a);
    b = Number(b);

    if(isNaN(a) || isNaN(b)){
        alert("NO ES VALIDO");
    }else{
        alert("La resta es: " + (a-b));
    }
}

function Multiplicar(){
    let a = prompt("Escribe un valor: ");
    let b = prompt("Escribe un valor: ");

    a = Number(a);
    b = Number(b);

    if(isNaN(a) || isNaN(b)){
        alert("NO ES VALIDO");
    }else{
        alert("La multi es: " + (a*b));
    }
}

function Dividir(){
    let a = prompt("Escribe un valor: ");
    let b = prompt("Escribe un valor: ");


    a = Number(a);
    b = Number(b);


    if(isNaN(a) || isNaN(b)){
        alert("NO ES VALIDO");
        exit();
    }else if(b == 0){
        alert("NO SE PUEDE DIVIDIR ENTRE 0"); 
        exit();
    } else {
        alert("La division es: " + (a/b));
    }

}
*/


function pedirValores(){
    let a = parseInt(prompt("Escribe un valor: "));
    let b = parseInt(prompt("Escribe un valor: "));

    if(isNaN(a) || isNaN(b)){
        alert("NO ES VALIDO");
        return null;
    }
    return [a, b];
}

function Sumar(){
    let ns = pedirValores();
    if (ns !== null)
        alert("El resultado es " + (ns[0] + ns[1]));
}


function Restar(){
    pedirValores();
    let result = a - b;
    alert(result);
}