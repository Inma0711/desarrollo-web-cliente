let boton = document.querySelector("input[type='submit']");

boton.addEventListener("click", function(e){
    let nombre = document.querySelector("input[name='nombre']");
    let clave = document.querySelector("input[name='clave']");
    let reclave = document.querySelectorAll("input")[2];

    //Validacion de Nombre
    if(!nombre.value){
        e.preventDefault();
        alert("ERROR, Este nombre no puede estar vacio");
        nombre.focus();
        return;
    }
    
    //Validacion nombre no se puede repetir con la clave
    if(nombre.value == clave.value){
        e.preventDefault();
        alert("ERROR, El nombre no debe coincidir con la clave");
        clave.focus();
        return;
    }

    //Validacion clave
    if(!clave.value){
        e.preventDefault();
        alert("ERROR, La clave no puede estar vacio");
        clave.focus();
        return;
    }

    if(clave.value.length < 8){
        e.preventDefault();
        alert("ERROR, La clave debe tener minimo 8 caracteres");
        clave.focus();
        return;
    }

    //Validacion Repite clave
    if(!reclave.value){
        e.preventDefault();
        alert("ERROR, La clave repetida no puede estar vacia");
        reclave.focus();
        return;
    }
    
    if(clave.value != reclave.value){          
        e.preventDefault();
        alert("ERROR, La clave debe coincidir con el campo repetir clave");
        reclave.focus();
        return;
    }  

    //Validacion email
    if(!email.value){
        e.preventDefault();
        alert("ERROR, El email no puede estar vacio");
        email.focus();
        return;
    }
});


let email = document.querySelector("input[name='email']");
let remail = document.querySelector("input[name='remail']");

email.addEventListener("input", function(e){ 
    e.preventDefault();
    remail.value = email.value;
});

let opciones = document.querySelectorAll("input[type='checkbox']");
for (let i = 0; i < opciones.length; i++)
{
  opciones[i].addEventListener("input", function () {
    let texto = "";
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        texto += opciones[i].value + "\n";
      }
    }
    document.getElementById("afiText").value = texto;
  });
}

let formu = document.getElementById('formu');
formu.setAttribute('method', 'get');
formu.setAttribute('action', 'resultado.html');