const origen = "https://dog.ceo/api/breeds/image/random";
let salida = document.querySelector("section");

//Creo el objeto
let xhr = new XMLHttpRequest();

//Prepara la configuracion
xhr.open("GET", origen);

xhr.addEventListener("load", function(evento){
  const respuesta = JSON.parse(evento.target.response);
  
  //Hacemos la peticion
  const message = respuesta.message;
  const img = document.createElement("img");

  img.setAttribute("src", message);

    salida.appendChild(img);
   
    
});

xhr.addEventListener("error", function(evento){
    console.log(evento.target);
});

xhr.send();
