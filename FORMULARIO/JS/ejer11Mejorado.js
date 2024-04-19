let boton = document.querySelector("button[type='submit']");

//console.log(boton);

boton.addEventListener("click", function(ev){

    const formu = document.forms[0];

    let dni = document.querySelector("input[name='dni']");
    //console.log(dni.value);

    let nombre = document.querySelector("input[name='nombre']");
    let apellido = document.querySelector("input[name='apellidos']");
    
    //! EXTREMADAMENTE IMPORTANTE, como sacar un radio button checked
    let genero = document.querySelector("input[name='genero']:checked");
    //console.log(genero);

    let nacionalidad = document.querySelector("[name='nacionalidad']>option:checked");
    //console.log(nacionalidad);

    let fechaDeNacimiento = document.querySelector("input[name='fechaNacimiento']");
    //console.log(fechaDeNacimiento);

    let webPersonal = document.querySelector("input[name='webPersonal']");
    //console.log(formu['webPersonal']);
/*
    let dni1 = formu.dni;
    console.log(dni1);
    */
    let contrasena = formu.contrasena;
    //console.log(contrasena);

    //Validacion de DNI
    dni.value = dni.value.toUpperCase();
    if(dni.value.length != 9){
        ev.preventDefault();
        alert("ERROR, Tiene que tener 9 caracteres");
        dni.focus();
        return;
    }
    if(dni.value[8]<"A" || dni.value[8]>"Z"){
        ev.preventDefault();
        alert("ERROR, Tiene que acabar en una letra >:(");
        dni.focus();
        return;
        //console.log(dni.value);
    }

    //Validacion de Nombre
    if(!nombre.value){
        ev.preventDefault();
        alert("ERROR, Este nombre no puede estar vacio");
        nombre.focus();
        return;
    }
    if(nombre.value.split(" ").length > 2){
        ev.preventDefault();
        alert("ERROR, No puedes tener mas de dos nombres");
        nombre.focus();
        return;
    }

    //Validacion de Apellidos
    if(!apellido.value){
        ev.preventDefault();
        alert("ERROR, Este apellido no puede estar vacio");
        apellido.focus();
        return;
    }
    if(apellido.value.split(" ").length > 2){
        ev.preventDefault();
        alert("ERROR, No puedes tener mas de dos apellidos");
        apellido.focus();
        return;
    }

    //Validacion de Genero
    if(genero == null){
        ev.preventDefault();
        alert("ERROR, Que pongas tu genero cohone");
        genero.focus();
        return;
    }

    //Validacion Nacionalidad
    //if()

    //Validacion de Fecha de nacimiento
    if(fechaDeNacimiento.value.length == 0){
        ev.preventDefault();
        alert("ERROR, La fecha tiene que estar entera >:(");
        fechaDeNacimiento.focus();
        return;
    }
    //console.log(fechaDeNacimiento.value.length);
    //console.log(fechaDeNacimiento.value);

    //Validacion webPersonal
    if(webPersonal.value.substring(0, 8) != "https://"){
        ev.preventDefault();
        alert("ERROR, la url tiene que empezar por https://");
        webPersonal.focus();
        return;
        //console.log(webPersonal.value);
    }
});