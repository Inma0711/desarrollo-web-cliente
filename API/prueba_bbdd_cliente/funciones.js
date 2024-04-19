
function localizacion_actual () {
    var ruta_completa = window.location.href;
    var ruta_separada = ruta_completa.split("/");
    var pagina_exacta = ruta_separada[ruta_separada.length-1]; //Nos quedamos con el nombre concreto de la página.
    return pagina_exacta;
}

function muestra_alumnos(datos) {
    let nueva_entrada = document.createElement("article");
    for (dato of datos){
        let entrada_alumno = document.createElement("p");
        entrada_alumno.textContent = "";
        for (valor in dato){
            entrada_alumno.textContent += `${valor}: ${dato[valor]}<br>`;
            console.log(entrada_alumno);
        }
        nueva_entrada.appendChild(entrada_alumno);
    }
}





function solicitar_datos(url, pagina_actual){
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP"); //Creo que eso no es necesario
	}
	xhr.open("GET", url);
	
	xhr.send();
	
	xhr.addEventListener('load', function(datos){
		respuesta = datos.target.response; //Almacenamos la respuesta.
		
        let input = JSON.parse(respuesta);

        //console.log(input);//input es el array de objetos resultados de la bbdd
        if(pagina_actual === 'insertar_alumno.html') agrega_select_form(input);
        if(pagina_actual === 'index.html') muestra_alumnos(input)
        



        //console.log(typeof(input));

        /*for(campo in input){
            console.log(input[campo]);
            imprime_nombre(input[campo]);
        }*/

	});
	
	xhr.addEventListener('error', function(datos){
		console.log("Se fue todo al carajo.");

	});
}



function agrega_select_form(datos){
   let formulario = document.forms[0];
    let nuevo_select = document.createElement("select");
    nuevo_select.setAttribute('name', 'curso');
    for (dato of datos){
        let nueva_opcion = document.createElement("option");
        for (valor in dato){
            if(valor === 'expediente') nueva_opcion.setAttribute('value', dato[valor]);
            if(valor === 'nombre') nueva_opcion.textContent = dato[valor];
        }
        nuevo_select.appendChild(nueva_opcion);
    }
    formulario.appendChild(nuevo_select);
}



document.addEventListener('DOMContentLoaded', function(){
    //agrega_select_form();

    let pagina_actual = localizacion_actual();

    console.log(pagina_actual);

    if(pagina_actual === 'insertar_alumno.html') solicitar_datos("http://localhost/prueba_bbdd_cliente/obtener_cursos.php", pagina_actual);
    else solicitar_datos("http://localhost/prueba_bbdd_cliente/obtener_alumno.php", pagina_actual)

    
});




