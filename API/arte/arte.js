let form = document.querySelector("form");

let select = form[0];
let boton = form[1];

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/departments');


xhr.addEventListener("load", function (ev) {
    const cosa = ev.target;
    let response = cosa['response'];
    let objetito = JSON.parse(response);
    let depts = objetito['departments'];

    for (let dept of depts) {
        let option = document.createElement("option");
        option.setAttribute("value", dept["departmentId"]);
        option.innerText = dept["displayName"];
        select.appendChild(option);
    }

    console.log("OK");
});

xhr.addEventListener("error", function (ev) {
    console.log("ERROR");
});

xhr.send();


boton.addEventListener("click", function (ev) {
    ev.preventDefault();
    let div = document.querySelector(".salida");

    if (div != null) {
        document.body.removeChild(div);
    }

    const opcionSeleccionada = select['options'][select.selectedIndex];
    let id = opcionSeleccionada['value'];
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&hasImages=true&q=cat`;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.addEventListener("load", function (ev) {
        console.log("OK");
        let objetito = ev.target;

        const response = JSON.parse(objetito['response']);
        const objIDs = response['objectIDs'];

        let divg = document.createElement("div");
        divg.classList.add("salida");

        for (let id of objIDs) {
            let divp = document.createElement("div");
            divp.innerHTML = id;
            divg.appendChild(divp);
        }

        document.body.appendChild(divg);

    });

    xhr.addEventListener("error", function () {
        console.log("ERROR");
    });
    //TODO ME FALTA POR HACER

    xhr.send();
    /*
    1. Crear un nuevo objeto de XHR
    2. Meterle el metodo y la url al objeto XHR (open)
    3. Colocarle los manejadores de eventos 'load' y 'error' al XHR
    4. Enviar la peticion (send)
    */

});