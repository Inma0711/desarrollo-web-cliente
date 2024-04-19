document.querySelector("input[type='button']").addEventListener("click", function () {

    //const origen = "https://localhost/DWEC/ajax/addAlumno.php";
    const origen = "https://127.0.0.1/academia/addAlumno.php";

    let salida = document.querySelector("section");

    //Creo el objeto
    let xhr = new XMLHttpRequest();

    //Hago una peticion
    xhr.open("POST", origen);

    // OBJETO FORMDATA
    let formu = document.querySelector("form");

    /* //FORMA 1: algunos campos
     let nicoFD = new FormData();
     nicoFD.append("nombre", "Don Nicolas");
     nicoFD.append("dni", "11111111N");
     nicoFD.append("apel", "Padre de familia");
     nicoFD.append("edad", "13");
     */

    //FORMA 2: Todos los campos del formulario
    let alumnos = new FormData(formu);

    console.log(alumnos);

    xhr.addEventListener("load", function (evento) {
        const respuesta = JSON.parse(evento.target.response);
        console.log(respuesta);
        salida.innerText = respuesta;
    });

    xhr.addEventListener("error", function (evento) {
        console.log(evento.target);
    });
    /*
        xhr.send(nicoFD);
        */
    xhr.send(alumnos);
});